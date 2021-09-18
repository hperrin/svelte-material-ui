<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
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
  on:keydown={(event) =>
    instance &&
    instance.handleKeydown(
      event,
      event.target.classList.contains('mdc-deprecated-list-item'),
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
  on:SMUIListItem:mount={handleItemMount}
  on:SMUIListItem:unmount={handleItemUnmount}
  on:SMUI:action={handleAction}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script lang="ts">
  import type { AddLayoutListener, RemoveLayoutListener } from '@smui/common';
  import { MDCListFoundation } from '@material/list';
  import { ponyfill } from '@material/dom';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import { get_current_component, SvelteComponentDev } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';
  import { Ul, Nav } from '@smui/common/elements/index.js';

  import type { SMUIListAccessor } from './List.types.js';
  import type { SMUIListItemAccessor } from './Item.types.js';

  const { closest, matches } = ponyfill;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
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
  export let wrapFocus: boolean =
    getContext<boolean | undefined>('SMUI:list:wrapFocus') ?? false;
  export let singleSelection = false;
  export let selectedIndex = -1;
  export let radioList = false;
  export let checkList = false;
  export let hasTypeahead = false;

  let element: SvelteComponentDev;
  let instance: MDCListFoundation;
  let items: SMUIListItemAccessor[] = [];
  let role = getContext<string | undefined>('SMUI:list:role');
  let nav = getContext<boolean | undefined>('SMUI:list:nav');
  const itemAccessorMap = new WeakMap<Element, SMUIListItemAccessor>();
  let selectionDialog = getContext<boolean | undefined>(
    'SMUI:dialog:selection'
  );
  let addLayoutListener = getContext<AddLayoutListener | undefined>(
    'SMUI:addLayoutListener'
  );
  let removeLayoutListener: RemoveLayoutListener | undefined;

  export let component: typeof SvelteComponentDev = nav ? Nav : Ul;

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
        getElement() !== document.activeElement &&
        getElement().contains(document.activeElement),
      isRootFocused: () => document.activeElement === getElement(),
      listItemAtIndexHasClass,
      notifyAction: (index) => {
        selectedIndex = index;
        dispatch(getElement(), 'MDCList:action', { index });
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
          }
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
        return instance.isTypeaheadInProgress();
      },
      typeaheadMatchItem(nextChar: string, startingIndex?: number) {
        return instance.typeaheadMatchItem(
          nextChar,
          startingIndex,
          /** skipFocus */ true
        );
      },
      getOrderedList,
      focusItemAtIndex,
      addClassForElementIndex,
      removeClassForElementIndex,
      // getAttributeForElementIndex,
      setAttributeForElementIndex,
      removeAttributeForElementIndex,
      getPrimaryTextAtIndex,
    };

    dispatch(getElement(), 'SMUIList:mount', accessor);

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

  function handleItemMount(event: CustomEvent<SMUIListItemAccessor>) {
    items.push(event.detail);
    itemAccessorMap.set(event.detail.element, event.detail);
    if (singleSelection && event.detail.selected) {
      selectedIndex = getListItemIndex(event.detail.element);
    }
    event.stopPropagation();
  }

  function handleItemUnmount(event: CustomEvent<SMUIListItemAccessor>) {
    const idx = (event.detail && items.indexOf(event.detail)) ?? -1;
    if (idx !== -1) {
      items.splice(idx, 1);
      items = items;
      itemAccessorMap.delete(event.detail.element);
    }
    event.stopPropagation();
  }

  function handleAction(event: Event) {
    if (radioList || checkList) {
      const index = getListItemIndex(event.target as Element);
      if (index !== -1) {
        const item = getOrderedList()[index];
        if (item && ((radioList && !item.checked) || checkList)) {
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
      .filter(
        (accessor) => accessor && accessor._smui_list_item_accessor
      ) as SMUIListItemAccessor[];
  }

  function focusItemAtIndex(index: number) {
    const accessor = getOrderedList()[index];
    accessor &&
      'focus' in accessor.element &&
      (accessor.element as HTMLInputElement).focus();
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

  // function getAttributeForElementIndex(index, name) {
  //   const accessor = getOrderedList()[index];
  //   accessor && accessor.getAttr(name, value);
  // }

  function setAttributeForElementIndex(
    index: number,
    name: string,
    value: string
  ) {
    const accessor = getOrderedList()[index];
    accessor && accessor.addAttr(name, value);
  }

  function removeAttributeForElementIndex(index: number, name: string) {
    const accessor = getOrderedList()[index];
    accessor && accessor.removeAttr(name);
  }

  function getPrimaryTextAtIndex(index: number) {
    const accessor = getOrderedList()[index];
    return (accessor && accessor.getPrimaryText()) ?? '';
  }

  function getListItemIndex(element: Element) {
    const nearestParent = closest(
      element,
      '.mdc-deprecated-list-item, .mdc-deprecated-list'
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
    return instance.layout();
  }

  export function setEnabled(itemIndex: number, isEnabled: boolean) {
    return instance.setEnabled(itemIndex, isEnabled);
  }

  export function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }

  export function getSelectedIndex() {
    return instance.getSelectedIndex();
  }

  export function getElement(): Element {
    return element.getElement();
  }
</script>
