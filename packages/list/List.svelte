<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  forwardEvents={[
    'SMUI:list:item:mount',
    'SMUI:list:item:unmount',
    ...forwardedEvents,
  ]}
  class={classMap({
    [className]: true,
    'mdc-list': true,
    'mdc-list--non-interactive': nonInteractive,
    'mdc-list--dense': dense,
    'mdc-list--textual-list': textualList,
    'mdc-list--avatar-list': avatarList || selectionDialog,
    'mdc-list--icon-list': iconList,
    'mdc-list--image-list': imageList,
    'mdc-list--thumbnail-list': thumbnailList,
    'mdc-list--video-list': videoList,
    'mdc-list--two-line': twoLine,
    'smui-list--three-line': threeLine && !twoLine,
  })}
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
      !matches(event.target, 'input[type="checkbox"], input[type="radio"]')
    )}
  on:SMUI:list:item:mount={handleItemMount}
  on:SMUI:list:item:unmount={handleItemUnmount}
  on:SMUI:action={handleAction}
  {...props}
>
  <slot />
</svelte:component>

<script>
  import { MDCListFoundation } from '@material/list';
  import { closest, matches } from '@material/dom/ponyfill';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    dispatch,
  } from '@smui/common/internal.js';
  import Ul from '@smui/common/Ul.svelte';
  import Nav from '@smui/common/Nav.svelte';

  const forwardedEvents = ['MDCList:action', 'SMUI:action', 'SMUI:list:mount'];
  const forwardEvents = forwardEventsBuilder(
    get_current_component(),
    forwardedEvents
  );

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
  export let wrapFocus = getContext('SMUI:list:wrapFocus') || false;
  export let singleSelection = false;
  export let selectedIndex = null;
  export let radioList = false;
  export let checkList = false;
  export let hasTypeahead = false;

  /**
   * @deprecated
   */
  export let radiolist = false;
  if (radiolist) {
    radioList = true;
  }

  /**
   * @deprecated
   */
  export let checklist = false;
  if (checklist) {
    checkList = true;
  }

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
    'radioList',
    'radiolist',
    'checkList',
    'checklist',
  ]);

  let element;
  let instance;
  let items = [];
  let role = getContext('SMUI:list:role');
  let nav = getContext('SMUI:list:nav');
  const itemAccessorMap = new WeakMap();
  let selectionDialog = getContext('SMUI:dialog:selection');
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;

  export let component = nav ? Nav : Ul;

  setContext('SMUI:list:nonInteractive', nonInteractive);
  setContext('SMUI:separator:context', 'list');

  if (!role) {
    if (singleSelection) {
      role = 'listbox';
      setContext('SMUI:list:item:role', 'option');
    } else if (radioList) {
      role = 'radiogroup';
      setContext('SMUI:list:item:role', 'radio');
    } else if (checkList) {
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

  onMount(() => {
    instance = new MDCListFoundation({
      addClassForElementIndex,
      focusItemAtIndex,
      getAttributeForElementIndex: (index, name) =>
        getOrderedList()[index].getAttr(name),
      getFocusedElementIndex: () =>
        getOrderedList()
          .map((accessor) => accessor.element)
          .indexOf(document.activeElement),
      getListItemCount: () => items.length,
      getPrimaryTextAtIndex: (index) =>
        getOrderedList()[index].getPrimaryText(),
      hasCheckboxAtIndex: (index) => getOrderedList()[index].hasCheckbox,
      hasRadioAtIndex: (index) => getOrderedList()[index].hasRadio,
      isCheckboxCheckedAtIndex: (index) => {
        const listItem = getOrderedList()[index];
        return listItem.hasCheckbox && listItem.checked;
      },
      isFocusInsideList: () =>
        getElement() !== document.activeElement &&
        getElement().contains(document.activeElement),
      isRootFocused: () => document.activeElement === getElement(),
      listItemAtIndexHasClass,
      notifyAction: (index) => {
        selectedIndex = index;
        dispatch(element, 'MDCList:action', { index });
      },
      removeClassForElementIndex,
      setAttributeForElementIndex,
      setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
        getOrderedList()[index].checked = isChecked;
      },
      setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
        const listItem = getOrderedList()[listItemIndex];
        const selector = 'button:not(:disabled), a';
        Array.prototype.forEach.call(
          listItem.element.querySelectorAll(selector),
          (el) => {
            el.setAttribute('tabindex', tabIndexValue);
          }
        );
      },
    });

    dispatch(element, 'SMUI:list:mount', {
      get element() {
        return getElement();
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

    return () => {
      instance.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function handleItemMount(event) {
    items.push(event.detail);
    itemAccessorMap.set(event.detail.element, event.detail);
    if (singleSelection && event.detail.selected) {
      selectedIndex = getListItemIndex(event.detail.element);
    }
    event.stopPropagation();
  }

  function handleItemUnmount(event) {
    const idx = items.indexOf(event.detail);
    if (idx !== -1) {
      items.splice(idx, 1);
      items = items;
    }
    itemAccessorMap.delete(event.detail.element);
    event.stopPropagation();
  }

  function handleAction(event) {
    if (radioList || checkList) {
      const index = getListItemIndex(event.target);
      if (index !== -1) {
        const item = getOrderedList()[index];
        if ((radioList && !item.checked) || checkList) {
          item.checked = !item.checked;
          item.activateRipple();
          window.requestAnimationFrame(() => {
            item.deactivateRipple();
          });
        }
      }
    }
  }

  function getOrderedList() {
    return [...getElement().children]
      .map((element) => itemAccessorMap.get(element))
      .filter((accessor) => accessor && accessor._smui_list_item_accessor);
  }

  function focusItemAtIndex(index) {
    const accessor = getOrderedList()[index];
    accessor && accessor.element.focus();
  }

  function listItemAtIndexHasClass(index, className) {
    const accessor = getOrderedList()[index];
    return accessor && accessor.hasClass(className);
  }

  function addClassForElementIndex(index, className) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addClass(className);
  }

  function removeClassForElementIndex(index, className) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeClass(className);
  }

  function setAttributeForElementIndex(index, name, value) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addAttr(name, value);
  }

  function removeAttributeForElementIndex(index, name) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeAttr(name);
  }

  function getListItemIndex(element) {
    const nearestParent = closest(element, '.mdc-list-item, .mdc-list');

    // Get the index of the element if it is a list item.
    if (nearestParent && matches(nearestParent, '.mdc-list-item')) {
      return getOrderedList()
        .map((item) => item.element)
        .indexOf(nearestParent);
    }
    return -1;
  }

  export function layout() {
    return instance.layout();
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

  export function getElement() {
    return element.getElement();
  }
</script>
