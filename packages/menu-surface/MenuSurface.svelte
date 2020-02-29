<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-menu-surface
    {className}
    {fixed ? 'mdc-menu-surface--fixed' : ''}
    {isStatic ? 'mdc-menu-surface--open' : ''}
    {isStatic ? 'smui-menu-surface--static' : ''}
  "
  on:MDCMenuSurface:closed={updateOpen} on:MDCMenuSurface:opened={updateOpen}
  {...exclude($$props, ['use', 'class', 'static', 'anchor', 'fixed', 'open', 'quickOpen', 'anchorElement', 'anchorCorner', 'element'])}
><slot></slot></div>

<script context="module">
  import {Corner, CornerBit} from '@material/menu-surface';

  export {Corner, CornerBit};
</script>

<script>
  import {MDCMenuSurface} from '@material/menu-surface';
  import {onMount, onDestroy, getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCMenuSurface:closed', 'MDCMenuSurface:opened']);

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

  export let element = undefined; // This is exported because Menu needs it.
  let menuSurface;
  let instantiate = getContext('SMUI:menu-surface:instantiate');
  let getInstance = getContext('SMUI:menu-surface:getInstance');

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
    if (Corner.hasOwnProperty(anchorCorner)) {
      menuSurface.setAnchorCorner(Corner[anchorCorner]);
    } else if (CornerBit.hasOwnProperty(anchorCorner)) {
      menuSurface.setAnchorCorner(Corner[anchorCorner]);
    } else {
      menuSurface.setAnchorCorner(anchorCorner);
    }
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
      element && element.parentNode.classList.remove('mdc-menu-surface--anchor');
    }
    let isHoisted = false;
    if (menuSurface) {
      isHoisted = menuSurface.foundation_.isHoistedElement_;
      if (instantiate !== false) {
        menuSurface.destroy();
      }
    }
    if (isHoisted) {
      element.parentNode.removeChild(element);
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
