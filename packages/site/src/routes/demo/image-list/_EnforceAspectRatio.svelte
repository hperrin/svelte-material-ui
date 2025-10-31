<ImageList class="my-image-list-enforce-ratio">
  {#each Array(15) as _unused, i}
    <Item>
      <ImageAspectContainer>
        <Image
          tag="div"
          style="background-image: url(https://placehold.co/190x{getUnevenImageSize(
            i,
            190,
            10,
          )}?text=190x{getUnevenImageSize(i, 190, 10)});"
        />
      </ImageAspectContainer>
      <Supporting>
        <Label>Image {i + 1}</Label>
      </Supporting>
    </Item>
  {/each}
</ImageList>

<script lang="ts">
  import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
    Label,
  } from '@smui/image-list';

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
