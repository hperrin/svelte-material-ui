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
  on:keydown={(event) =>
    instance &&
    instance.handleKeydown(
      event,
      event.target.classList.contains('mdc-list-item'),
      getListItemIndex(event.target)
    )}
  on:focusin={(event) =>
    instance && instance.handleFocusIn(event, getListItemIndex(event.target))}
  on:focusout={(event) =>
    instance && instance.handleFocusOut(event, getListItemIndex(event.target))}
  on:click={(event) =>
    instance &&
    instance.handleClick(
      getListItemIndex(event.target),
      !matches(event.target, strings.CHECKBOX_RADIO_SELECTOR)
    )}
  on:SMUI:list:item:mount={handleItemMount}
  on:SMUI:list:item:unmount={handleItemUnmount}
  {...props}
>
  <slot />
</svelte:component>

<script>
  import { MDCListFoundation, strings } from '@material/list';
  import { closest, matches } from '@material/dom/ponyfill';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    dispatch,
  } from '@smui/common/internal.js';
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
  export let hasTypeahead = false;

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
  let instance;
  let items = [];
  let role = getContext('SMUI:list:role');
  let nav = getContext('SMUI:list:nav');
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  export let component = nav ? Nav : Ul;

  setContext('SMUI:list:nonInteractive', nonInteractive);
  setContext('SMUI:separator:context', 'list');

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

  $: if (instance) {
    instance.setVerticalOrientation(vertical);
  }

  $: if (instance) {
    instance.setWrapFocus(wrapFocus);
  }

  $: if (instance) {
    instance.setHasTypeahead(hasTypeahead);
  }

  $: if (instance) {
    instance.setSingleSelection(singleSelection);
  }

  $: if (instance && singleSelection && getSelectedIndex() !== selectedIndex) {
    instance.setSelectedIndex(selectedIndex);
  }

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  onMount(async () => {
    instance = new MDCListFoundation({
      addClassForElementIndex,
      focusItemAtIndex,
      getAttributeForElementIndex: (index, attr) =>
        getOrderedList()[index]?.element.getAttribute(attr),
      getFocusedElementIndex: () => {
        const list = getOrderedList();
        for (let i = 0; i < list.length; i++) {
          if (list[i].element === document.activeElement) {
            return i;
          }
        }
        return -1;
      },
      getListItemCount: () => items.length,
      getPrimaryTextAtIndex: (index) =>
        getOrderedList()[index]?.getPrimaryText(),
      hasCheckboxAtIndex: (index) => {
        const listItem = getOrderedList()[index];
        return !!listItem?.element.querySelector(strings.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: (index) => {
        const listItem = getOrderedList()[index];
        return !!listItem?.element.querySelector(strings.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: (index) => {
        const listItem = getOrderedList()[index];
        const toggleEl = listItem?.element.querySelector(
          strings.CHECKBOX_SELECTOR
        );
        return toggleEl?.checked ?? false;
      },
      isFocusInsideList: () =>
        element !== document.activeElement &&
        element.contains(document.activeElement),
      isRootFocused: () => document.activeElement === element,
      listItemAtIndexHasClass: (index, className) =>
        getOrderedList()[index]?.element.classList.contains(className),
      notifyAction: (index) => {
        selectedIndex = index;
        dispatch(element, 'MDCList:action', { index });
      },
      removeClassForElementIndex,
      setAttributeForElementIndex,
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        const listItem = getOrderedList()[index];
        const toggleEl = listItem?.element.querySelector(
          strings.CHECKBOX_RADIO_SELECTOR
        );
        if (toggleEl) {
          toggleEl.checked = isChecked;

          const event = document.createEvent('Event');
          event.initEvent('change', true, true);
          toggleEl.dispatchEvent(event);
        }
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const listItem = this.listElements[listItemIndex];
        const selector = strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
        Array.prototype.forEach.call(
          listItem?.element.querySelectorAll(selector),
          (el) => {
            el.setAttribute('tabindex', tabIndexValue);
          }
        );
      },
    });
    if (singleSelection || radiolist || checklist) {
      selectedIndex = getSelectedIndex();
    }
    dispatch(element, 'SMUI:list:mount', {
      get element() {
        return element;
      },
      get items() {
        return items;
      },
      getOrderedList,
      focusItemAtIndex,
      addClassForElementIndex,
      removeClassForElementIndex,
      setAttributeForElementIndex,
      removeAttributeForElementIndex,
    });
    instance.init();
  });

  onDestroy(() => {
    instance.destroy();

    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function handleItemMount(event) {
    items.push(event.detail);
    event.stopPropagation();
  }

  function handleItemUnmount(event) {
    const idx = items.indexOf(event.detail);
    if (idx !== -1) {
      items.splice(idx, 1);
    }
    event.stopPropagation();
  }

  function getOrderedList() {
    return [...element.children]
      .map((element) => items.find((accessor) => element === accessor.element))
      .filter((element) => element && element._smui_accessor);
  }

  function focusItemAtIndex(index) {
    getOrderedList()[index]?.element.focus();
  }

  function addClassForElementIndex(index, className) {
    getOrderedList()[index]?.addClass(className);
  }

  function removeClassForElementIndex(index, className) {
    getOrderedList()[index]?.removeClass(className);
  }

  function setAttributeForElementIndex(index, attr, value) {
    getOrderedList()[index]?.addAttr(attr, value);
  }

  function removeAttributeForElementIndex(index, attr) {
    getOrderedList()[index]?.removeAttr(attr);
  }

  function getListItemIndex(element) {
    const nearestParent = closest(el, '.mdc-list-item, .mdc-list');

    // Get the index of the element if it is a list item.
    if (nearestParent && matches(nearestParent, '.mdc-list-item')) {
      return getOrderedList()
        .map((item) => item.element)
        .indexOf(nearestParent);
    }
    return -1;
  }

  export function layout(...args) {
    return instance.layout(...args);
  }

  export function setEnabled(...args) {
    return instance.setEnabled(...args);
  }

  export function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }

  export function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
</script>
