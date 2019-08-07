<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-menu-surface {className}"
  class:mdc-menu-surface--fixed={fixed}
  class:mdc-menu-surface--open={isStatic}
  class:smui-menu-surface--static={isStatic}
  on:MDCMenuSurface:closed={updateOpen} on:MDCMenuSurface:opened={updateOpen}
  {...exclude($$props, ['use', 'class', 'static', 'anchor', 'fixed', 'open', 'quickOpen', 'anchorElement', 'element'])}
><slot></slot></div>

<script context="module">
  import Anchor from './Anchor';

  export {Anchor};
</script>

<script>
  import {MDCMenuSurface} from '@material/menu-surface';
  import {onMount, onDestroy, getContext, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';
  import {CornerMap} from './CornerMap';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCMenuSurface:closed', 'MDCMenuSurface:opened']);

  export let use = [];
  let className = '';
  export {className as class};
  let isStatic = false;
  export {isStatic as static};
  export let anchor = true;
  export let fixed = false;
  export let open = isStatic;
  export let quickOpen = false;
  export let anchorElement = null;
  export let anchorCorner = null;

  export let element; // This is exported because Menu needs it.
  let menuSurface;
  let instantiate = getContext('SMUI:menuSurface:instantiate');
  let getInstance = getContext('SMUI:menuSurface:getInstance');

  setContext('SMUI:list:role', 'menu');
  setContext('SMUI:list:item:role', 'menuitem');

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

  $: if (menuSurface && anchorCorner != null) {
    menuSurface.setAnchorCorner(CornerMap[anchorCorner]);
  }

  onMount(async () => {
    if (instantiate !== false) {
      menuSurface = new MDCMenuSurface(element);
    } else {
      menuSurface = await getInstance();
    }
  });

  onDestroy(() => {
    if (anchor) {
      element.parentNode.classList.remove('mdc-menu-surface--anchor');
    }
    if (instantiate !== false) {
      menuSurface.destroy();
    }
  });

  function updateOpen() {
    if (menuSurface) {
      if (isStatic) {
        open = true;
      } else {
        open = menuSurface.isOpen();
      }
    }
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

    display: inline-block;
    transform: scale(1);
    opacity: 1;
  }
</style>