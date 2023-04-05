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

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import type { SmuiElementMap, SmuiAttrs, SmuiSvgAttrs } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<typeof SvelteComponent>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    padded?: boolean;
    inset?: boolean;
    insetLeading?: boolean;
    insetTrailing?: boolean;
    insetPadding?: boolean;
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
  export let padded = false;
  export let inset = false;
  export let insetLeading = false;
  export let insetTrailing = false;
  export let insetPadding = false;

  let element: SvelteComponent;
  let nav = getContext<boolean | undefined>('SMUI:list:item:nav');
  let context = getContext<string | undefined>('SMUI:separator:context');

  export let component: Component = SmuiElement as unknown as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component)
      ? nav || context !== 'list'
        ? 'hr'
        : 'li'
      : undefined
  ) as TagName | undefined;

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
