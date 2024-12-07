<svelte:options runes />

<MenuSurface
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-menu': true,
  })}
  bind:open
  bind:anchorElement
  {managed}
  {...restProps}
  onkeydown={(e) => {
    handleKeydown(e);
    restProps.onkeydown?.(e);
  }}
  onSMUIMenuSurfaceOpened={(e) => {
    if (instance) {
      instance.handleMenuSurfaceOpened();
    }
    restProps.onSMUIMenuSurfaceOpened?.(e);
  }}
  onSMUIListAction={(e) => {
    if (instance && listAccessor) {
      instance.handleItemAction(
        listAccessor.getOrderedList()[e.detail.index].element,
      );
    }
    restProps.onSMUIListAction?.(e);
  }}>{@render children?.()}</MenuSurface
>

<script lang="ts">
  import { MDCMenuFoundation, cssClasses } from '@material/menu';
  import { ponyfill } from '@material/dom';
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, getContext, setContext } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
  import type { SMUIListAccessor } from '@smui/list';
  import type { SMUIMenuSurfaceAccessor } from '@smui/menu-surface';
  import MenuSurface from '@smui/menu-surface';

  import type { DefaultFocusState } from './Menu.types.js';

  const { closest } = ponyfill;

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * Whether the menu is open.
     */
    open?: boolean;
    /**
     * A managed menu means you completely control the open state. The component
     * will never alter it on its own.
     */
    managed?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    open = $bindable(false),
    anchorElement = $bindable(),
    managed = false,
    children,
    ...restProps
  }: OwnProps &
    Omit<ComponentProps<typeof MenuSurface>, keyof OwnProps> = $props();

  let element: MenuSurface;
  let instance: MDCMenuFoundation | undefined = $state();
  let menuSurfaceAccessor: SMUIMenuSurfaceAccessor | undefined = $state();
  let listAccessor: SMUIListAccessor | undefined = $state();

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
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        listAccessor.addClassForElementIndex(index, className);
      },
      removeClassFromElementAtIndex: (index, className) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        listAccessor.removeClassForElementIndex(index, className);
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        listAccessor.setAttributeForElementIndex(index, attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        listAccessor.removeAttributeForElementIndex(index, attr);
      },
      getAttributeFromElementAtIndex: (index, attr) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        return listAccessor.getAttributeFromElementIndex(index, attr);
      },
      elementContainsClass: (element, className) =>
        element.classList.contains(className),
      closeSurface: (skipRestoreFocus) => {
        if (!managed) {
          menuSurfaceAccessor?.closeProgrammatic(skipRestoreFocus);
          dispatch(getElement(), 'SMUIMenuClosedProgrammatically');
        }
      },
      getElementIndex: (element) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        return listAccessor
          .getOrderedList()
          .map((accessor) => accessor.element)
          .indexOf(element);
      },
      notifySelected: (evtData) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        dispatch(getElement(), 'SMUIMenuSelected', {
          index: evtData.index,
          item: listAccessor.getOrderedList()[evtData.index].element,
        });
      },
      getMenuItemCount: () => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        return listAccessor.items.length;
      },
      focusItemAtIndex: (index) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        listAccessor.focusItemAtIndex(index);
      },
      focusListRoot: () => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        if ('focus' in listAccessor.element) {
          (listAccessor.element as HTMLInputElement).focus();
        }
      },
      isSelectableItemAtIndex: (index) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
        return !!closest(
          listAccessor.getOrderedList()[index].element,
          `.${cssClasses.MENU_SELECTION_GROUP}`,
        );
      },
      getSelectedSiblingOfItemAtIndex: (index) => {
        if (listAccessor == null) {
          throw new Error('List accessor is undefined.');
        }
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
      if (SMUIMenuUnmount && instance) {
        SMUIMenuUnmount(instance);
      }

      instance?.destroy();
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
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    instance.setDefaultFocusState(focusState);
  }

  export function getSelectedIndex() {
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    return instance.getSelectedIndex();
  }

  export function getMenuSurface() {
    return element;
  }

  export function getElement() {
    return element.getElement();
  }
</script>
