<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-drawer-scrim': true,
    'smui-drawer-scrim__absolute': !fixed,
  })}
  {...restProps}
  onclick={(e: MouseEvent) => {
    handleClick(e);
    restProps.onclick?.(e);
  }}
>
  {@render children?.()}
</MyComponent>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'div'">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
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
     * Turn this off for non-page-wide drawers.
     *
     * This controls whether the drawer uses fixed or absolute positioning.
     */
    fixed?: boolean;
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
    fixed = true,
    component: MyComponent = SmuiElement,
    tag = 'div' as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  function handleClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDrawerScrimClick', event);
  }

  export function getElement() {
    return element.getElement();
  }
</script>
