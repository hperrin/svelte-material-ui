<Paper
  bind:this={element}
  use={usePass}
  class={classMap({
    [className]: true,
    'smui-accordion__panel': true,
    'smui-accordion__panel--open': open,
    'smui-accordion__panel--opened': opened,
    'smui-accordion__panel--disabled': disabled,
    'smui-accordion__panel--non-interactive': nonInteractive,
    'smui-accordion__panel--raised': variant === 'raised',
    'smui-accordion__panel--extend': extend,
    ['smui-accordion__panel--elevation-z' +
    (extend && open ? extendedElevation : elevation)]:
      (elevation !== 0 && variant === 'raised') ||
      (extendedElevation !== 0 && variant === 'raised' && extend && open),
  })}
  {color}
  variant={variant === 'raised' ? 'unelevated' : variant}
  on:SMUIAccordionHeader:activate={handleHeaderActivate}
  {...$$restProps}><slot /></Paper
>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal';
  import Paper from '@smui/paper';

  import type { SMUIAccordionPanelAccessor } from './Panel.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    variant?: 'raised' | 'unelevated' | 'outlined';
    color?: 'default' | 'primary' | 'secondary' | string;
    elevation?: number;
    open?: boolean;
    disabled?: boolean;
    nonInteractive?: boolean;
    extend?: boolean;
    extendedElevation?: number;
  };
  type $$Props = OwnProps & Omit<ComponentProps<Paper>, keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  $: usePass = [forwardEvents, ...use] as ActionArray;
  let className = '';
  export { className as class };
  export let variant: 'raised' | 'unelevated' | 'outlined' = 'raised';
  export let color: 'default' | 'primary' | 'secondary' | string = 'default';
  export let elevation = 1;
  export let open = false;
  export let disabled = false;
  export let nonInteractive = false;
  export let extend = false;
  export let extendedElevation = 3;

  let element: Paper;
  let accessor: SMUIAccordionPanelAccessor;
  let opened = open;

  const disabledStore = writable(disabled);
  $: $disabledStore = disabled;
  setContext('SMUI:accordion:panel:disabled', disabledStore);
  const nonInteractiveStore = writable(nonInteractive);
  $: $nonInteractiveStore = nonInteractive;
  setContext('SMUI:accordion:panel:nonInteractive', nonInteractiveStore);
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
          content.classList.add('smui-accordion__content--no-transition');
          content.classList.add('smui-accordion__content--force-open');
          // Force a reflow to get the height.
          const { height } = content.getBoundingClientRect();
          content.classList.remove('smui-accordion__content--force-open');
          // Force another reflow to reset the height.
          content.getBoundingClientRect();
          content.classList.remove('smui-accordion__content--no-transition');
          content.style.height = height + 'px';
          content.addEventListener(
            'transitionend',
            () => {
              if (content) {
                content.style.height = '';
              }

              // Assign only when the panel is fully opened.
              opened = open;

              dispatch(getElement(), 'SMUIAccordionPanel:opened', { accessor });
            },
            { once: true }
          );
        } else {
          content.style.height = content.getBoundingClientRect().height + 'px';
          // Force a reflow.
          content.getBoundingClientRect();
          requestAnimationFrame(() => {
            if (content) {
              content.style.height = '';
            }
            dispatch(getElement(), 'SMUIAccordionPanel:closed', { accessor });
          });

          // Assign as soon as the panel is closing.
          opened = false;
        }

        // Set the aria-hidden property.
        content.setAttribute('aria-hidden', open ? 'false' : 'true');
      }
    });

    dispatch(
      getElement(),
      open ? 'SMUIAccordionPanel:opening' : 'SMUIAccordionPanel:closing',
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

    if (disabled || nonInteractive) {
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

  export function getElement() {
    return element.getElement();
  }
</script>
