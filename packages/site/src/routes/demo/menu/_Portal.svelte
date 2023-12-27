<!--
  Note: This is a very hacky way of creating a sub-menu that has a lot of
  downsides. Don't use this in production, it's meant to show off using a
  svelte-portal and hoisting a menu.
-->

<div style="min-width: 100px;">
  <Button on:click={() => menu.setOpen(true)}>
    <Label>Open Menu</Label>
  </Button>
  <Menu
    bind:this={menu}
    on:SMUIMenuSurface:closed={() => subMenu.setOpen(false)}
  >
    <List disabledItemsFocusable>
      <Item on:SMUI:action={() => (clicked = 'Cut')}>
        <Text>Cut</Text>
      </Item>
      <Item on:SMUI:action={() => (clicked = 'Copy')}>
        <Text>Copy</Text>
      </Item>
      <Item on:SMUI:action={() => (clicked = 'Paste')}>
        <Text>Paste</Text>
      </Item>
      <Separator />
      <!--
        We need to manually anchor the menu to this item.
      -->
      <Item
        nonInteractive
        class={Object.keys(anchorClasses).join(' ')}
        use={[
          [
            Anchor,
            {
              addClass,
              removeClass,
            },
          ],
        ]}
        bind:this={anchor}
      >
        <Text>More</Text>
        <Meta
          style="display: inline-flex; justify-content: center; align-items: center;"
        >
          <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
            <path fill="currentColor" d={mdiMenuRight} />
          </svg>
        </Meta>

        <!--
          This is normally where you would put the sub-menu, but a menu can't go
          in another menu, so we'll use a portal.
        -->
      </Item>
    </List>
  </Menu>

  <Portal>
    <!--
      The portal causes the Menu to be rendered directly underneath the body
      element.
    -->
    <Menu
      bind:this={subMenu}
      anchor={false}
      bind:anchorElement
      anchorCorner="TOP_END"
    >
      <List>
        <Item
          on:SMUI:action={() => {
            clicked = 'Move';
            menu.setOpen(false);
          }}
        >
          <Text>Move</Text>
        </Item>
        <Separator />
        <Item
          on:SMUI:action={() => {
            clicked = 'Delete';
            menu.setOpen(false);
          }}
        >
          <Text>Delete</Text>
        </Item>
      </List>
    </Menu>
  </Portal>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import { onMount } from 'svelte';
  import Portal from 'svelte-portal';
  import Menu from '@smui/menu';
  import { Anchor } from '@smui/menu-surface';
  import List, { Item, Separator, Text, Meta } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import { mdiMenuRight } from '@mdi/js';

  let menu: Menu;
  let subMenu: Menu;
  let anchor: Item;
  let anchorElement: HTMLElement;
  let anchorClasses: { [k: string]: boolean } = {};
  let clicked = 'nothing yet';

  function addClass(className: string) {
    if (!anchorClasses[className]) {
      anchorClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (anchorClasses[className]) {
      delete anchorClasses[className];
      anchorClasses = anchorClasses;
    }
  }

  onMount(() => {
    // This tells the menu surface to position itself relative to the body
    // instead of the anchor. Now the menu will position itself next to the
    // anchor, even though the menu itself is located in a portal.
    subMenu.getMenuSurface().setIsHoisted(true);
    anchorElement = anchor.getElement();

    // END OF RELEVANT CODE

    // The rest of this is a very hacky sub-menu implementation. Since you might
    // not trust me when I say don't do this in production, here are the
    // **known** downsides to this approach:
    //
    // - The menus being out of document order means their tab order is wrong.
    // - Keyboard navigation is buggy. Once in sub-menu, you can't get out.
    // - Screen readers will not be able to tell the user there is a sub-menu.
    //   - Seriously, this one point alone is a deal breaker. It means vision
    //     impaired users cannot use this sub-menu.
    // - Clicking the "More" button causes the menu to close.
    //
    // Now that you know how terrible of an idea it would be to use this, if you
    // decide that you will, and you file any bugs about it, I will point you to
    // this note, and be mad at you.

    const subMenuElement = subMenu.getElement();

    function contains(outer: HTMLElement, inner: HTMLElement | null) {
      let check: HTMLElement | null = inner;
      while (check) {
        if (check === outer) {
          return true;
        }
        check = check.parentElement;
      }
      return false;
    }

    anchorElement.addEventListener('mouseenter', (event) => {
      if (!contains(subMenuElement, event.relatedTarget as HTMLElement)) {
        subMenu.setOpen(true);
      }
    });
    anchorElement.addEventListener('focus', () => {
      subMenuElement.addEventListener(
        'SMUIMenuSurface:opened',
        () => {
          const focusEl =
            subMenuElement.querySelector<HTMLElement>('[tabindex="0"]');
          if (focusEl) {
            focusEl.focus();
          }
        },
        { once: true },
      );
      subMenu.setOpen(true);
    });
    anchorElement.addEventListener('mouseleave', (event) => {
      if (!contains(subMenuElement, event.relatedTarget as HTMLElement)) {
        subMenu.setOpen(false);
      }
    });
    subMenuElement.addEventListener('mouseleave', (event) => {
      if (!contains(anchorElement, event.relatedTarget as HTMLElement)) {
        subMenu.setOpen(false);
      }
    });
  });
</script>
