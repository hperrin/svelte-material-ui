<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-menu-surface {className}"
  class:mdc-menu-surface--fixed={fixed}
  class:mdc-menu-surface--open={isStatic}
  class:smui-menu-surface--static={isStatic}
  on:MDCMenuSurface:closed={updateOpen} on:MDCMenuSurface:opened={updateOpen}
  {...exclude($$props, ['use', 'class', 'static', 'anchor', 'fixed', 'open', 'quickOpen', 'anchorElement'])}
><slot></slot></div>

<script context="module">
  import Anchor from './Anchor';

  export {Anchor};
</script>

<script>
  import {MDCMenuSurface} from '@material/menu-surface';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCMenuSurface:closed', 'MDCMenuSurface:opened']);

  export let use = [];
  let className = '';
  export {className as class};
  let isStatic = false;
  export {isStatic as static};
  export let anchor = false;
  export let fixed = false;
  export let open = isStatic;
  export let quickOpen = false;
  export let anchorElement = null;

  let element;
  let menuSurface;

  $: if (element && anchor && !element.parentNode.classList.contains('mdc-menu-surface--anchor')) {
    element.parentNode.classList.add('mdc-menu-surface--anchor');
    anchorElement = element.parentNode;
  }

  $: if (menuSurface && menuSurface.isOpen() !== open) {
    if (open) {
      menuSurface.open();
    } else {
      menuSurface.close();
    }
  }

  $: if (menuSurface && menuSurface.quickOpen !== quickOpen) {
    menuSurface.quickOpen = quickOpen;
  }

  $: if (menuSurface && menuSurface.anchorElement !== anchorElement) {
    menuSurface.anchorElement = anchorElement;
  }

  let oldFixed = null;
  $: if (menuSurface && oldFixed !== fixed) {
    menuSurface.setFixedPosition(fixed);
    oldFixed = fixed;
  }

  onMount(() => {
    menuSurface = new MDCMenuSurface(element);
  });

  onDestroy(() => {
    if (anchor) {
      element.parentNode.classList.remove('mdc-menu-surface--anchor');
    }
    menuSurface.destroy();
  });

  function updateOpen() {
    open = menuSurface.isOpen();
  }

  export function setOpen(value) {
    open = value;
  }

  export function setAnchorCorner(...args) {
    return menuSurface.setAnchorCorner(...args);
  }

  export function setAnchorMargin(...args) {
    return menuSurface.setAnchorMargin(...args);
  }

  export function setFixedPosition(isFixed, ...args) {
    fixed = isFixed;
    return menuSurface.setFixedPosition(isFixed, ...args);
  }

  export function setAbsolutePosition(...args) {
    return menuSurface.setAbsolutePosition(...args);
  }

  export function setMenuSurfaceAnchorElement(...args) {
    return menuSurface.setMenuSurfaceAnchorElement(...args);
  }

  export function hoistMenuToBody(...args) {
    return menuSurface.hoistMenuToBody(...args);
  }

  export function setIsHoisted(...args) {
    return menuSurface.setIsHoisted(...args);
  }

  export function getDefaultFoundation(...args) {
    return menuSurface.getDefaultFoundation(...args);
  }
</script>

<style lang="scss" global>
  @import "@material/menu-surface/mdc-menu-surface";

  .smui-menu-surface--static {
    position: static;
    z-index: 0;
  }
</style>