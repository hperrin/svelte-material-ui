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
        anchorClasses = anchorClasses;
      }
    },
  }}
  bind:this={anchor}
>
  <Button on:click={() => surface.setOpen(true)}>Open Menu Surface</Button>
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
  import MenuSurface, { Anchor } from '@smui/menu-surface';
  import ImageList, {
    Item as ImageListItem,
    ImageAspectContainer,
    Image,
  } from '@smui/image-list';
  import Button from '@smui/button';

  let surface: MenuSurface;
  let anchor: HTMLDivElement;
  let anchorClasses: { [k: string]: boolean } = {};
</script>
