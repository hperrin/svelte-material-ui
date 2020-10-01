<script>
  import { exclude } from "@smui/common/exclude.js";
  import { prefixFilter } from "@smui/common/prefixFilter.js";
  import Textfield from "@smui/textfield";
  import Menu from "@smui/menu";
  import List, { Item, Text } from "@smui/list";
  import { Anchor } from "@smui/menu-surface";

  export let value = undefined;
  export let options = [];
  export let getOptionDisabled = undefined;
  export let getOptionSelected = (option, currentValue) =>
    option == currentValue;
  export let getOptionLabel = (option) => option || "";
  export let blurOnSelect = true;
  export let clearOnBlur = true;
  export let clearOnEscape = true;

  export let menu$class = "";
  export let menu$anchor = false;
  export let menu$anchorCorner = "BOTTOM_START";

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
    "getOptionSelected",
    "getOptionLabel",
    "blurOnSelect",
    "clearOnBlur",
    "clearOnEscape",
  ]);

  $: (async () => {
    if (typeof options == "function") {
      items = await options();
    } else {
      items = options || [];
    }
  })();

  export let search = (input) =>
    items.filter((item) =>
      getOptionLabel(item).toLowerCase().includes(input.toLowerCase())
    );

  $: value = getOptionLabel(value) == formattedValue ? value : undefined;

  $: (async () => {
    loading = true;
    const openMenu = formattedValue && getOptionLabel(value) != formattedValue;
    shouldClearOnBlur = openMenu;
    matches = await search(formattedValue || "");
    if (menu) {
      menu.setDefaultFocusState(1);
      menu.setOpen(openMenu);
    }
    loading = false;
  })();

  export function selectOption(option) {
    shouldClearOnBlur = false;
    value = option;
    formattedValue = getOptionLabel(option);
    menu && menu.setOpen(false);
    if (anchorElement && blurOnSelect) {
      const inputEl = anchorElement.querySelector(
        "input.mdc-text-field__input"
      );
      inputEl && addEventListenerOnce(inputEl, "focus", () => inputEl.blur());
    }
  }

  function handleTextfieldKeydown(e) {
    // When the textfield has focus and arrowDown is pressed, open the menu
    if (e.keyCode == 40) {
      shouldClearOnBlur = false;
      !menuIsOpen && menu.setDefaultFocusState(2);
      const menuItems = menu.getItems();
      if (menuItems && menuItems[0]) {
        menuIsOpen && menuItems[0].focus();
        menu.setOpen(true);
      }
    } else if (e.keyCode == 27 && clearOnEscape) {
      formattedValue = "";
    }
  }

  function handleListKeydown(e) {
    // When the list has focus and arrowUp is pressed, if we are at the top, close the menu
    if (e.keyCode == 38) {
      const menuItems = menu.getItems();
      if (menuItems && menuItems[0] && document.activeElement == menuItems[0]) {
        menu.setOpen(false);
      }
    }
  }

  function addEventListenerOnce(target, type, listener) {
    target.addEventListener(type, function fn() {
      target.removeEventListener(type, fn);
      listener.apply(this, arguments);
    });
  }

  function blurClear(e) {
    if (clearOnBlur && !value && shouldClearOnBlur) {
      formattedValue = "";
    }
  }
</script>

<div use:Anchor bind:this={anchorElement}>
  <div on:blur|capture={blurClear}>
    <Textfield
      on:keydown={handleTextfieldKeydown}
      bind:value={formattedValue}
      {...textfieldProps} />
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
    }}>
    <List {...prefixFilter($$props, 'list$')} on:keydown={handleListKeydown}>
      {#if loading}
        <slot name="loading">
          <Item>
            <Text>Loading...</Text>
          </Item>
        </slot>
      {:else if matches.length > 0}
        <slot name="matches" {matches}>
          {#each matches as match}
            <Item
              disabled={getOptionDisabled && getOptionDisabled(match)}
              selected={getOptionSelected(match, value)}
              on:SMUI:action={selectOption(match)}>
              <Text>{getOptionLabel(match)}</Text>
            </Item>
          {/each}
        </slot>
      {:else}
        <slot name="no-matches">
          <Item>
            <Text>No matches found.</Text>
          </Item>
        </slot>
      {/if}
    </List>
  </Menu>
</div>
