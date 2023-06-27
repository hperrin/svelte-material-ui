{#if config}
  <Snackbar
    bind:this={element}
    on:SMUISnackbar:closed={handleClosed}
    labelText={config.label}
    {...(config && config.props) || {}}
    {...prefixFilter($$restProps, 'snackbar$')}
  >
    <Label {...prefixFilter($$restProps, 'label$')} />
    {#if config.actions || config.dismissButton}
      <Actions>
        {#if config.actions}
          {#each config.actions as action}
            <Button
              on:click={(event) => handleActionClick(action, event)}
              {...prefixFilter($$restProps, 'action$')}>{action.text}</Button
            >
          {/each}
        {/if}
        {#if config.dismissButton}
          <IconButton
            on:click={handleDismiss}
            title={config.dismissTitle || 'Dismiss'}
            {...prefixFilter($$restProps, 'dismiss$')}
            >{config.dismissText || 'close'}</IconButton
          >
        {/if}
      </Actions>
    {/if}
  </Snackbar>
{/if}

<script lang="ts">
  import type { MDCSnackbarCloseEvent } from '@material/snackbar';
  import type { ComponentProps } from 'svelte';
  import { prefixFilter } from '@smui/common/internal';
  import { Label } from '@smui/common';
  import Button from '@smui/button';
  import IconButton from '@smui/icon-button';

  import type { ConfigAction, Config } from './Kitchen.types.js';
  import Snackbar from '../Snackbar.svelte';
  import Actions from '../Actions.js';

  type $$Props = {
    [k in keyof ComponentProps<Snackbar> as `snackbar\$${k}`]?: ComponentProps<Snackbar>[k];
  } & {
    [k in keyof ComponentProps<Button> as `action\$${k}`]?: ComponentProps<Button>[k];
  } & {
    [k in keyof ComponentProps<IconButton> as `dismiss\$${k}`]?: ComponentProps<IconButton>[k];
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

  function handleActionClick(action: ConfigAction, e: CustomEvent) {
    if (action.onClick) {
      action.onClick(e as unknown as MouseEvent);
    }
  }

  function handleDismiss(e: CustomEvent) {
    if (config?.onDismiss) {
      config.onDismiss(e as unknown as MouseEvent);
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
