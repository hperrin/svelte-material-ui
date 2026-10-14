<svelte:options runes />

{#if config}
  <Snackbar
    bind:this={element}
    labelText={config.label}
    {...(config && config.props) || {}}
    {...snackbarProps}
    onSMUISnackbarClosed={(e) => {
      handleClosed(e);
      snackbarProps.onSMUISnackbarClosed?.(e);
    }}
  >
    <Label {...labelProps} />
    {#if config.actions || config.dismissButton}
      <Actions>
        {#if config.actions}
          {#each config.actions as action}
            <Button
              {...actionProps}
              onclick={(e) => {
                handleActionClick(action, e);
                actionProps.onclick?.(e as unknown as any);
              }}>{action.text}</Button
            >
          {/each}
        {/if}
        {#if config.dismissButton}
          <IconButton
            title={config.dismissTitle || 'Dismiss'}
            {...dismissProps}
            onclick={(e) => {
              handleDismiss(e);
              dismissProps.onclick?.(e);
            }}
            ><Icon {...dismissIconProps}
              >{#if dismiss}{@render dismiss?.()}{:else}{config.dismissText ??
                  'close'}{/if}</Icon
            ></IconButton
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
  import type { ComponentProps, Snippet } from 'svelte';
  import { tick } from 'svelte';
  import type { SmuiEveryElement } from '@smui/common';
  import { Label } from '@smui/common';
  import Button from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

  import type { MDCSnackbarCloseEvent } from '../mdc';
  import type { ConfigAction, Config } from './Kitchen.types.js';
  import Snackbar from '../Snackbar.svelte';
  import Actions from '../Actions.svelte';

  let {
    dismiss,
    snackbarProps = $bindable({}),
    labelProps = $bindable({}),
    actionProps = $bindable({}),
    dismissProps = $bindable({}),
    dismissIconProps = $bindable({}),
  }: {
    /**
     * A spot for the dismiss icon contents.
     */
    dismiss?: Snippet;
    snackbarProps?: ComponentProps<typeof Snackbar>;
    labelProps?: ComponentProps<typeof Label>;
    actionProps?: ComponentProps<typeof Button>;
    dismissProps?: ComponentProps<
      typeof IconButton<DismissHref, DismissTagName>
    >;
    dismissIconProps?: ComponentProps<typeof Icon>;
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
