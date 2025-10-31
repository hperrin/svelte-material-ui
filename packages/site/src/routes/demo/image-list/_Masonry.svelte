<ImageList class="my-image-list-masonry" masonry>
  {#each Array(15) as _unused, i}
    <Item>
      <Image
        src="https://placehold.co/190x{getUnevenImageSize(
          i,
          107,
          200,
          Math.abs,
        )}?text=190x{getUnevenImageSize(i, 107, 200, Math.abs)}"
        alt="Image {i + 1}"
      />
      <Supporting>
        <Label>Image {i + 1}</Label>
      </Supporting>
    </Item>
  {/each}
</ImageList>

<script lang="ts">
  import ImageList, { Item, Image, Supporting, Label } from '@smui/image-list';

  function getUnevenImageSize(
    counter: number,
    base: number,
    variance: number,
    preAdd = (num: number) => num,
  ) {
    const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
    return base + Math.floor(preAdd(mid));
  }
</script>
