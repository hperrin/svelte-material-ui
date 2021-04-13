<!--
  Check out Masonry.scss
-->

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
        )}?text=190x{getUnevenImageSize(i, 107, 200, Math.abs)}&fontsize=23"
        alt="Image {i + 1}"
      />
      <Supporting>
        <Label>Image {i + 1}</Label>
      </Supporting>
    </Item>
  {/each}
</ImageList>

<script>
  import ImageList, { Item, Image, Supporting, Label } from '@smui/image-list';
  import './Masonry.scss';

  function getUnevenImageSize(counter, base, variance, preAdd = (num) => num) {
    const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
    return base + Math.floor(preAdd(mid));
  }
</script>
