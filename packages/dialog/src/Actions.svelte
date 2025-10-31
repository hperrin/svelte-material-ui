<svelte:options runes />

<ClassAdder
  _smuiClass="mdc-dialog__actions"
  _smuiClassMap={{
    'smui-dialog__actions--reversed': 'SMUI:dialog:actions:reversed',
  }}
  _smuiContexts={{
    'SMUI:button:context': 'dialog:action',
  }}
  tag="div"
  bind:this={element as ReturnType<C>}
  {...restProps}>{@render children?.()}</ClassAdder
>

<script
  lang="ts"
  generics="T extends SmuiEveryElement = keyof SmuiElementPropMap, C extends SmuiComponent = SmuiComponent"
>
  import type { ComponentProps, Snippet } from 'svelte';
  import type {
    SmuiComponent,
    SmuiElementPropMap,
    SmuiEveryElement,
  } from '@smui/common';
  import { ClassAdder } from '@smui/common/classadder';

  type OwnProps = {
    children?: Snippet;
  };
  let { children, ...restProps }: OwnProps & ComponentProps<ClassAdder<T, C>> =
    $props();

  let element: ReturnType<C>;

  export function getElement() {
    return element.getElement();
  }
</script>
