<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-button__label': context === 'button',
    'mdc-fab__label': context === 'fab',
    'mdc-tab__text-label': context === 'tab',
    'mdc-image-list__label': context === 'image-list',
    'mdc-snackbar__label': context === 'snackbar',
    'mdc-banner__text': context === 'banner',
    'mdc-segmented-button__label': context === 'segmented-button',
    'mdc-data-table__pagination-rows-per-page-label':
      context === 'data-table:pagination',
    'mdc-data-table__header-cell-label':
      context === 'data-table:sortable-header-cell',
  })}
  {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}
  {tabindex}
  {...$$restProps}><slot /></svelte:component
>

<script lang="ts">
  import type { ComponentType, SvelteComponent } from 'svelte';
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, classMap } from './internal/index.js';
  import type {
    SmuiElementMap,
    SmuiAttrs,
    SmuiSvgAttrs,
  } from './smui.types.js';
  import { SmuiElement } from './index.js';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<ComponentType<SvelteComponent>>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    component?: Component;
    tag?: TagName;
  };
  type $$Props = OwnProps &
    (SmuiAttrs<keyof SmuiElementMap, OwnProps> | SmuiSvgAttrs<OwnProps>);

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SvelteComponent;

  export let component: Component = SmuiElement as unknown as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component) ? 'span' : undefined
  ) as TagName | undefined;

  const context = getContext<string | undefined>('SMUI:label:context');
  const tabindex = getContext<number | undefined>('SMUI:label:tabindex');

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
