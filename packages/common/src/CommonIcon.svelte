<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-button__icon': context === 'button',
    'mdc-fab__icon': context === 'fab',
    'mdc-icon-button__icon': context === 'icon-button',
    'mdc-icon-button__icon--on': context === 'icon-button' && on,
    'mdc-tab__icon': context === 'tab',
    'mdc-banner__icon': context === 'banner',
    'mdc-segmented-button__icon': context === 'segmented-button',
  })}
  aria-hidden="true"
  {...svg ? { focusable: 'false', tabindex: '-1' } : {}}
  {...restProps}>{@render children?.()}</MyComponent
>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'i'">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';

  import type { ActionArray } from './internal/useActions.js';
  import { classMap } from './internal/index.js';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from './smui.types.js';
  import { SmuiElement, Svg } from './index.js';

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
     * Whether the icon is toggled.
     */
    on?: boolean;
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
    on = false,
    component: MyComponent = SmuiElement,
    tag = 'i' as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  const svg = $derived(
    tag === 'svg' ||
      MyComponent === (Svg as SmuiComponent<SmuiElementMap['svg']>),
  );
  const context = getContext<string | undefined>('SMUI:icon:context');

  export function getElement() {
    return element.getElement();
  }
</script>
