<script>
  import { exclude } from "@smui/common/exclude.js";
  import { prefixFilter } from "@smui/common/prefixFilter.js";
  import Textfield from "@smui/textfield";
  import Menu from "@smui/menu";
  import List, { Item, Text } from "@smui/list";
  import { Anchor } from "@smui/menu-surface";
  import { onMount, createEventDispatcher, tick } from "svelte";

  export let options = [];
  export let value = undefined;
  export let getOptionDisabled = undefined;
  export let getOptionLabel = (option) => option || "";
  export let blurOnSelect = true;
  export let clearOnBlur = true;
  export let clearOnEscape = true;
  export let toggle = false;
  export let dirty = undefined;
  export let invalid = undefined;

  export let menu$class = "";
  export let menu$anchor = false;
  export let menu$anchorCorner = "BOTTOM_LEFT";

  const dispatch = createEventDispatcher();

  let items = [];
  let loading = false;
  let menu;
  let menuIsOpen;
  let anchorElement;
  let formattedValue = "";
  let matches = [];
  let shouldClearOnBlur = true;

  $: textfieldProps = exclude($$props, [
    "menu$",
    "list$",
    "value",
    "options",
    "getOptionDisabled",
    "getOptionLabel",
    "blurOnSelect",
    "clearOnBlur",
    "clearOnEscape",
    "toggle",
    "dirty",
    "invalid",
    "search",
    "getOptionSelected",
    "withLeadingIcon",
    "withTrailingIcon",
  ]);

  $: (async () => {
    if (typeof options == "function") {
      items = await options();
    } else {
      items = options || [];
    }
  })();

  export let search = (allOptions, input) =>
    allOptions.filter((item) =>
      getOptionLabel(item).toLowerCase().includes(input.toLowerCase())
    );

  export let getOptionSelected = (option, currentValue) =>
    option == currentValue;

  $: formattedValue = value ? getOptionLabel(value) : formattedValue;

  $: (async () => {
    loading = true;
    shouldClearOnBlur = true;
    matches = await search(items, formattedValue || "");
    menu && menu.setDefaultFocusState(1);
    loading = false;
  })();

  onMount(() => {
    menu && menu.setOpen(false);
  });

  export function blur() {
    if (anchorElement) {
      const inputEl = anchorElement.querySelector(
        "input.mdc-text-field__input"
      );
      inputEl &&
        addEventListenerOnce(inputEl, "focus", () => {
          menu && menu.setOpen(false);
          inputEl.blur();
        });
      menu && menu.setOpen(false);
    }
  }

  export function selectOption(option, shouldBlur = false) {
    value = option;
    formattedValue = getOptionLabel(option);
    shouldBlur && blur();
    dispatch("optionselected", option);
  }

  export function deselectOption(option, shouldBlur = false) {
    value = undefined;
    formattedValue = "";
    shouldBlur && blur();
    dispatch("optiondeselected", option);
  }

  export function toggleOption(option, shouldBlur = false) {
    if (getOptionSelected(option, value)) {
      deselectOption(option, shouldBlur);
    } else {
      selectOption(option, shouldBlur);
    }
  }

  function getFirstActiveMenuItem() {
    const menuItems = menu ? menu.getItems() : undefined;
    if (menuItems) {
      const firstActiveItem = menuItems.find(
        (el) => !hasClass(el, "mdc-list-item--disabled")
      );
      return firstActiveItem;
    }
  }

  async function handleTextfieldKeydown(e) {
    if (e.keyCode == 40) {
      // When the textfield has focus and arrowDown is pressed, open the menu and focus the first item (skip disabled items)
      shouldClearOnBlur = false;
      !menuIsOpen && menu.setDefaultFocusState(2);
      const firstActiveItem = getFirstActiveMenuItem();
      if (firstActiveItem) {
        menu.setOpen(true);
        firstActiveItem.focus();
      }
      await tick();
      shouldClearOnBlur = true;
    } else if (e.keyCode == 27 && clearOnEscape) {
      // Clear on escape
      value = undefined;
      formattedValue = "";
    }
  }

  async function handleListKeydown(e) {
    if (e.keyCode == 38) {
      // When the list has focus and arrowUp is pressed, if we are at the top (skipping disabled items), focus the textfield
      shouldClearOnBlur = false;
      const firstActiveItem = getFirstActiveMenuItem();
      if (firstActiveItem && document.activeElement == firstActiveItem) {
        const inputEl = anchorElement.querySelector(
          "input.mdc-text-field__input"
        );
        inputEl && inputEl.focus();
      }
      await tick();
      shouldClearOnBlur = true;
    }
  }

  function hasClass(element, className) {
    return ` ${element.className} `.indexOf(` ${className} `) > -1;
  }

  function addEventListenerOnce(target, type, listener) {
    target.addEventListener(type, function fn() {
      target.removeEventListener(type, fn);
      listener.apply(this, arguments);
    });
  }

  function blurClear(e) {
    const menuItems = menu.getItems();
    // Avoid clearing the input when navigating options with the keyboard
    if (menuItems.includes(e.relatedTarget)) return;

    if (clearOnBlur && !value && shouldClearOnBlur) {
      formattedValue = "";
    }
  }
</script>

<div on:blur|capture={blurClear} use:Anchor bind:this={anchorElement}>
  <div
    on:focus|capture={() => {
      if (!value && menu) {
        menu.setDefaultFocusState(1);
        menu.setOpen(true);
      }
    }}>
    <Textfield
      on:input={() => {
        value = undefined;
      }}
      on:keydown={handleTextfieldKeydown}
      bind:dirty
      bind:invalid
      bind:value={formattedValue}
      {...textfieldProps}
      on:click={() => {
        menu && menu.setOpen(true);
      }} />
  </div>
  <Menu
    class={menu$class}
    bind:this={menu}
    bind:open={menuIsOpen}
    anchor={menu$anchor}
    bind:anchorElement
    anchorCorner={menu$anchorCorner}
    {...exclude(prefixFilter($$props, 'menu$'), [
      'class',
      'anchor',
      'anchorCorner',
    ])}
    on:mouseenter={() => {
      shouldClearOnBlur = false;
    }}
    on:mouseleave={() => {
      shouldClearOnBlur = true;
    }}
    style="width:100%;">
    <List {...prefixFilter($$props, 'list$')} on:keydown={handleListKeydown}>
      {#if loading}
        <slot name="loading">
          <Item disabled>
            <Text>Loading...</Text>
          </Item>
        </slot>
      {:else if matches && matches.length > 0}
        <slot name="matches" {matches}>
          {#each matches as match}
            <Item
              disabled={getOptionDisabled && getOptionDisabled(match)}
              selected={getOptionSelected(match, value)}
              on:SMUI:action={() => (toggle ? toggleOption(match, blurOnSelect) : selectOption(match, blurOnSelect))}>
              <Text>{getOptionLabel(match)}</Text>
            </Item>
          {/each}
        </slot>
      {:else}
        <slot name="no-matches">
          <Item disabled>
            <Text>No matches found.</Text>
          </Item>
        </slot>
      {/if}
    </List>
  </Menu>
</div>
