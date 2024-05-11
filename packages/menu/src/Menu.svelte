<svelte:options runes={false} />

<MenuSurface
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-menu': true,
  })}
  bind:open
  {...$$restProps}
  onkeydown={(e) => {
    handleKeydown(e);
    $$restProps.onkeydown?.(e);
  }}
  onSMUIMenuSurfaceOpened={(e) => {
    if (instance) {
      instance.handleMenuSurfaceOpened();
    }
    $$restProps.onSMUIMenuSurfaceOpened?.(e);
  }}
  onSMUIListAction={(e) => {
    if (instance) {
      instance.handleItemAction(
        listAccessor.getOrderedList()[e.detail.index].element,
      );
    }
    $$restProps.onSMUIListAction?.(e);
  }}><slot /></MenuSurface
>

<script lang="ts">
  import { MDCMenuFoundation, cssClasses } from '@material/menu';
  import { ponyfill } from '@material/dom';
  import type { ComponentProps } from 'svelte';
  import { onMount, getContext, setContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
  import type { SMUIListAccessor } from '@smui/list';
  import type { SMUIMenuSurfaceAccessor } from '@smui/menu-surface';
  import MenuSurface from '@smui/menu-surface';

  import type { DefaultFocusState } from './Menu.types.js';

  const { closest } = ponyfill;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    open?: boolean;
  };
  type $$Props = OwnProps & Omit<ComponentProps<MenuSurface>, keyof OwnProps>;

  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let open = false;

  let element: MenuSurface;
  let instance: MDCMenuFoundation;
  let menuSurfaceAccessor: SMUIMenuSurfaceAccessor;
  let listAccessor: SMUIListAccessor;

  setContext('SMUI:menu-surface:mount', (accessor: SMUIMenuSurfaceAccessor) => {
    if (!menuSurfaceAccessor) {
      menuSurfaceAccessor = accessor;
    }
  });
  const SMUIListMount = getContext<
    ((accessor: SMUIListAccessor) => void) | undefined
  >('SMUI:list:mount');
  setContext('SMUI:list:mount', (accessor: SMUIListAccessor) => {
    if (!listAccessor) {
      listAccessor = accessor;
    }
    SMUIListMount && SMUIListMount(accessor);
  });

  const SMUIMenuMount = getContext<
    ((accessor: MDCMenuFoundation) => void) | undefined
  >('SMUI:menu:mount');
  const SMUIMenuUnmount = getContext<
    ((accessor: MDCMenuFoundation) => void) | undefined
  >('SMUI:menu:unmount');

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
      getAttributeFromElementAtIndex: (index, attr) =>
        listAccessor.getAttributeFromElementIndex(index, attr),
      elementContainsClass: (element, className) =>
        element.classList.contains(className),
      closeSurface: (skipRestoreFocus) => {
        menuSurfaceAccessor.closeProgrammatic(skipRestoreFocus);
        dispatch(getElement(), 'SMUIMenuClosedProgrammatically');
      },
      getElementIndex: (element) =>
        listAccessor
          .getOrderedList()
          .map((accessor) => accessor.element)
          .indexOf(element),
      notifySelected: (evtData) =>
        dispatch(getElement(), 'SMUIMenuSelected', {
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
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        ),
      getSelectedSiblingOfItemAtIndex: (index) => {
        const orderedList = listAccessor.getOrderedList();
        const selectionGroupEl = closest(
          orderedList[index].element,
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
        const selectedItemEl = selectionGroupEl?.querySelector(
          `.${cssClasses.MENU_SELECTED_LIST_ITEM}`,
        );
        return selectedItemEl
          ? orderedList.map((item) => item.element).indexOf(selectedItemEl)
          : -1;
      },
    });

    SMUIMenuMount && SMUIMenuMount(instance);

    instance.init();

    return () => {
      SMUIMenuUnmount && SMUIMenuUnmount(instance);

      instance.destroy();
    };
  });

  function handleKeydown(event: Event) {
    instance && instance.handleKeydown(event as KeyboardEvent);
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

  export function getSelectedIndex() {
    return instance.getSelectedIndex();
  }

  export function getMenuSurface() {
    return element;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
