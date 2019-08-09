{#if href}
  <a
    use:useActions={use}
    use:forwardEvents
    class="mdc-button {className}"
    class:mdc-button--raised={variant === 'raised'}
    class:mdc-button--unelevated={variant === 'unelevated'}
    class:mdc-button--outlined={variant === 'outlined'}
    class:mdc-button--dense={dense}
    class:mdc-card__action={context === 'card:action'}
    class:mdc-card__action--button={context === 'card:action'}
    class:mdc-top-app-bar__navigation-icon={context === 'top-app-bar:navigation'}
    class:mdc-top-app-bar__action-item={context === 'top-app-bar:action'}
    use:Ripple={[ripple, {unbounded: false, color}]}
    {href}
    {...exclude($$props, ['use', 'class', 'ripple', 'color', 'variant', 'dense', 'href'])}
  ><slot></slot></a>
{:else}
  <button
    use:useActions={use}
    use:forwardEvents
    class="mdc-button {className}"
    class:mdc-button--raised={variant === 'raised'}
    class:mdc-button--unelevated={variant === 'unelevated'}
    class:mdc-button--outlined={variant === 'outlined'}
    class:mdc-button--dense={dense}
    class:mdc-card__action={context === 'card:action'}
    class:mdc-card__action--button={context === 'card:action'}
    class:mdc-top-app-bar__navigation-icon={context === 'top-app-bar:navigation'}
    class:mdc-top-app-bar__action-item={context === 'top-app-bar:action'}
    use:Ripple={[ripple, {unbounded: false, color}]}
    {...exclude($$props, ['use', 'class', 'ripple', 'color', 'variant', 'dense', 'href'])}
  ><slot></slot></button>
{/if}

<script>
  import {setContext, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';
  import Ripple from '../ripple/index.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = null;
  export let variant = null;
  export let dense = false;
  export let href = null;

  let context = getContext('SMUI:button:context');

  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');
</script>