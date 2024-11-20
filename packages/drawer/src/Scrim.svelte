<svelte:options runes={false} />

<svelte:component
  this={component}
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-drawer-scrim': true,
    'smui-drawer-scrim__absolute': !fixed,
  })}
  {...$$restProps}
  onclick={(e: MouseEvent) => {
    handleClick(e);
    $$restProps.onclick?.(e);
  }}
>
  <slot />
</svelte:component>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'div'">
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
    use?: ActionArray;
    class?: string;
    fixed?: boolean;
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fixed = true;

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  export let component: SmuiComponent<SmuiElementMap[TagName]> = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? 'div' : undefined;

  function handleClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDrawerScrimClick', event);
  }

  export function getElement() {
    return element.getElement();
  }
</script>
