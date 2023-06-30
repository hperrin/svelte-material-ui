<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-accordion': true,
    'smui-accordion--multiple': multiple,
    'smui-accordion--with-open-dialog': withOpenDialog,
  })}
  on:SMUIAccordionPanel:mount={handlePanelMount}
  on:SMUIAccordionPanel:unmount={handlePanelUnmount}
  on:SMUIAccordionPanel:activate={handlePanelActivate}
  on:SMUIAccordionPanel:opening={handlePanelOpening}
  on:SMUIDialog:opening|capture={() => (withOpenDialog = true)}
  on:SMUIDialog:closed|capture={() => (withOpenDialog = false)}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    multiple?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  import type { SMUIAccordionPanelAccessor } from './Panel.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

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
        (accessor) => accessor.open
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
    event: CustomEvent<{ accessor: SMUIAccordionPanelAccessor }>
  ) {
    const { accessor } = event.detail;

    // Nested check.
    if (!panelAccessorSet.has(accessor)) {
      return;
    }

    if (!multiple && !accessor.open) {
      const currentOpen = Array.from(panelAccessorSet).find(
        (accessor) => accessor.open
      );

      if (currentOpen) {
        currentOpen.setOpen(false);
      }
    }

    accessor.setOpen(!accessor.open);
  }

  function handlePanelOpening(
    event: CustomEvent<{ accessor: SMUIAccordionPanelAccessor }>
  ) {
    const { accessor } = event.detail;

    // Nested check.
    if (!panelAccessorSet.has(accessor)) {
      return;
    }

    if (!multiple) {
      const otherOpen = Array.from(panelAccessorSet).filter(
        (checkAccessor) => checkAccessor !== accessor && checkAccessor.open
      );

      otherOpen.forEach((accessor) => accessor.setOpen(false));
    }
  }

  export function getElement() {
    return element;
  }
</script>
