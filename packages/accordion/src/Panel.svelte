<Paper
  bind:this={element}
  use={usePass}
  class={classMap({
    [className]: true,
    'smui-accordion__panel': true,
    'smui-accordion__panel--open': open,
    'smui-accordion__panel--disabled': disabled,
    'smui-accordion__panel--raised': variant === 'raised',
    ['smui-accordion__panel--elevation-z' + elevation]:
      elevation !== 0 && variant === 'raised',
  })}
  {color}
  variant={variant === 'raised' ? 'unelevated' : variant}
  on:SMUIAccordionHeader:activate={handleHeaderActivate}
  {...$$restProps}><slot /></Paper
>

<script lang="ts">
  import type { PaperComponentDev } from '@smui/paper';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
    ActionArray,
  } from '@smui/common/internal';
  import Paper from '@smui/paper';

  import type { SMUIAccordionPanelAccessor } from './Panel.types.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  $: usePass = [forwardEvents, ...use] as ActionArray;
  let className = '';
  export { className as class };
  export let variant: 'raised' | 'unelevated' | 'outlined' = 'raised';
  export let color: 'default' | 'primary' | 'secondary' | string = 'default';
  export let elevation = 1;
  export let open = false;
  export let disabled = false;

  let element: PaperComponentDev;
  let accessor: SMUIAccordionPanelAccessor;

  const disabledStore = writable(disabled);
  $: $disabledStore = disabled;
  setContext('SMUI:accordion:panel:disabled', disabledStore);
  const openStore = writable(open);
  $: $openStore = open;
  setContext('SMUI:accordion:panel:open', openStore);

  let previousOpen = open;
  $: if (previousOpen !== open) {
    previousOpen = open;

    Array.from(getElement().children).forEach((child) => {
      if (child.classList.contains('smui-paper__content')) {
        const content = child as HTMLDivElement;

        // Calculate the height of the content and apply it. This lets the CSS
        // animation run properly.
        if (open) {
          content.style.height = 'auto';
          // Force a reflow to get the height.
          const { height } = content.getBoundingClientRect();
          content.style.height = '';
          // Force another reflow to reset the height.
          content.getBoundingClientRect();
          content.style.height = height + 'px';
          content.addEventListener(
            'transitionend',
            () => {
              if (content) {
                content.style.height = '';
              }
            },
            { once: true }
          );
        } else {
          content.style.height = content.clientHeight + 'px';
          requestAnimationFrame(() => {
            if (content) {
              content.style.height = '';
            }
          });
        }

        // Set the aria-hidden property.
        content.setAttribute('aria-hidden', open ? 'false' : 'true');
      }
    });

    dispatch(
      getElement(),
      open ? 'SMUIAccordionPanel:opened' : 'SMUIAccordionPanel:closed',
      { accessor }
    );
  }

  onMount(() => {
    accessor = {
      get open() {
        return open;
      },
      setOpen,
    };

    // Set the ari-hidden property on content children.
    Array.from(getElement().children).forEach((child) => {
      if (child.classList.contains('smui-paper__content')) {
        const content = child as HTMLDivElement;
        content.setAttribute('aria-hidden', open ? 'false' : 'true');
      }
    });

    dispatch(getElement(), 'SMUIAccordionPanel:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUIAccordionPanel:unmount', accessor);
    };
  });

  function handleHeaderActivate(event: CustomEvent) {
    event.stopPropagation();

    if (disabled) {
      return;
    }

    dispatch(getElement(), 'SMUIAccordionPanel:activate', {
      accessor,
      event,
    });
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function getElement(): Element {
    return element.getElement();
  }
</script>
