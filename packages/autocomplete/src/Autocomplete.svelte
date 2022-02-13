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
    open={menuOpen}
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
  import { get_current_component } from 'svelte/internal';
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
  import type { MenuComponentDev } from '@smui/menu';
  import Menu from '@smui/menu';
  import type { SMUIListAccessor, SMUIListItemAccessor } from '@smui/list';
  import List, { Item, Text } from '@smui/list';
  import { Anchor } from '@smui/menu-surface';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
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
  export let menu$anchorCorner: MenuComponentDev['$$prop_def']['anchorCorner'] =
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

  $: menuOpen =
    focused &&
    (text !== '' || showMenuWithNoInput) &&
    (loading ||
      (!combobox && !(matches.length === 1 && matches[0] === value)) ||
      (combobox &&
        !!matches.length &&
        !(matches.length === 1 && matches[0] === value)));

  let previousText: string | undefined = undefined;
  $: if (previousText !== text) {
    if (!combobox && value != null && getOptionLabel(value) !== text) {
      deselectOption(value, false);
    }

    (async () => {
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
    })();

    previousText = text;
  }

  let previousValue = value;
  $: if (!combobox && previousValue !== value) {
    // If the value changes from outside, update the text.
    text = getOptionLabel(value);
    previousValue = value;
  } else if (combobox) {
    // If the text changes, update value if we're a combobox.
    value = text;
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

  function handleListAccessor(event: CustomEvent<SMUIListAccessor>) {
    if (!listAccessor) {
      listAccessor = event.detail;
    }
  }

  function selectOption(option: any, setText = true) {
    if (setText) {
      text = getOptionLabel(option);
    }
    value = option;
    if (!setText) {
      previousValue = option;
    }
    dispatch(element, 'SMUIAutocomplete:selected', option);
  }

  function deselectOption(option: any, setText = true) {
    if (setText) {
      text = '';
    }
    value = undefined;
    if (!setText) {
      previousValue = undefined;
    }
    dispatch(element, 'SMUIAutocomplete:deselected', option);
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
      return;
    }

    // Else, clear the currently focused item and mark as not focused.
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
