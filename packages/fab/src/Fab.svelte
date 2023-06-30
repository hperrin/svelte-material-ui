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

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'button'"
>
  import type { SvelteComponent } from 'svelte';
  import { setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

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
    href?: Href;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

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

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? (href == null ? 'button' : 'a') : undefined;

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

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>
