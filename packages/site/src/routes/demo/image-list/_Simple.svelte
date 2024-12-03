<ImageList class="my-image-list-standard">
  {#each Array(15) as _unused, i}
    <Item>
      <ImageAspectContainer>
        <Image
          src="https://placehold.co/190x190?text=square"
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
