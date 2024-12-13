<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list': true,
    'mdc-deprecated-list--non-interactive': nonInteractive,
    'mdc-deprecated-list--dense': dense,
    'mdc-deprecated-list--textual-list': textualList,
    'mdc-deprecated-list--avatar-list': avatarList || selectionDialog,
    'mdc-deprecated-list--icon-list': iconList,
    'mdc-deprecated-list--image-list': imageList,
    'mdc-deprecated-list--thumbnail-list': thumbnailList,
    'mdc-deprecated-list--video-list': videoList,
    'mdc-deprecated-list--two-line': twoLine,
    'smui-list--three-line': threeLine && !twoLine,
  })}
  {role}
  {...restProps}
  onkeydown={(e: KeyboardEvent) => {
    handleKeydown(e);
    restProps.onkeydown?.(e);
  }}
  onfocusin={(e: FocusEvent) => {
    handleFocusin(e);
    restProps.onfocusin?.(e);
  }}
  onfocusout={(e: FocusEvent) => {
    handleFocusout(e);
    restProps.onfocusout?.(e);
  }}
  onclick={(e: MouseEvent) => {
    handleClick(e);
    restProps.onclick?.(e);
  }}
  onSMUIAction={(
    e: CustomEvent & { currentTarget: SmuiElementMap[TagName] },
  ) => {
    handleAction(e);
    restProps.onSMUIAction?.(e);
  }}
>
  {@render children?.()}
