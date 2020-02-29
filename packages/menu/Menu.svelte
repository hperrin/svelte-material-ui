<MenuSurface
  bind:element
  use={[forwardEvents, ...use]}
  class="mdc-menu {className}"
  on:MDCMenu:selected={updateOpen}
  on:MDCMenuSurface:closed={updateOpen} on:MDCMenuSurface:opened={updateOpen}
  {...exclude($$props, ['use', 'class', 'wrapFocus'])}
><slot></slot></MenuSurface>

<script>
  import {MDCMenu} from '@material/menu';
  import {onMount, onDestroy, getContext, setContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import MenuSurface, {Corner, CornerBit} from '@smui/menu-surface/MenuSurface.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['MDCMenu:selected', 'MDCMenuSurface:closed', 'MDCMenuSurface:opened']);

  export let use = [];
  let className = '';
  export {className as class};
  let isStatic = false;
  export {isStatic as static}; // Purposely omitted from the exclude call above.
  export let open = isStatic; // Purposely omitted from the exclude call above.
  export let quickOpen = false; // Purposely omitted from the exclude call above.
  export let anchorCorner = null; // Purposely omitted from the exclude call above.
  export let wrapFocus = false;

  let element;
  let menu;
  let instantiate = getContext('SMUI:menu:instantiate');
  let getInstance = getContext('SMUI:menu:getInstance');
  let menuSurfacePromiseResolve;
  let menuSurfacePromise = new Promise(resolve => menuSurfacePromiseResolve = resolve);
  let listPromiseResolve;
  let listPromise = new Promise(resolve => listPromiseResolve = resolve);

  setContext('SMUI:menu-surface:instantiate', false);
  setContext('SMUI:menu-surface:getInstance', getMenuSurfaceInstancePromise);
  setContext('SMUI:list:instantiate', false);
  setContext('SMUI:list:getInstance', getListInstancePromise);

  $: if (menu && menu.open !== open) {
    if (isStatic) {
      open = true;
    }
    menu.open = open;
  }

  $: if (menu && menu.wrapFocus !== wrapFocus) {
    menu.wrapFocus = wrapFocus;
  }

  $: if (menu) {
    menu.quickOpen = quickOpen;
  }

  $: if (menu && anchorCorner != null) {
    if (Corner.hasOwnProperty(anchorCorner)) {
      menu.setAnchorCorner(Corner[anchorCorner]);
    } else if (CornerBit.hasOwnProperty(anchorCorner)) {
      menu.setAnchorCorner(Corner[anchorCorner]);
    } else {
      menu.setAnchorCorner(anchorCorner);
    }
  }

  onMount(async () => {
    if (instantiate !== false) {
      menu = new MDCMenu(element);
    } else {
      menu = await getInstance();
    }
    menuSurfacePromiseResolve(menu.menuSurface_);
    listPromiseResolve(menu.list_);
  });

  onDestroy(() => {
    if (instantiate !== false) {
      menu && menu.destroy();
    }
  });

  function getMenuSurfaceInstancePromise() {
    return menuSurfacePromise;
  }

  function getListInstancePromise() {
    return listPromise;
  }

  function updateOpen() {
    open = menu.open;
  }

  export function setOpen(value) {
    open = value;
  }

  export function getItems() {
    return menu.items;
  }

  export function setDefaultFocusState(...args) {
    return menu.setDefaultFocusState(...args);
  }

  export function setAnchorCorner(...args) {
    return menu.setAnchorCorner(...args);
  }

  export function setAnchorMargin(...args) {
    return menu.setAnchorMargin(...args);
  }

  export function setSelectedIndex(...args) {
    return menu.setSelectedIndex(...args);
  }

  export function setEnabled(...args) {
    return menu.setEnabled(...args);
  }

  export function getOptionByIndex(...args) {
    return menu.getOptionByIndex(...args);
  }

  export function setFixedPosition(...args) {
    return menu.setFixedPosition(...args);
  }

  export function hoistMenuToBody(...args) {
    return menu.hoistMenuToBody(...args);
  }

  export function setIsHoisted(...args) {
    return menu.setIsHoisted(...args);
  }

  export function setAbsolutePosition(...args) {
    return menu.setAbsolutePosition(...args);
  }

  export function setAnchorElement(...args) {
    return menu.setAnchorElement(...args);
  }

  export function getDefaultFoundation(...args) {
    return menu.getDefaultFoundation(...args);
  }
</script>
