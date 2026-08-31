<svelte:options runes />

<Paper
  bind:this={element}
  {use}
  class={classMap({
    'smui-flyout-panel': true,
    ['smui-flyout-panel--position-' + position]: true,
    ['smui-flyout-panel--align-' + align]: true,
    'smui-flyout-panel--open': open,
    'smui-flyout-panel--sticky': sticky,
    'smui-flyout-panel--fixed': fixed,
    [className]: true,
  })}
  style={`${size == null ? '' : `--smui-flyout-panel--size: ${size}; `}${style}`}
  role="status"
  aria-hidden={open ? 'false' : 'true'}
  {...restProps}>{@render children?.()}</Paper
>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
  import Paper from '@smui/paper';

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
     * A list of CSS styles.
     */
    style?: string;
    /**
     * A CSS value to use as the width for left/right panels and height for top/bottom panels. Injected directly into the CSS, so SANITIZE IT!
     */
    size?: string;
    /**
     * The position of the panel relative to the container.
     */
    position?: 'left' | 'top' | 'right' | 'bottom';
    /**
     * The alignment of the panel.
     */
    align?: 'start' | 'middle' | 'end';
    /**
     * Whether the panel is open.
     */
    open?: boolean;
    /**
     * Whether the panel is sticky (position: sticky).
     */
    sticky?: boolean;
    /**
     * Whether the panel is fixed to the viewport (position: fixed).
     */
    fixed?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    size,
    position = 'bottom',
    align = 'middle',
    open = $bindable(false),
    sticky = false,
    fixed = false,
    children,
    ...restProps
  }: OwnProps & Omit<ComponentProps<typeof Paper>, keyof OwnProps> = $props();

  let element: Paper;

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
