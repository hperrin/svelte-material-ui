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
            <Image
              src="https://place-hold.it/190x190&text=square"
              alt="Image {i + 1}"
            />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>

  <div>
    <h6 class="demo-title">4x5 aspect ratio, with text protection</h6>

    <ImageList class="my-image-list-4x5" withTextProtection>
      {#each Array(15) as _unused, i}
        <Item>
          <ImageAspectContainer>
            <Image
              src="https://place-hold.it/190x238&text=4x5"
              alt="Image {i + 1}"
            />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>

  <div>
    <h6 class="demo-title">Masonry, with rounded shapes</h6>

    <ImageList class="my-image-list-masonry" masonry>
      {#each Array(15) as _unused, i}
        <Item>
          <Image
            src="https://place-hold.it/190x{getUnevenImageSize(
              i,
              107,
              200,
              Math.abs
            )}&text=190x{getUnevenImageSize(i, 107, 200, Math.abs)}"
            alt="Image {i + 1}"
          />
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
  </div>

  <div>
    <h6 class="demo-title">
      Using a <code>div</code> instead of an <code>img</code> to enforce aspect ratio
    </h6>

    <ImageList class="my-image-list-enforce-ratio">
      {#each Array(15) as _unused, i}
        <Item>
          <ImageAspectContainer>
            <Image
              component={Div}
              style="background-image: url(https://place-hold.it/190x{getUnevenImageSize(
                i,
                190,
                10
              )}&text=190x{getUnevenImageSize(i, 190, 10)});"
            />
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
  import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
    Label,
  } from '@smui/image-list';
  import Div from '@smui/common/Div.svelte';
  import './image-list.scss';

  function getUnevenImageSize(counter, base, variance, preAdd = (num) => num) {
    const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
    return base + Math.floor(preAdd(mid));
  }
</script>
