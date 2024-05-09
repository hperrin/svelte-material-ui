<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'smui-accordion': true,
    'smui-accordion--multiple': multiple,
    'smui-accordion--with-open-dialog': withOpenDialog,
  })}
  {...$$restProps}
  onSMUIAccordionPanelMount={(e) => {
    handlePanelMount(e);
    $$restProps.onSMUIAccordionPanelMount?.(e);
  }}
  onSMUIAccordionPanelUnmount={(e) => {
    handlePanelUnmount(e);
    $$restProps.onSMUIAccordionPanelUnmount?.(e);
  }}
  onSMUIAccordionPanelActivate={(e) => {
    handlePanelActivate(e);
    $$restProps.onSMUIAccordionPanelActivate?.(e);
  }}
  onSMUIAccordionPanelOpening={(e) => {
    handlePanelOpening(e);
    $$restProps.onSMUIAccordionPanelOpening?.(e);
  }}
  onSMUIDialogOpeningcapture={(e) => {
    withOpenDialog = true;
    $$restProps.onSMUIDialogOpeningcapture?.(e);
  }}
  onSMUIDialogClosedcapture={(e) => {
    withOpenDialog = false;
    $$restProps.onSMUIDialogClosedcapture?.(e);
  }}
>
  <slot />
</div>

<script lang="ts">
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    multiple?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  import type { SMUIAccordionPanelAccessor } from './Panel.types.js';

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let multiple = false;

  let element: HTMLDivElement;
  let panelAccessorSet = new Set<SMUIAccordionPanelAccessor>();
  let withOpenDialog = false;

  function handlePanelMount(event: CustomEvent<SMUIAccordionPanelAccessor>) {
    const accessor = event.detail;

    // Stop propagation so accordion's above this one don't receive the event.
    event.stopPropagation();

    if (!multiple && accessor.open) {
      const currentOpen = Array.from(panelAccessorSet).find(
        (accessor) => accessor.open,
      );

      if (currentOpen) {
        currentOpen.setOpen(false);
      }
    }

    panelAccessorSet.add(accessor);
  }

  function handlePanelUnmount(event: CustomEvent<SMUIAccordionPanelAccessor>) {
    const accessor = event.detail;

    // Nested check.
    if (!panelAccessorSet.has(accessor)) {
      return;
    }

    // Stop propagation so accordion's above this one don't receive the event.
    event.stopPropagation();

    panelAccessorSet.delete(accessor);
  }

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
