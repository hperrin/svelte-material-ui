<div
  class={Object.keys(anchorClasses).join(' ')}
  use:Anchor={{
    addClass: (className) => {
      if (!anchorClasses[className]) {
        anchorClasses[className] = true;
      }
    },
    removeClass: (className) => {
      if (anchorClasses[className]) {
        delete anchorClasses[className];
      }
    },
  }}
  bind:this={anchor}
  style="display: inline-block;"
>
  <Button onclick={() => surface.setOpen(true)}>Open Menu Surface</Button>
  <MenuSurface bind:this={surface} anchor={false} bind:anchorElement={anchor}>
    <ImageList class="menu-surface-image-list">
      {#each Array(4) as _unused, i}
        <ImageListItem>
          <ImageAspectContainer>
            <Image
              src="https://placehold.co/100x100?text=Image%20{i + 1}"
              alt="Image {i + 1}"
            />
          </ImageAspectContainer>
        </ImageListItem>
      {/each}
    </ImageList>
  </MenuSurface>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import MenuSurface, { Anchor } from '@smui/menu-surface';
  import ImageList, {
    Item as ImageListItem,
    ImageAspectContainer,
    Image,
  } from '@smui/image-list';
  import Button from '@smui/button';

  let surface: MenuSurface;
  let anchor: HTMLDivElement | undefined = $state();
  let anchorClasses: { [k: string]: boolean } = $state({});

  onMount(() => {
    // This sets the menu surface's origin corner to the top end instead of the
    // top start.
    surface.flipCornerHorizontally();
  });
</script>
