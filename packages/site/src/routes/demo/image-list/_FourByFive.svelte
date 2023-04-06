<ImageList class="my-image-list-4x5" withTextProtection>
  {#each Array(15) as _unused, i}
    <Item>
      <ImageAspectContainer>
        <Image
          src="https://placehold.co/190x238?text=4x5"
          alt="Image {i + 1}"
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
</script>
