<script>
  import { exclude } from "@smui/common/exclude.js";
  import { prefixFilter } from "@smui/common/prefixFilter.js";
  import Textfield from "@smui/textfield";
  import Menu from "@smui/menu";
  import List, { Item, Text } from "@smui/list";
  import { Anchor } from "@smui/menu-surface";
  import { createEventDispatcher } from "svelte";

  export let options = [];
  export let value = undefined;
  export let getOptionDisabled = undefined;
  export let getOptionLabel = (option) => option || "";
  export let blurOnSelect = true;
  export let clearOnBlur = undefined;
  export let clearOnEscape = true;
  export let toggle = false;
  export let dirty = undefined;
  export let invalid = undefined;
  export let freeSolo = false;

  export let menu$class = "";
  export let menu$anchor = false;
  export let menu$anchorCorner = "BOTTOM_LEFT";

  const dispatch = createEventDispatcher();

  let items = [];
  let loading = false;
  let error = false;
  let menu;
  let menuIsOpen;
  let anchorElement;
  let formattedValue = "";
  let matches = [];
  let focusedIndex = -1;
  let activeItems;
  let focusedItem;
  let activeOptions = [];

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
    "freeSolo",
    "search",
    "getOptionSelected",
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

  $: if (freeSolo) {
    value = formattedValue;
  } else {
    formattedValue = value ? getOptionLabel(value) : formattedValue;
  }

  $: clearOnBlur = clearOnBlur == undefined ? !freeSolo : clearOnBlur;

  $: (async () => {
    try {
      loading = true;
      matches = await search(items, formattedValue || "");
      loading = false;
      error = false;
    } catch (err) {
      loading = false;
      error = true;
      throw err;
    }
  })();

  $: if (menu) {
    activeItems = getActiveMenuItems();

    if (focusedIndex != -1) {
      focusedItem = activeItems.splice(focusedIndex, 1)[0];

      if (focusedItem) {
        addClass(focusedItem, "mdc-ripple-upgraded--background-focused");
        focusedItem.scrollIntoView();
      }
    }

    activeItems.forEach((item) => {
      removeClass(item, "mdc-ripple-upgraded--background-focused");
    });

    menu.getItems().forEach((item) => {
      item.setAttribute("tabindex", -1);
    });
  }

  $: activeOptions = activeOptions.filter((el) => el);

  export function blur() {
    if (anchorElement) {
      const inputEl = anchorElement.querySelector(
        "input.mdc-text-field__input"
      );

      menu && menu.setOpen(false);
      inputEl && inputEl.blur();
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

  function getActiveMenuItems() {
    const menuItems = menu ? menu.getItems() : undefined;
    if (menuItems) {
      return menuItems.filter((el) => !hasClass(el, "mdc-list-item--disabled"));
    }
  }

  function handleTextfieldKeydown(e) {
    if (e.keyCode == 40) {
      e.preventDefault();

      menu.setOpen(true);
      if (focusedIndex == -1 || focusedIndex == activeItems.length) {
        focusedIndex = 0;
      } else {
        focusedIndex++;
      }
    } else if (e.keyCode == 38) {
      e.preventDefault();

      menu.setOpen(true);
      if (focusedIndex == -1 || focusedIndex == 0) {
        focusedIndex = activeItems.length;
      } else {
        focusedIndex--;
      }
    } else if (e.keyCode == 27 && clearOnEscape) {
      e.preventDefault();

      // Clear on escape
      value = undefined;
      formattedValue = "";
      focusedIndex = -1;
    } else if (e.keyCode == 13) {
      e.preventDefault();

      if (focusedItem) {
        activeOptions[focusedIndex].action(e);
        focusedItem = undefined;
        focusedIndex = -1;
      }
    }
  }

  function handleTextfieldBlur(e) {
    focusedIndex = -1;
    menu && menu.setOpen(false);

    if (clearOnBlur && !value) {
      formattedValue = "";
    }
  }

  function hasClass(element, className) {
    return ` ${element.className} `.indexOf(` ${className} `) > -1;
  }

  function addClass(element, className) {
    const arr = element.className.split(" ");
    if (arr.indexOf(className) == -1) {
      element.className += " " + className;
    }
  }

  function removeClass(element, className) {
    element.className = element.className.replace(className, "");
  }
</script>

<style>
  * :global(.smui-autocomplete-menu) {
    width: 100%;
  }
</style>

<div use:Anchor bind:this={anchorElement}>
  <div
    on:focus|capture={() => {
      if (!value && menu) {
        menu.setOpen(true);
      }
    }}
    on:blur|capture={handleTextfieldBlur}>
    <Textfield
      on:input={() => {
        value = undefined;
        focusedIndex = -1;
        menu && menu.setOpen(true);
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
    class="smui-autocomplete-menu {menu$class}"
    bind:this={menu}
    bind:open={menuIsOpen}
    anchor={menu$anchor}
    bind:anchorElement
    anchorCorner={menu$anchorCorner}
    {...exclude(prefixFilter($$props, 'menu$'), [
      'class',
      'anchor',
      'anchorCorner',
    ])}>
    <List {...prefixFilter($$props, 'list$')}>
      {#if loading}
        <slot name="loading">
          <Item disabled>
            <Text>Loading...</Text>
          </Item>
        </slot>
      {:else if matches && matches.length > 0}
        {#each matches as match, i}
          <Item
            bind:this={activeOptions[i]}
            disabled={getOptionDisabled && getOptionDisabled(match)}
            selected={getOptionSelected(match, value)}
            on:mouseenter={() => {
              focusedIndex = i;
            }}
            on:SMUI:action={(e) => (toggle ? toggleOption(match, blurOnSelect) : selectOption(match, blurOnSelect))}>
            <slot name="match" {match}>
              <Text>{getOptionLabel(match)}</Text>
            </slot>
          </Item>
        {/each}
      {:else if error}
        <slot name="error">
          <Item disabled>
            <Text>Error while fetching suggestions.</Text>
          </Item>
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
