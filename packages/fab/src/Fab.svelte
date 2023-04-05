<svelte:component
  this={component}
  {tag}
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
  {#if focusRing}<div class="mdc-fab__focus-ring" />{/if}
  <slot />{#if touch}<div class="mdc-fab__touch" />{/if}</svelte:component
>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type { SmuiElementMap, SmuiAttrs, SmuiSvgAttrs } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<typeof SvelteComponent>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    ripple?: boolean;
    focusRing?: boolean;
    color?: 'primary' | 'secondary';
    mini?: boolean;
    exited?: boolean;
    extended?: boolean;
    touch?: boolean;
    href?: string | undefined;
    component?: Component;
    tag?: TagName;
  };
  type $$Props = OwnProps &
    (
      | SmuiAttrs<keyof SmuiElementMap, OwnProps, 'getElement'>
      | SmuiSvgAttrs<OwnProps, 'getElement'>
    );

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let focusRing = false;
  export let color: 'primary' | 'secondary' = 'secondary';
  export let mini = false;
  export let exited = false;
  export let extended = false;
  export let touch = false;
  export let href: string | undefined = undefined;

  let element: SvelteComponent;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};

  export let component: Component = SmuiElement as unknown as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component)
      ? href == null
        ? 'button'
        : 'a'
      : undefined
  ) as TagName | undefined;

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

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