</MyComponent>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'ul'">
  import { MDCListFoundation } from '@material/list';
  import { ponyfill } from '@material/dom';
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import type { AddLayoutListener, RemoveLayoutListener } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  import type { SMUIListAccessor } from './List.types.js';
  import type { SMUIListItemAccessor } from './Item.types.js';

  const { closest, matches } = ponyfill;

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
     * Whether the list should ignore all user input.
     */
    nonInteractive?: boolean;
    /**
     * Style the list more compact.
     */
    dense?: boolean;
    /**
     * Style the list as a text list.
     */
    textualList?: boolean;
    /**
     * Style the list as an avatar list.
     */
    avatarList?: boolean;
    /**
     * Style the list as an icon list.
     */
    iconList?: boolean;
    /**
     * Style the list as an image list.
     */
    imageList?: boolean;
    /**
     * Style the list as a thumbnail list.
     */
    thumbnailList?: boolean;
    /**
     * Style the list as a video list.
     */
    videoList?: boolean;
    /**
     * Style the list as a two line list.
     */
    twoLine?: boolean;
    /**
     * Style the list as a three line list.
     */
    threeLine?: boolean;
    /**
     * Set the list to vertical orientation.
     */
    vertical?: boolean;
    /**
     * Whether to wrap focus around the end of the list.
     */
    wrapFocus?: boolean;
    /**
     * Allow a single selection from the list.
     */
    singleSelection?: boolean;
    /**
     * Whether disabled items should be focusable.
     */
    disabledItemsFocusable?: boolean;
    /**
     * The selected item's index.
     */
    selectedIndex?: number;
    /**
     * Whether the list is a radio button list.
     */
    radioList?: boolean;
    /**
     * Whether the list is a checkbox list.
     */
    checkList?: boolean;
    /**
     * Whether the list has typeahead.
     */
    hasTypeahead?: boolean;
    /**
     * The component to use to render the element.
     */
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    /**
     * The tag name of the element to create.
     */
    tag?: TagName;

    children?: Snippet;
  };
  let nav = getContext<boolean | undefined>('SMUI:list:nav');
  let {
    use = [],
    class: className = '',
    nonInteractive = false,
    dense = false,
    textualList = false,
    avatarList = false,
    iconList = false,
    imageList = false,
    thumbnailList = false,
    videoList = false,
    twoLine = false,
    threeLine = false,
    vertical = true,
    wrapFocus = getContext<boolean | undefined>('SMUI:list:wrapFocus') ?? false,
    singleSelection = false,
    disabledItemsFocusable = false,
    selectedIndex = $bindable(-1),
    radioList = false,
    checkList = false,
    hasTypeahead = false,
    component: MyComponent = SmuiElement,
    tag = (nav ? 'nav' : 'ul') as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;
  let instance: MDCListFoundation | undefined = $state();
  let items: SMUIListItemAccessor[] = [];
  let role = getContext<string | undefined>('SMUI:list:role');
  const itemAccessorMap = new WeakMap<Element, SMUIListItemAccessor>();
  let selectionDialog = getContext<boolean | undefined>(
    'SMUI:dialog:selection',
  );
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener',
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;

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

  $effect(() => {
    if (instance) {
      instance.setVerticalOrientation(vertical);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setWrapFocus(wrapFocus);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setHasTypeahead(hasTypeahead);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setSingleSelection(singleSelection);
    }
  });

  $effect(() => {
    if (instance) {
      instance.setDisabledItemsFocusable(disabledItemsFocusable);
    }
  });

  $effect(() => {
    if (instance && singleSelection && getSelectedIndex() !== selectedIndex) {
      instance.setSelectedIndex(selectedIndex);
    }
  });

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  setContext('SMUI:list:item:mount', (accessor: SMUIListItemAccessor) => {
    items.push(accessor);
    itemAccessorMap.set(accessor.element, accessor);
    if (singleSelection && accessor.selected) {
      selectedIndex = getListItemIndex(accessor.element);
    }
  });
  setContext('SMUI:list:item:unmount', (accessor: SMUIListItemAccessor) => {
    const idx = (accessor && items.findIndex((a) => a === accessor)) ?? -1;
    if (idx !== -1) {
      items.splice(idx, 1);
      itemAccessorMap.delete(accessor.element);
    }
  });

  const SMUIListMount = getContext<
    ((accessor: SMUIListAccessor) => void) | undefined
  >('SMUI:list:mount');
  const SMUIListUnmount = getContext<
    ((accessor: SMUIListAccessor) => void) | undefined
  >('SMUI:list:unmount');

  onMount(() => {
    instance = new MDCListFoundation({
      addClassForElementIndex,
      focusItemAtIndex,
      getAttributeForElementIndex: (index, name) =>
        getOrderedList()[index]?.getAttr(name) ?? null,
      getFocusedElementIndex: () =>
        document.activeElement
          ? getOrderedList()
              .map((accessor) => accessor.element)
              .indexOf(document.activeElement)
          : -1,
      getListItemCount: () => items.length,
      getPrimaryTextAtIndex,
      hasCheckboxAtIndex: (index) =>
        getOrderedList()[index]?.hasCheckbox ?? false,
      hasRadioAtIndex: (index) => getOrderedList()[index]?.hasRadio ?? false,
      isCheckboxCheckedAtIndex: (index) => {
        const listItem = getOrderedList()[index];
        return (listItem?.hasCheckbox && listItem.checked) ?? false;
      },
      isFocusInsideList: () =>
        element != null &&
        getElement() !== document.activeElement &&
        getElement().contains(document.activeElement),
      isRootFocused: () =>
        element != null && document.activeElement === getElement(),
      listItemAtIndexHasClass,
      notifyAction: (index) => {
        selectedIndex = index;
        if (element != null) {
          dispatch(getElement(), 'SMUIListAction', { index });
        }
      },
      notifySelectionChange: (changedIndices: number[]) => {
        if (element != null) {
          dispatch(getElement(), 'SMUIListSelectionChange', {
            changedIndices,
          });
        }
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
          (el: HTMLButtonElement | HTMLAnchorElement) => {
            el.setAttribute('tabindex', tabIndexValue);
          },
        );
      },
    });

    const accessor: SMUIListAccessor = {
      get element() {
        return getElement();
      },
      get items() {
        return items;
      },
      get typeaheadInProgress() {
        if (!instance) {
          throw new Error('Instance is undefined.');
        }
        return instance.isTypeaheadInProgress();
      },
      typeaheadMatchItem(nextChar: string, startingIndex?: number) {
        if (!instance) {
          throw new Error('Instance is undefined.');
        }
        return instance.typeaheadMatchItem(
          nextChar,
          startingIndex,
          /** skipFocus */ true,
        );
      },
      getOrderedList,
      focusItemAtIndex,
      addClassForElementIndex,
      removeClassForElementIndex,
      setAttributeForElementIndex,
      removeAttributeForElementIndex,
      getAttributeFromElementIndex,
      getPrimaryTextAtIndex,
    };

    SMUIListMount && SMUIListMount(accessor);

    instance.init();
    instance.layout();

    return () => {
      SMUIListUnmount && SMUIListUnmount(accessor);

      instance?.destroy();
    };
  });

  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });

  function handleKeydown(event: KeyboardEvent) {
    if (instance && event.target) {
      instance.handleKeydown(
        event,
        (event.target as Element).classList.contains(
          'mdc-deprecated-list-item',
        ),
        getListItemIndex(event.target as Element),
      );
    }
  }

  function handleFocusin(event: FocusEvent) {
    if (instance && event.target) {
      instance.handleFocusIn(getListItemIndex(event.target as Element));
    }
  }

  function handleFocusout(event: FocusEvent) {
    if (instance && event.target) {
      instance.handleFocusOut(getListItemIndex(event.target as Element));
    }
  }

  function handleClick(event: MouseEvent) {
    if (instance && event.target) {
      instance.handleClick(
        getListItemIndex(event.target as Element),
        !matches(
          event.target as Element,
          'input[type="checkbox"], input[type="radio"]',
        ),
        event,
      );
    }
  }

  function handleAction(event: CustomEvent<MouseEvent | KeyboardEvent>) {
    if (radioList || checkList) {
      const index = getListItemIndex(event.target as Element);
      if (index !== -1) {
        const item = getOrderedList()[index];
        if (item && ((radioList && !item.checked) || checkList)) {
          if (
            !matches(
              event.detail.target as Element,
              'input[type="checkbox"], input[type="radio"]',
            )
          ) {
            item.checked = !item.checked;
          }
          item.activateRipple();
          window.requestAnimationFrame(() => {
            item.deactivateRipple();
          });
        }
      }
    }
  }

  function getOrderedList() {
    if (element == null) {
      return [];
    }

    return [...getElement().children]
      .map((element) => itemAccessorMap.get(element))
      .filter(
        (accessor) => accessor && accessor._smui_list_item_accessor,
      ) as SMUIListItemAccessor[];
  }

  function listItemAtIndexHasClass(index: number, className: string) {
    const accessor = getOrderedList()[index];
    return (accessor && accessor.hasClass(className)) ?? false;
  }

  function addClassForElementIndex(index: number, className: string) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addClass(className);
  }

  function removeClassForElementIndex(index: number, className: string) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeClass(className);
  }

  function setAttributeForElementIndex(
    index: number,
    name: string,
    value: string,
  ) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addAttr(name, value);
  }

  function removeAttributeForElementIndex(index: number, name: string) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeAttr(name);
  }

  function getAttributeFromElementIndex(index: number, name: string) {
    const accessor = getOrderedList()[index];
    if (accessor) {
      return accessor.getAttr(name);
    } else {
      return null;
    }
  }

  function getPrimaryTextAtIndex(index: number) {
    const accessor = getOrderedList()[index];
    return (accessor && accessor.getPrimaryText()) ?? '';
  }

  function getListItemIndex(element: Element) {
    const nearestParent = closest(
      element,
      '.mdc-deprecated-list-item, .mdc-deprecated-list',
    );

    // Get the index of the element if it is a list item.
    if (nearestParent && matches(nearestParent, '.mdc-deprecated-list-item')) {
      return getOrderedList()
        .map((item) => item?.element)
        .indexOf(nearestParent);
    }
    return -1;
  }

  export function layout() {
    if (!instance) {
      throw new Error('Instance is undefined.');
    }
    return instance.layout();
  }

  export function setEnabled(itemIndex: number, isEnabled: boolean) {
    if (!instance) {
      throw new Error('Instance is undefined.');
    }
    return instance.setEnabled(itemIndex, isEnabled);
  }

  export function getTypeaheadInProgress() {
    if (!instance) {
      throw new Error('Instance is undefined.');
    }
    return instance.isTypeaheadInProgress();
  }

  export function getSelectedIndex() {
    if (!instance) {
      throw new Error('Instance is undefined.');
    }
    return instance.getSelectedIndex();
  }

  export function getFocusedItemIndex() {
    if (!instance) {
      throw new Error('Instance is undefined.');
    }
    return instance.getFocusedItemIndex();
  }

  export function focusItemAtIndex(index: number) {
    const accessor = getOrderedList()[index];
    accessor &&
      'focus' in accessor.element &&
      (accessor.element as HTMLInputElement).focus();
  }

  export function getElement() {
    return element.getElement();
  }
</script>
