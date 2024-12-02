<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'smui-accordion': true,
    'smui-accordion--multiple': multiple,
    'smui-accordion--with-open-dialog': withOpenDialog,
  })}
  {...restProps}
  onSMUIAccordionPanelActivate={(e) => {
    handlePanelActivate(e);
    restProps.onSMUIAccordionPanelActivate?.(e);
  }}
  onSMUIAccordionPanelOpening={(e) => {
    handlePanelOpening(e);
    restProps.onSMUIAccordionPanelOpening?.(e);
  }}
  onSMUIDialogOpeningcapture={(e) => {
    withOpenDialog = true;
    restProps.onSMUIDialogOpeningcapture?.(e);
  }}
  onSMUIDialogClosedcapture={(e) => {
    withOpenDialog = false;
    restProps.onSMUIDialogClosedcapture?.(e);
  }}
>
  {@render children?.()}
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  import type { SMUIAccordionPanelAccessor } from './Panel.types.js';

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
     * Whether multiple panels can be open at once.
     */
    multiple?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    multiple = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let panelAccessorSet = new Set<SMUIAccordionPanelAccessor>();
  let withOpenDialog = $state(false);

  setContext(
    'SMUI:accordion:panel:mount',
    (accessor: SMUIAccordionPanelAccessor) => {
      if (!multiple && accessor.open) {
        const currentOpen = Array.from(panelAccessorSet).find(
          (accessor) => accessor.open,
        );

        if (currentOpen) {
          currentOpen.setOpen(false);
        }
      }

      panelAccessorSet.add(accessor);
    },
  );

  setContext(
    'SMUI:accordion:panel:unmount',
    (accessor: SMUIAccordionPanelAccessor) => {
      // Nested check.
      if (!panelAccessorSet.has(accessor)) {
        return;
      }

      panelAccessorSet.delete(accessor);
    },
  );

  function handlePanelActivate(
    event: CustomEvent<{ accessor: SMUIAccordionPanelAccessor }>,
  ) {
    const { accessor } = event.detail;

    // Nested check.
    if (!panelAccessorSet.has(accessor)) {
      return;
    }

    if (!multiple && !accessor.open) {
      const currentOpen = Array.from(panelAccessorSet).find(
        (accessor) => accessor.open,
      );

      if (currentOpen) {
        currentOpen.setOpen(false);
      }
    }

    accessor.setOpen(!accessor.open);
  }

  function handlePanelOpening(
    event: CustomEvent<{ accessor: SMUIAccordionPanelAccessor }>,
  ) {
    const { accessor } = event.detail;

    // Nested check.
    if (!panelAccessorSet.has(accessor)) {
      return;
    }

    if (!multiple) {
      const otherOpen = Array.from(panelAccessorSet).filter(
        (checkAccessor) => checkAccessor !== accessor && checkAccessor.open,
      );

      otherOpen.forEach((accessor) => accessor.setOpen(false));
    }
  }

  export function getElement() {
    return element;
  }
</script>
