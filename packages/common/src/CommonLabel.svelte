<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
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
  {...restProps}>{@render children?.()}</MyComponent
>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'span'">
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
  import { SmuiElement } from './index.js';

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
    component: MyComponent = SmuiElement,
    tag = 'span' as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  const context = getContext<string | undefined>('SMUI:label:context');
  const tabindex = getContext<number | undefined>('SMUI:label:tabindex');

  export function getElement() {
    return element.getElement();
  }
</script>
