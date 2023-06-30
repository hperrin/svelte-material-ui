<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
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
  {...$$restProps}
/>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'li'">
  import type { SvelteComponent } from 'svelte';
  import { getContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import type {
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    padded?: boolean;
    inset?: boolean;
    insetLeading?: boolean;
    insetTrailing?: boolean;
    insetPadding?: boolean;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let padded = false;
  export let inset = false;
  export let insetLeading = false;
  export let insetTrailing = false;
  export let insetPadding = false;

  let element: SvelteComponent;
  let nav = getContext<boolean | undefined>('SMUI:list:item:nav');
  let context = getContext<string | undefined>('SMUI:separator:context');

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement
      ? nav || context !== 'list'
        ? 'hr'
        : 'li'
      : undefined;

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>
