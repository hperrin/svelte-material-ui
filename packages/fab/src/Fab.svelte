<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
        color,
        disabled: !!restProps.disabled,
        addClass,
        removeClass,
        addStyle,
      },
    ],
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
  {...restProps}
  ><div class="mdc-fab__ripple"></div>
  {#if focusRing}<div class="mdc-fab__focus-ring"></div>{/if}
  {@render children?.()}{#if touch}<div
      class="mdc-fab__touch"
    ></div>{/if}</MyComponent
>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'button'"
>
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * A list of CSS styles.
     */
    style?: string;
    /**
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * Whether to show a focus fing.
     */
    focusRing?: boolean;
    /**
     * The color of the button.
     */
    color?: 'primary' | 'secondary';
    /**
     * Whether to shrink the button to mini size.
     */
    mini?: boolean;
    /**
     * Change this to true to animate out the button.
     */
    exited?: boolean;
    /**
     * Whether to use the extended style with a label.
     */
    extended?: boolean;
    /**
     * Whether to use touch styling
     */
    touch?: boolean;
    /**
     * If provided, the button will act as a link.
     */
    href?: Href;
    /**
     * The component to use to render the element.
     */
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    /**
     * The tag name of the element to create.
     */
    tag?: TagName;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    ripple = true,
    focusRing = false,
    color = 'secondary',
    mini = false,
    exited = false,
    extended = false,
    touch = false,
    href,
    component: MyComponent = SmuiElement,
    tag = (href == null ? 'button' : 'a') as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});

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
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
