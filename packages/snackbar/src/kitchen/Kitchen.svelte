<svelte:options runes />

{#if config}
  <Snackbar
    bind:this={element}
    labelText={config.label}
    {...(config && config.props) || {}}
    {...prefixFilter(restProps, 'snackbar$')}
    onSMUISnackbarClosed={(e) => {
      handleClosed(e);
      restProps.snackbar$onSMUISnackbarClosed?.(e);
    }}
  >
    <Label {...prefixFilter(restProps, 'label$')} />
    {#if config.actions || config.dismissButton}
      <Actions>
        {#if config.actions}
          {#each config.actions as action}
            <Button
              {...prefixFilter(restProps, 'action$')}
              onclick={(e) => {
                handleActionClick(action, e);
                restProps.action$onclick?.(e as unknown as any);
              }}>{action.text}</Button
            >
          {/each}
        {/if}
        {#if config.dismissButton}
          <IconButton
            title={config.dismissTitle || 'Dismiss'}
            {...prefixFilter(restProps, 'dismiss$')}
            onclick={(e) => {
              handleDismiss(e);
              (restProps as unknown as any).dismiss$onclick?.(e);
            }}
            >{#if dismiss}{@render dismiss?.()}{:else}{config.dismissText ??
                'close'}{/if}</IconButton
          >
        {/if}
      </Actions>
    {/if}
  </Snackbar>
{/if}

<script
  lang="ts"
  generics="DismissHref extends string | undefined = undefined, DismissTagName extends SmuiEveryElement = DismissHref extends string ? 'a' : 'button'"
>
  import type { MDCSnackbarCloseEvent } from '@material/snackbar';
  import type { ComponentProps, Snippet } from 'svelte';
  import { tick } from 'svelte';
  import { prefixFilter } from '@smui/common/internal';
  import type { SmuiEveryElement } from '@smui/common';
  import { Label } from '@smui/common';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';

  import type { ConfigAction, Config } from './Kitchen.types.js';
  import Snackbar from '../Snackbar.svelte';
  import Actions from '../Actions.svelte';

  type IconButtonProps = Omit<
    ComponentProps<typeof IconButton<DismissHref, DismissTagName>>,
    symbol
  >;
  let {
    dismiss,
    ...restProps
  }: {
    [k in keyof ComponentProps<
      typeof Snackbar
    > as `snackbar\$${k}`]?: ComponentProps<typeof Snackbar>[k];
  } & {
    [k in keyof ComponentProps<
      typeof Button
    > as `action\$${k}`]?: ComponentProps<typeof Button>[k];
  } & {
    /**
     * If provided, the button will act as a link.
     */
    dismiss$href?: DismissHref;
    /**
     * The tag name of the element to create.
     */
    dismiss$tag?: DismissTagName;
    /**
     * A spot for the dismiss icon contents.
     */
    dismiss?: Snippet;
  } & {
    [k in keyof IconButtonProps as `dismiss\$${k}`]?: IconButtonProps[k];
  } = $props();

  let element: Snackbar | undefined = $state();
  let snackbars: Config[] = $state([]);
  let config: Config | undefined = $state();
  let waiting = $state(false);

  $effect(() => {
    if (snackbars.length && config == null) {
      config = snackbars[0];
      waiting = true;
    }
  });

  $effect(() => {
    if (element && waiting && !element.isOpen()) {
      waiting = false;

      // Let the snackbar render its elements.
      tick().then(() => {
        if (element) {
          element.open();
        }
      });
    }
  });

  function handleClosed(e: MDCSnackbarCloseEvent) {
    if (config?.onClose) {
      config.onClose(e);
    }
    snackbars.splice(0, 1);
    // Let the snackbar handle its close event.
    tick().then(() => {
      config = undefined;
    });
  }

  function handleActionClick(action: ConfigAction, e: MouseEvent) {
    if (action.onClick) {
      action.onClick(e);
    }
  }

  function handleDismiss(e: MouseEvent) {
    if (config?.onDismiss) {
      config.onDismiss(e);
    }
  }

  export function push(config: Config) {
    snackbars.push(config);
  }

  export function getElement() {
    return element?.getElement();
  }
</script>
