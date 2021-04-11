<MenuSurface
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-menu': true,
  })}
  bind:open
  on:SMUI:menu-surface:mount={handleMenuSurfaceAccessor}
  on:SMUI:list:mount={handleListAccessor}
  on:MDCMenuSurface:opened={() =>
    instance && instance.handleMenuSurfaceOpened()}
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  on:MDCList:action={(event) =>
    instance &&
    instance.handleItemAction(
      listAccessor.getOrderedList()[event.detail.index].element
    )}
  {...$$restProps}><slot /></MenuSurface
>

<script>
  import { MDCMenuFoundation, cssClasses } from '@material/menu';
  import { closest } from '@material/dom/ponyfill';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal.js';
  import MenuSurface from '@smui/menu-surface/MenuSurface.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    'MDCList:action',
    'SMUI:list:mount',
    'MDCMenuSurface:closing',
    'MDCMenuSurface:closed',
    'MDCMenuSurface:opened',
    'MDCMenu:selected',
    'SMUI:menu:mount',
  ]);

  export let use = [];
  let className = '';
  export { className as class };
  export let open = false;

  let element;
  let instance;
  let menuSurfaceAccessor;
  let listAccessor;

  onMount(() => {
    instance = new MDCMenuFoundation({
      addClassToElementAtIndex: (index, className) => {
        listAccessor.addClassForElementIndex(index, className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        listAccessor.removeClassForElementIndex(index, className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        listAccessor.setAttributeForElementIndex(index, attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        listAccessor.removeAttributeForElementIndex(index, attr);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),
      closeSurface: (skipRestoreFocus) =>
        menuSurfaceAccessor.closeProgrammatic(skipRestoreFocus),
      getElementIndex: (element) =>
        listAccessor
          .getOrderedList()
          .map((accessor) => accessor.element)
          .indexOf(element),
      notifySelected: (evtData) =>
        dispatch(element, 'MDCMenu:selected', {
          index: evtData.index,
          item: listAccessor.getOrderedList()[evtData.index].element,
        }),
      getMenuItemCount: () => listAccessor.items.length,
      focusItemAtIndex: (index) => listAccessor.focusItemAtIndex(index),
      focusListRoot: () => listAccessor.element.focus(),
      isSelectableItemAtIndex: (index) =>
        !!closest(
          listAccessor.getOrderedList()[index].element,
          `.${cssClasses.MENU_SELECTION_GROUP}`
        ),
      getSelectedSiblingOfItemAtIndex: (index) => {
        const orderedList = listAccessor.getOrderedList();
        const selectionGroupEl = closest(
          orderedList[index].element,
          `.${cssClasses.MENU_SELECTION_GROUP}`
        );
        const selectedItemEl = selectionGroupEl.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`
        );
        return selectedItemEl
          ? orderedList.map((item) => item.element).indexOf(selectedItemEl)
          : -1;
      },
    });

    dispatch(element, 'SMUI:menu:mount', instance);

    instance.init();

    return () => {
      instance.destroy();
    };
  });

  function handleMenuSurfaceAccessor(event) {
    if (!menuSurfaceAccessor) {
      menuSurfaceAccessor = event.detail;
    }
  }

  function handleListAccessor(event) {
    if (!listAccessor) {
      listAccessor = event.detail;
    }
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value) {
    open = value;
  }

  export function setDefaultFocusState(focusState) {
    instance.setDefaultFocusState(focusState);
  }

  export function getElement() {
    return element.getElement();
  }
</script>
