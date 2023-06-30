<div
  bind:this={element}
  use:Anchor
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-autocomplete': true,
  })}
  {...exclude($$restProps, ['menu$', 'textfield$', 'list$'])}
>
  <div
    bind:this={inputContainer}
    on:focusin={() => {
      focused = true;
    }}
    on:focusout={handleTextfieldBlur}
    on:input={() => {
      focusedIndex = -1;
    }}
    on:keydown|capture={handleTextfieldKeydown}
  >
    <slot>
      <Textfield
        {label}
        {disabled}
        bind:value={text}
        {...prefixFilter($$restProps, 'textfield$')}
      />
    </slot>
  </div>
  <Menu
    class={classMap({
      [menu$class]: true,
      'smui-autocomplete__menu': true,
    })}
    managed
    neverRestoreFocus
    open={focused &&
      (text !== '' || showMenuWithNoInput) &&
      (loading ||
        (!combobox && !(matches.length === 1 && matches[0] === value)) ||
        (combobox &&
          !!matches.length &&
          !(matches.length === 1 && matches[0] === value)))}
    bind:anchorElement={element}
    anchor={menu$anchor}
    anchorCorner={menu$anchorCorner}
    on:SMUIList:mount={handleListAccessor}
    {...prefixFilter($$restProps, 'menu$')}
  >
    <List {...prefixFilter($$restProps, 'list$')}>
      {#if loading}
        <Item disabled>
          <slot name="loading">
            <Text>Loading...</Text>
          </slot>
        </Item>
      {:else if error}
        <Item disabled>
          <slot name="error">
            <Text>Error while fetching suggestions.</Text>
          </slot>
        </Item>
      {:else}
        {#each matches as match, i}
          <Item
            disabled={getOptionDisabled(match)}
            selected={match === value}
            on:mouseenter={() => {
              focusedIndex = i;
            }}
            on:SMUI:action={() =>
              toggle ? toggleOption(match) : selectOption(match)}
          >
            <slot name="match" {match}>
              <Text>{getOptionLabel(match)}</Text>
            </slot>
          </Item>
        {:else}
          <Item
            disabled={noMatchesActionDisabled}
            on:SMUI:action={(e) =>
              dispatch(element, 'SMUIAutocomplete:noMatchesAction', e)}
          >
            <slot name="no-matches">
              <Text>No matches found.</Text>
            </slot>
          </Item>
        {/each}
      {/if}
    </List>
  </Menu>
</div>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Textfield from '@smui/textfield';
  import Menu from '@smui/menu';
  import type { SMUIListAccessor, SMUIListItemAccessor } from '@smui/list';
  import List, { Item, Text } from '@smui/list';
  import { Anchor } from '@smui/menu-surface';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined';
    options?: (() => Promise<any[]>) | any[];
    value?: any;
    getOptionDisabled?: (option: any) => boolean;
    getOptionLabel?: (option: any) => string;
    text?: string;
    label?: string | undefined;
    disabled?: boolean;
    toggle?: boolean;
    combobox?: boolean;
    clearOnBlur?: boolean;
    selectOnExactMatch?: boolean;
    showMenuWithNoInput?: boolean;
    noMatchesActionDisabled?: boolean;
    search?: (input: string) => Promise<any[] | false>;
    menu$class?: string;
    menu$anchor?: boolean;
    menu$anchorCorner?: ComponentProps<Menu>['anchorCorner'];
  };
  type $$Props = OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<Menu> as `menu\$${k}`]?: ComponentProps<Menu>[k];
    } & {
      [k in keyof ComponentProps<Textfield> as `textfield\$${k}`]?: ComponentProps<Textfield>[k];
    } & {
      [k in keyof ComponentProps<List> as `list\$${k}`]?: ComponentProps<List>[k];
    } & {
      textfield$label?: never;
      textfield$value?: never;
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let options: (() => Promise<any[]>) | any[] = [];
  export let value: any = undefined;
  export let getOptionDisabled: (option: any) => boolean = () => false;
  export let getOptionLabel: (option: any) => string = (option: any) =>
    option == null ? '' : `${option}`;
  export let text = getOptionLabel(value);
  export let label: string | undefined = undefined;
  export let disabled = false;
  export let toggle = false;
  export let combobox = false;
  export let clearOnBlur = !combobox;
  export let selectOnExactMatch = true;
  export let showMenuWithNoInput = true;
  export let noMatchesActionDisabled = true;
  export let search: (input: string) => Promise<any[] | false> = async (
    input: string
  ) => {
    const linput = input.toLowerCase();
    const fullOptions =
      typeof options == 'function' ? await options() : options || [];

    if (linput === '') {
      return fullOptions;
    }

    const result = fullOptions.filter((item) =>
      getOptionLabel(item).toLowerCase().includes(linput)
    );
    result.sort((a, b) => {
      const aString = getOptionLabel(a).toLowerCase();
      const bString = getOptionLabel(b).toLowerCase();
      if (aString.startsWith(linput) && !bString.startsWith(linput)) {
        return -1;
      } else if (bString.startsWith(linput) && !aString.startsWith(linput)) {
        return 1;
      }
      return 0;
    });
    return result;
  };
  export let menu$class = '';
  export let menu$anchor = false;
  export let menu$anchorCorner: ComponentProps<Menu>['anchorCorner'] =
    'BOTTOM_START';

  let element: HTMLDivElement;
  let inputContainer: HTMLDivElement;
  let loading = false;
  let error = false;
  let focused = false;
  let listAccessor: SMUIListAccessor;
  let matches: any[] = [];
  let focusedIndex = -1;
  let focusedItem: SMUIListItemAccessor | undefined = undefined;

  let previousText = text;
  $: if (previousText !== text) {
    if (!combobox && value != null && getOptionLabel(value) !== text) {
      deselectOption(value, false);
    }

    // Only when we're focused do we need to perform a search.
    if (focused) {
      performSearch();
      previousText = text;
    }
  }

  $: if (options) {
    // Set search results on init and refresh search results when `options` is
    // changed.
    performSearch();
  }

  let previousValue = value;
  $: if (previousValue !== value) {
    // If the value changes from outside, update the text.
    text = getOptionLabel(value);
    previousValue = value;
  } else if (combobox && value !== text) {
    // An update came from the user.
    value = text;
    previousValue = value;
  }

  let previousFocusedIndex: number | undefined = undefined;
  $: if (previousFocusedIndex !== focusedIndex) {
    const activeItems = getActiveMenuItems();

    if (focusedIndex === -1) {
      focusedItem = undefined;
    } else {
      focusedItem = activeItems[focusedIndex];

      if (focusedItem) {
        focusedItem.activated = true;
        if (!isInViewport(focusedItem.element)) {
          focusedItem.element.scrollIntoView({
            block: 'end',
            inline: 'nearest',
          });
        }
      }
    }

    activeItems.forEach((item, i) => {
      if (i !== focusedIndex) {
        item.activated = false;
      }
    });

    if (listAccessor) {
      listAccessor.getOrderedList().forEach((itemAccessor) => {
        itemAccessor.tabindex = -1;
      });
    }

    previousFocusedIndex = focusedIndex;
  }

  async function performSearch() {
    loading = true;
    error = false;
    try {
      const searchResult = await search(text);
      if (searchResult !== false) {
        matches = searchResult;
        if (selectOnExactMatch) {
          const exactMatch = matches.find(
            (match) => getOptionLabel(match) === text
          );
          if (exactMatch && value !== exactMatch) {
            selectOption(exactMatch);
          }
        }
      }
    } catch (e: any) {
      error = true;
    }
    loading = false;
  }

  function handleListAccessor(event: CustomEvent<SMUIListAccessor>) {
    if (!listAccessor) {
      listAccessor = event.detail;
    }
  }

  function selectOption(option: any, setText = true) {
    const event = dispatch(element, 'SMUIAutocomplete:selected', option, {
      bubbles: true,
      cancelable: true,
    });

    if (event.defaultPrevented) {
      return;
    }

    if (setText) {
      text = getOptionLabel(option);
    }
    value = option;
    if (!setText) {
      previousValue = option;
    }
  }

  function deselectOption(option: any, setText = true) {
    const event = dispatch(element, 'SMUIAutocomplete:deselected', option, {
      bubbles: true,
      cancelable: true,
    });

    if (event.defaultPrevented) {
      return;
    }

    if (setText) {
      text = '';
    }
    value = undefined;
    if (!setText) {
      previousValue = undefined;
    }
  }

  function toggleOption(option: any) {
    if (option === value) {
      deselectOption(option);
    } else {
      selectOption(option);
    }
  }

  function isInViewport(elem: Element) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function getActiveMenuItems() {
    if (!listAccessor) {
      return [];
    }
    return listAccessor
      .getOrderedList()
      .filter((itemAccessor) => !itemAccessor.disabled);
  }

  function handleTextfieldKeydown(e: KeyboardEvent) {
    if (combobox && !matches.length) {
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (
        focusedIndex === -1 ||
        focusedIndex === getActiveMenuItems().length - 1
      ) {
        focusedIndex = 0;
      } else {
        focusedIndex++;
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();

      if (focusedIndex === -1 || focusedIndex === 0) {
        focusedIndex = getActiveMenuItems().length - 1;
      } else {
        focusedIndex--;
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();

      const activeItems = getActiveMenuItems();

      if (focusedItem) {
        if (activeItems[focusedIndex]) {
          activeItems[focusedIndex].action(e);
        }
        focusedIndex = -1;
      }
    }
  }

  async function handleTextfieldBlur(event: FocusEvent) {
    // Check if the reason we're unfocusing is that the user clicked an item.
    if (
      event.relatedTarget &&
      getActiveMenuItems()
        .map((itemAccessor) => itemAccessor.element)
        .indexOf(event.relatedTarget as Element) !== -1
    ) {
      // Wait until the item is selected.
      element.addEventListener(
        'SMUIAutocomplete:selected',
        () => {
          // Then clear the focus.
          focusedIndex = -1;
          focused = false;
        },
        { once: true }
      );
      return;
    }

    // Clear the focus and input.
    focusedIndex = -1;
    focused = false;

    if (clearOnBlur && value == null) {
      text = '';
    }
  }

  export function focus() {
    if (inputContainer) {
      const inputEl = inputContainer.querySelector<HTMLInputElement>(
        'input.mdc-text-field__input'
      );

      if (inputEl) {
        inputEl.focus();
      }
    }
  }

  export function blur() {
    if (inputContainer) {
      const inputEl = inputContainer.querySelector<HTMLInputElement>(
        'input.mdc-text-field__input'
      );

      if (inputEl) {
        inputEl.blur();
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>
