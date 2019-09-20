<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

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
          <Image src="https://via.placeholder.com/190x{getUnevenImageSize(i, 107, 200, Math.abs)}.png?text=190x{getUnevenImageSize(i, 107, 200, Math.abs)}" alt="Image {i + 1}" />
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
            <Image component={Div} style="background-image: url(https://via.placeholder.com/190x{getUnevenImageSize(i, 190, 10)}.png?text=190x{getUnevenImageSize(i, 190, 10)});" />
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
  import ImageList, {Item, ImageAspectContainer, Image, Supporting, Label} from '@smui/image-list';
  import Div from '@smui/common/Div.svelte';
  import './image-list.scss';

  function getUnevenImageSize(counter, base, variance, preAdd = num => num) {
    const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
    return base + Math.floor(preAdd(mid));
  }
</script>