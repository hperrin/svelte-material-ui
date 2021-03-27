<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class="
      mdc-list
      {className}
      {nonInteractive
    ? 'mdc-list--non-interactive'
    : ''}
      {dense ? 'mdc-list--dense' : ''}
      {textualList
    ? 'mdc-list--textual-list'
    : ''}
      {avatarList ? 'mdc-list--avatar-list' : ''}
      {iconList
    ? 'mdc-list--icon-list'
    : ''}
      {imageList ? 'mdc-list--image-list' : ''}
      {thumbnailList
    ? 'mdc-list--thumbnail-list'
    : ''}
      {videoList ? 'mdc-list--video-list' : ''}
      {twoLine
    ? 'mdc-list--two-line'
    : ''}
      {threeLine && !twoLine ? 'smui-list--three-line' : ''}
    "
  {role}
  on:MDCList:action={handleAction}
  {...props}
>
  <slot />
</svelte:component>

<script>
  import { MDCList } from '@material/list';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import { forwardEventsBuilder } from '@smui/common/forwardEvents.js';
  import { exclude } from '@smui/common/exclude.js';
  import { useActions } from '@smui/common/useActions.js';
  import Ul from '@smui/common/Ul.svelte';
  import Nav from '@smui/common/Nav.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCList:action',
  ]);

  export let use = [];
  let className = '';
  export { className as class };
  export let nonInteractive = false;
  export let dense = false;
  export let textualList = false;
  export let avatarList = false;
  export let iconList = false;
  export let imageList = false;
  export let thumbnailList = false;
  export let videoList = false;
  export let twoLine = false;
  export let threeLine = false;
  export let vertical = true;
  export let wrapFocus = false;
  export let singleSelection = false;
  export let selectedIndex = null;
  export let radiolist = false;
  export let checklist = false;

  $: props = exclude($$props, [
    'use',
    'class',
    'nonInteractive',
    'dense',
    'avatarList',
    'twoLine',
    'threeLine',
    'vertical',
    'wrapFocus',
    'singleSelection',
    'selectedIndex',
    'radiolist',
    'checklist',
  ]);

  let element;
  let list;
  let role = getContext('SMUI:list:role');
  let nav = getContext('SMUI:list:nav');
  let instantiate = getContext('SMUI:list:instantiate');
  let getInstance = getContext('SMUI:list:getInstance');
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  export let component = nav ? Nav : Ul;

  setContext('SMUI:list:nonInteractive', nonInteractive);
  setContext('SMUI:list:divider', true);

  if (!role) {
    if (singleSelection) {
      role = 'listbox';
      setContext('SMUI:list:item:role', 'option');
    } else if (radiolist) {
      role = 'radiogroup';
      setContext('SMUI:list:item:role', 'radio');
    } else if (checklist) {
      role = 'group';
      setContext('SMUI:list:item:role', 'checkbox');
    } else {
      role = 'list';
      setContext('SMUI:list:item:role', undefined);
    }
  }

  $: if (list && list.vertical !== vertical) {
    list.vertical = vertical;
  }

  $: if (list && list.wrapFocus !== wrapFocus) {
    list.wrapFocus = wrapFocus;
  }

  $: if (list && list.singleSelection !== singleSelection) {
    list.singleSelection = singleSelection;
  }

  $: if (list && singleSelection && list.selectedIndex !== selectedIndex) {
    list.selectedIndex = selectedIndex;
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(async () => {
    if (instantiate !== false) {
      list = new MDCList(element);
    } else {
      list = await getInstance();
    }
    if (singleSelection) {
      list.initializeListType();
      selectedIndex = list.selectedIndex;
    }
  });

  onDestroy(() => {
    if (instantiate !== false) {
      list && list.destroy();
    }

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function handleAction(e) {
    if (
      list &&
      list.listElements[e.detail.index].classList.contains(
        'mdc-list-item--disabled'
      )
    ) {
      e.preventDefault();
      list.selectedIndex = selectedIndex;
    } else if (list && list.selectedIndex === e.detail.index) {
      selectedIndex = e.detail.index;
    }
  }

  export function layout(...args) {
    return list.layout(...args);
  }

  export function setEnabled(...args) {
    return list.setEnabled(...args);
  }

  export function getDefaultFoundation(...args) {
    return list.getDefaultFoundation(...args);
  }
</script>
