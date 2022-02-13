<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
        color,
        disabled: !!$$restProps.disabled,
        addClass,
        removeClass,
        addStyle,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-fab': true,
    'mdc-fab--mini': mini,
    'mdc-fab--exited': exited,
    'mdc-fab--extended': extended,
    'smui-fab--color-primary': color === 'primary',
    'mdc-fab--touch': touch,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {href}
  {...$$restProps}
  ><div class="mdc-fab__ripple" />
  <slot />{#if touch}<div class="mdc-fab__touch" />{/if}</svelte:component
>

<script lang="ts">
  import { setContext } from 'svelte';
  import type { SvelteComponentDev } from 'svelte/internal';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import { A, Button } from '@smui/common/elements';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color: 'primary' | 'secondary' = 'secondary';
  export let mini = false;
  export let exited = false;
  export let extended = false;
  export let touch = false;
  export let href: string | undefined = undefined;

  let element: SvelteComponentDev;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};

  export let component: typeof SvelteComponentDev = href == null ? Button : A;

  setContext('SMUI:label:context', 'fab');
  setContext('SMUI:icon:context', 'fab');

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement(): ReturnType<
    InstanceType<typeof component>['getElement']
  > {
    return element.getElement();
  }
</script>
