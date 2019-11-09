{#if href}
  <a
    use:useActions={use}
    use:forwardEvents
    class="mdc-button {className}"
    class:mdc-button--raised={variant === 'raised'}
    class:mdc-button--unelevated={variant === 'unelevated'}
    class:mdc-button--outlined={variant === 'outlined'}
    class:smui-button-rounded={shape === 'rounded'}
    class:mdc-button--dense={dense}
    class:smui-button--color-secondary={color === 'secondary'}
    class:mdc-card__action={context === 'card:action'}
    class:mdc-card__action--button={context === 'card:action'}
    class:mdc-dialog__button={context === 'dialog:action'}
    class:mdc-top-app-bar__navigation-icon={context === 'top-app-bar:navigation'}
    class:mdc-top-app-bar__action-item={context === 'top-app-bar:action'}
    class:mdc-snackbar__action={context === 'snackbar'}
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
    class="mdc-button {className}"
    class:mdc-button--raised={variant === 'raised'}
    class:mdc-button--unelevated={variant === 'unelevated'}
    class:mdc-button--outlined={variant === 'outlined'}
    class:smui-button-rounded={shape === 'rounded'}
    class:mdc-button--dense={dense}
    class:smui-button--color-secondary={color === 'secondary'}
    class:mdc-card__action={context === 'card:action'}
    class:mdc-card__action--button={context === 'card:action'}
    class:mdc-dialog__button={context === 'dialog:action'}
    class:mdc-top-app-bar__navigation-icon={context === 'top-app-bar:navigation'}
    class:mdc-top-app-bar__action-item={context === 'top-app-bar:action'}
    class:mdc-snackbar__action={context === 'snackbar'}
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
  export let shape;
  export let dense = false;
  export let href = null;
  export let action = 'close';
  let defaultAction = false;
  export {defaultAction as default};

  let context = getContext('SMUI:button:context');

  $: dialogExcludes = (context === 'dialog:action') ? ['action', 'default'] : [];

  $: props = exclude($$props, ['use', 'class', 'ripple', 'color', 'variant', 'shape', 'dense', 'href', ...dialogExcludes]);

  $: actionProp = (context === 'dialog:action' && action !== null) ? {'data-mdc-dialog-action': action} : {};
  $: defaultProp = (context === 'dialog:action' && defaultAction) ? {'data-mdc-dialog-button-default': ''} : {};

  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');
</script>