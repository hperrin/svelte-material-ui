{#if href}
  <a
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-button
      {className}
      {variant === 'raised' ? 'mdc-button--raised' : ''}
      {variant === 'unelevated' ? 'mdc-button--unelevated' : ''}
      {variant === 'outlined' ? 'mdc-button--outlined' : ''}
      {dense ? 'mdc-button--dense' : ''}
      {color === 'secondary' ? 'smui-button--color-secondary' : ''}
      {context === 'card:action' ? 'mdc-card__action' : ''}
      {context === 'card:action' ? 'mdc-card__action--button' : ''}
      {context === 'dialog:action' ? 'mdc-dialog__button' : ''}
      {context === 'top-app-bar:navigation' ? 'mdc-top-app-bar__navigation-icon' : ''}
      {context === 'top-app-bar:action' ? 'mdc-top-app-bar__action-item' : ''}
      {context === 'snackbar' ? 'mdc-snackbar__action' : ''}
    "
    use:Ripple={[ripple, {unbounded: false}]}
    {href}
    {...actionProp}
    {...defaultProp}
    {...props}
  ><slot></slot></a>
{:else}
  <button
    use:useActions={use}
    use:forwardEvents
    class="
      mdc-button
      {className}
      {variant === 'raised' ? 'mdc-button--raised' : ''}
      {variant === 'unelevated' ? 'mdc-button--unelevated' : ''}
      {variant === 'outlined' ? 'mdc-button--outlined' : ''}
      {dense ? 'mdc-button--dense' : ''}
      {color === 'secondary' ? 'smui-button--color-secondary' : ''}
      {context === 'card:action' ? 'mdc-card__action' : ''}
      {context === 'card:action' ? 'mdc-card__action--button' : ''}
      {context === 'dialog:action' ? 'mdc-dialog__button' : ''}
      {context === 'top-app-bar:navigation' ? 'mdc-top-app-bar__navigation-icon' : ''}
      {context === 'top-app-bar:action' ? 'mdc-top-app-bar__action-item' : ''}
      {context === 'snackbar' ? 'mdc-snackbar__action' : ''}
    "
    use:Ripple={[ripple, {unbounded: false}]}
    {...actionProp}
    {...defaultProp}
    {...props}
  ><slot></slot></button>
{/if}

<script>
  import {setContext, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = 'primary';
  export let variant = 'text';
  export let dense = false;
  export let href = null;
  export let action = 'close';
  let defaultAction = false;
  export {defaultAction as default};

  let context = getContext('SMUI:button:context');

  $: dialogExcludes = (context === 'dialog:action') ? ['action', 'default'] : [];

  $: props = exclude($$props, ['use', 'class', 'ripple', 'color', 'variant', 'dense', 'href', ...dialogExcludes]);

  $: actionProp = (context === 'dialog:action' && action !== null) ? {'data-mdc-dialog-action': action} : {};
  $: defaultProp = (context === 'dialog:action' && defaultAction) ? {'data-mdc-dialog-button-default': ''} : {};

  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');
</script>