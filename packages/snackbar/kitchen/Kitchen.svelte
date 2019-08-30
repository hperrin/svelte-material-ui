{#if config}
  <Snackbar
    bind:this={component}
    on:MDCSnackbar:closed={handleClosed}
    labelText={config.label}
    {...(config && config.props || {})}
    {...prefixFilter($$props, 'snackbar$')}
  >
    <Label
      {...prefixFilter($$props, 'label$')}
    ></Label>
    {#if config.actions || config.dismissButton}
      <Actions>
        {#if config.actions}
          {#each config.actions as action}
            <Button
              on:click={e => action.onClick && action.onClick(e)}
              {...prefixFilter($$props, 'action$')}
            >{action.text}</Button>
          {/each}
        {/if}
        {#if config.dismissButton}
          <IconButton
            on:click={e => config.onDismiss && config.onDismiss(e)}
            title="{config.dismissTitle || 'Dismiss'}"
            {...prefixFilter($$props, 'dismiss$')}
          >{config.dismissText || 'close'}</IconButton>
        {/if}
      </Actions>
    {/if}
  </Snackbar>
{/if}

<script>
  import {tick} from 'svelte';
  import Label from '@smui/common/Label.svelte';
  import Button from '@smui/button/Button.svelte';
  import IconButton from '@smui/icon-button/IconButton.svelte';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import Snackbar from '../Snackbar.svelte';
  import Actions from '../Actions.js';

  let snackbars = [];
  let component;
  let config = null;
  let waiting = false;

  $: if (snackbars.length && !config) {
    config = snackbars[0];
    waiting = true;
  }

  $: if (component && waiting && !component.isOpen()) {
    component.open();
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
</script>