<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-divider': true,
    'mdc-deprecated-list-divider--padded': padded,
    'mdc-deprecated-list-divider--inset': inset,
    'mdc-deprecated-list-divider--inset-leading': insetLeading,
    'mdc-deprecated-list-divider--inset-trailing': insetTrailing,
    'mdc-deprecated-list-divider--inset-padding': insetPadding,
  })}
  role="separator"
  {...restProps}
/>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'li'">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
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
     * Apply padded styling.
     */
    padded?: boolean;
    /**
     * Apply inset styling.
     */
    inset?: boolean;
    /**
     * Apply leading inset styling.
     */
    insetLeading?: boolean;
    /**
     * Apply trailing inset styling.
     */
    insetTrailing?: boolean;
    /**
     * Apply inset padding styling.
     */
    insetPadding?: boolean;
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
  let nav = getContext<boolean | undefined>('SMUI:list:item:nav');
  let context = getContext<string | undefined>('SMUI:separator:context');
  let {
    use = [],
    class: className = '',
    padded = false,
    inset = false,
    insetLeading = false,
    insetTrailing = false,
    insetPadding = false,
    component: MyComponent = SmuiElement,
    tag = (nav || context !== 'list' ? 'hr' : 'li') as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  export function getElement() {
    return element.getElement();
  }
</script>
