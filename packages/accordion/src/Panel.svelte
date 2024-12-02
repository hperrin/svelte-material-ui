<svelte:options runes />

<Paper
  bind:this={element}
  {use}
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
  {...restProps}
  onSMUIAccordionHeaderActivate={(e) => {
    handleHeaderActivate(e);
    restProps.onSMUIAccordionHeaderActivate?.(e);
  }}>{@render children?.()}</Paper
>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, setContext, getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
  import Paper from '@smui/paper';

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
     * The styling variant of the panel.
     */
    variant?: 'raised' | 'unelevated' | 'outlined';
    /**
     * The color of the panel.
     */
    color?: 'default' | 'primary' | 'secondary' | string;
    /**
     * The elevation of the panel.
     */
    elevation?: number;
    /**
     * Whether the panel is open.
     */
    open?: boolean;
    /**
     * Whether the panel is disabled.
     */
    disabled?: boolean;
    /**
     * Whether the panel is non-interactive.
     *
     * This is distinct from disabled, because it doesn't add any visual
     * styling.
     */
    nonInteractive?: boolean;
    /**
     * Whether the panel should slightly extend horizontally when it is opened.
     */
    extend?: boolean;
    /**
     * The elevation the panel should transition to when it is extended.
     */
    extendedElevation?: number;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    variant = 'raised',
    color = 'default',
    elevation = 1,
    open = $bindable(false),
    disabled = false,
    nonInteractive = false,
    extend = false,
    extendedElevation = 3,
    children,
    ...restProps
  }: OwnProps & Omit<ComponentProps<typeof Paper>, keyof OwnProps> = $props();

  let element: Paper;
  let accessor: SMUIAccordionPanelAccessor;
  let opened = $state(open);

  const disabledStore = writable(disabled);
  $effect(() => {
    $disabledStore = disabled;
  });
  setContext('SMUI:accordion:panel:disabled', disabledStore);
  const nonInteractiveStore = writable(nonInteractive);
  $effect(() => {
    $nonInteractiveStore = nonInteractive;
  });
  setContext('SMUI:accordion:panel:nonInteractive', nonInteractiveStore);
  const openStore = writable(open);
  $effect(() => {
    $openStore = open;
  });
  setContext('SMUI:accordion:panel:open', openStore);

  let previousOpen = open;
  $effect.pre(() => {
    if (previousOpen !== open) {
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

                dispatch(getElement(), 'SMUIAccordionPanelOpened', {
                  accessor,
                });
              },
              { once: true },
            );
          } else {
            content.style.height =
              content.getBoundingClientRect().height + 'px';
            // Force a reflow.
            content.getBoundingClientRect();
            requestAnimationFrame(() => {
              if (content) {
                content.style.height = '';
              }
              dispatch(getElement(), 'SMUIAccordionPanelClosed', { accessor });
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
        open ? 'SMUIAccordionPanelOpening' : 'SMUIAccordionPanelClosing',
        { accessor },
      );
    }
  });

  const SMUIAccordionPanelMount = getContext<
    ((accessor: SMUIAccordionPanelAccessor) => void) | undefined
  >('SMUI:accordion:panel:mount');
  const SMUIAccordionPanelUnmount = getContext<
    ((accessor: SMUIAccordionPanelAccessor) => void) | undefined
  >('SMUI:accordion:panel:unmount');

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

    SMUIAccordionPanelMount && SMUIAccordionPanelMount(accessor);

    return () => {
      SMUIAccordionPanelUnmount && SMUIAccordionPanelUnmount(accessor);
    };
  });

  function handleHeaderActivate(event: CustomEvent) {
    event.stopPropagation();

    if (disabled || nonInteractive) {
      return;
    }

    dispatch(getElement(), 'SMUIAccordionPanelActivate', {
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
