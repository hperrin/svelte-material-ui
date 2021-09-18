<MenuSurface
  bind:this={element}
  use={usePass}
  class={classMap({
    [className]: true,
    'mdc-menu': true,
  })}
  bind:open
  on:SMUIMenuSurface:mount={handleMenuSurfaceAccessor}
  on:SMUIList:mount={handleListAccessor}
  on:MDCMenuSurface:opened={() =>
    instance && instance.handleMenuSurfaceOpened()}
  on:keydown={handleKeydown}
  on:MDCList:action={(event) =>
    instance &&
    instance.handleItemAction(
      listAccessor.getOrderedList()[event.detail.index].element
    )}
  {...$$restProps}><slot /></MenuSurface
>

<script lang="ts">
  import type { SMUIListAccessor } from '@smui/list';
  import type {
    MenuSurfaceComponentDev,
    SMUIMenuSurfaceAccessor,
  } from '@smui/menu-surface';
  import { MDCMenuFoundation, cssClasses } from '@material/menu';
  import { ponyfill } from '@material/dom';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import MenuSurface from '@smui/menu-surface';

  import type { DefaultFocusState } from './Menu.types.js';

  const { closest } = ponyfill;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use: ActionArray = [];
  $: usePass = [forwardEvents, ...use] as ActionArray;
  let className = '';
  export { className as class };
  export let open = false;

  let element: MenuSurfaceComponentDev;
  let instance: MDCMenuFoundation;
  let menuSurfaceAccessor: SMUIMenuSurfaceAccessor;
  let listAccessor: SMUIListAccessor;

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
        dispatch(getElement(), 'MDCMenu:selected', {
          index: evtData.index,
          item: listAccessor.getOrderedList()[evtData.index].element,
        }),
      getMenuItemCount: () => listAccessor.items.length,
      focusItemAtIndex: (index) => listAccessor.focusItemAtIndex(index),
      focusListRoot: () =>
        'focus' in listAccessor.element &&
        (listAccessor.element as HTMLInputElement).focus(),
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
        const selectedItemEl = selectionGroupEl?.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`
        );
        return selectedItemEl
          ? orderedList.map((item) => item.element).indexOf(selectedItemEl)
          : -1;
      },
    });

    dispatch(getElement(), 'SMUIMenu:mount', instance);

    instance.init();

    return () => {
      instance.destroy();
    };
  });

  function handleKeydown(event: Event) {
    instance && instance.handleKeydown(event as KeyboardEvent);
  }

  function handleMenuSurfaceAccessor(
    event: CustomEvent<SMUIMenuSurfaceAccessor>
  ) {
    if (!menuSurfaceAccessor) {
      menuSurfaceAccessor = event.detail;
    }
  }

  function handleListAccessor(event: CustomEvent<SMUIListAccessor>) {
    if (!listAccessor) {
      listAccessor = event.detail;
    }
  }

  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function setDefaultFocusState(focusState: DefaultFocusState) {
    instance.setDefaultFocusState(focusState);
  }

  export function getElement(): Element {
    return element.getElement();
  }
</script>
