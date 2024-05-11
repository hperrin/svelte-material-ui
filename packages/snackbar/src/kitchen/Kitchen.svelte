<svelte:options runes={false} />

{#if config}
  <Snackbar
    bind:this={element}
    labelText={config.label}
    {...(config && config.props) || {}}
    {...prefixFilter($$restProps, 'snackbar$')}
    onSMUISnackbarClosed={(e) => {
      handleClosed(e);
      $$restProps.snackbar$onSMUISnackbarClosed?.(e);
    }}
  >
    <Label {...prefixFilter($$restProps, 'label$')} />
    {#if config.actions || config.dismissButton}
      <Actions>
        {#if config.actions}
          {#each config.actions as action}
            <Button
              {...prefixFilter($$restProps, 'action$')}
              onclick={(e) => {
                handleActionClick(action, e);
                $$restProps.action$onclick?.(e);
              }}>{action.text}</Button
            >
          {/each}
        {/if}
        {#if config.dismissButton}
          <IconButton
            title={config.dismissTitle || 'Dismiss'}
            {...prefixFilter($$restProps, 'dismiss$')}
            onclick={(e) => {
              handleDismiss(e);
              $$restProps.dismiss$onclick?.(e);
            }}
            ><slot name="dismiss"
              >{!$$slots.dismiss ? config.dismissText ?? 'close' : ''}</slot
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
  import type { MDCSnackbarCloseEvent } from '@material/snackbar';
  import type { ComponentProps } from 'svelte';
  import { prefixFilter } from '@smui/common/internal';
  import type { SmuiEveryElement } from '@smui/common';
  import { Label } from '@smui/common';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';

  import type { ConfigAction, Config } from './Kitchen.types.js';
  import Snackbar from '../Snackbar.svelte';
  import Actions from '../Actions.js';

  type IconButtonProps = Omit<
    ComponentProps<IconButton<DismissHref, DismissTagName>>,
    symbol
  >;

  type $$Props = {
    [k in keyof ComponentProps<Snackbar> as `snackbar\$${k}`]?: ComponentProps<Snackbar>[k];
  } & {
    [k in keyof ComponentProps<Button> as `action\$${k}`]?: ComponentProps<Button>[k];
  } & {
    dismiss$href?: DismissHref;
    dismiss$tag?: DismissTagName;
  } & {
    [k in keyof IconButtonProps as `dismiss\$${k}`]?: IconButtonProps[k];
  };

  let element: Snackbar;
  let snackbars: Config[] = [];
  let config: Config | undefined = undefined;
  let waiting = false;

  $: if (snackbars.length && !config) {
    config = snackbars[0];
    waiting = true;
  }

  $: if (element && waiting && !element.isOpen()) {
    element.open();
    waiting = false;
  }

  function handleClosed(e: MDCSnackbarCloseEvent) {
    if (config?.onClose) {
      config.onClose(e);
    }
    snackbars.splice(0, 1);
    snackbars = snackbars;
    config = undefined;
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
    snackbars = snackbars;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
