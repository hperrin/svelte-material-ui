<section>
  <h2>Image Lists</h2>

  <div>
    <ImageList class="my-image-list-standard">
      {#each Array(15) as _unused, i}
        <Item>
          <ImageAspectContainer>
            <Image src="https://via.placeholder.com/190x190.png?text=square" alt="Image {i + 1}" />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>

  <div>
    4x5 aspect ratio, with text protection:

    <ImageList class="my-image-list-4x5" withTextProtection>
      {#each Array(15) as _unused, i}
        <Item>
          <ImageAspectContainer>
            <Image src="https://via.placeholder.com/190x238.png?text=4x5" alt="Image {i + 1}" />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>

  <div>
    Masonry, with rounded shapes:

    <ImageList class="my-image-list-masonry" masonry>
      {#each Array(15) as _unused, i}
        <Item>
          <Image src="https://via.placeholder.com/190x{107 + Math.floor(Math.abs((i % 2 ? Math.cos : Math.sin)(i) * 200))}.png?text=190x{107 + Math.floor(Math.abs((i % 2 ? Math.cos : Math.sin)(i) * 200))}" alt="Image {i + 1}" />
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>

  <div>
    Using a <code>div</code> instead of an <code>img</code> to enforce aspect ratio:

    <ImageList class="my-image-list-enforce-ratio">
      {#each Array(15) as _unused, i}
        <Item>
          <ImageAspectContainer>
            <Image component={Div} style="background-image: url(https://via.placeholder.com/190x{190 + Math.floor((i % 2 ? Math.cos : Math.sin)(i) * 10)}.png?text=190x{190 + Math.floor((i % 2 ? Math.cos : Math.sin)(i) * 10)});" />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>
</section>

<script>
  import ImageList, {Item, ImageAspectContainer, Image, Supporting, Label} from 'svelte-material-ui/components/image-list';
  import Div from 'svelte-material-ui/components/common/Div.svelte';
  import './ImageList.scss';
</script>