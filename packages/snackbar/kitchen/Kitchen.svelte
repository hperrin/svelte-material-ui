{#if config}
  <Snackbar
    bind:this={element}
    on:MDCSnackbar:closed={handleClosed}
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
              on:click={(e) => action.onClick && action.onClick(e)}
              {...prefixFilter($$restProps, 'action$')}>{action.text}</Button
            >
          {/each}
        {/if}
        {#if config.dismissButton}
          <IconButton
            on:click={(e) => config.onDismiss && config.onDismiss(e)}
            title={config.dismissTitle || 'Dismiss'}
            {...prefixFilter($$restProps, 'dismiss$')}
            >{config.dismissText || 'close'}</IconButton
          >
        {/if}
      </Actions>
    {/if}
  </Snackbar>
{/if}

<script>
  import { prefixFilter } from '@smui/common/internal.js';
  import Label from '@smui/common/CommonLabel.svelte';
  import Button from '@smui/button/Button.svelte';
  import IconButton from '@smui/icon-button/IconButton.svelte';
  import Snackbar from '../Snackbar.svelte';
  import Actions from '../Actions.js';

  let element;
  let snackbars = [];
  let config = null;
  let waiting = false;

  $: if (snackbars.length && !config) {
    config = snackbars[0];
    waiting = true;
  }

  $: if (element && waiting && !element.isOpen()) {
    element.open();
    waiting = false;
  }

  function handleClosed(e) {
    if (config.onClose) {
      config.onClose(e);
    }
    snackbars.splice(0, 1);
    snackbars = snackbars;
    config = null;
  }

  export function push(config) {
    snackbars.push(config);
    snackbars = snackbars;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
