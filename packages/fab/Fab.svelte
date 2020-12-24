<svelte:component
  this={component}
  use={[[Ripple, {ripple, unbounded: false, disabled: !!$$props.disabled, classForward: classes => rippleClasses = classes}], forwardEvents, ...use]}
  class="
    mdc-fab
    {className}
    {rippleClasses.join(' ')}
    {mini ? 'mdc-fab--mini' : ''}
    {exited ? 'mdc-fab--exited' : ''}
    {extended ? 'mdc-fab--extended' : ''}
    {color === 'primary' ? 'smui-fab--color-primary' : ''}
  "
  {...exclude($$props, ['use', 'class', 'ripple', 'color', 'mini', 'exited', 'extended', 'component'])}
>{#if ripple}<div class="mdc-fab__ripple"></div>{/if}<slot></slot></svelte:component>

<script>
  import {setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import A from '@smui/common/A.svelte';
  import Button from '@smui/common/Button.svelte';
  import Ripple from '@smui/ripple/bare.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let color = 'secondary';
  export let mini = false;
  export let exited = false;
  export let extended = false;
  // Purposely left out of props exclude.
  export let href = null;

  export let component = href == null ? Button : A;

  let rippleClasses = [];

  setContext('SMUI:label:context', 'fab');
  setContext('SMUI:icon:context', 'fab');
</script>
