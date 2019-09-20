# Svelte Material UI - Image List

Image lists are RTL aware containers for sets of images and optional content.

See [MDC Image List](https://material.io/develop/web/components/image-lists/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-image-list/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/image-list
```

# Basic Usage

```html
<script>
  import ImageList, {Item, ImageAspectContainer, Image, Supporting, Label} from '@smui/image-list';
  import './style.scss';
  import {images} from './store.js';
</script>

<ImageList class="my-image-list">
  {#each $images as image}
    <Item>
      <ImageAspectContainer>
        <Image src={image.src} alt={image.title} />
      </ImageAspectContainer>
      <Supporting>
        <Label>{image.description}</Label>
      </Supporting>
    </Item>
  {/each}
</ImageList>
```

```scss
// style.scss
.my-image-list {
  @include mdc-image-list-standard-columns(5);
  max-width: 680px;
}

@media (max-width: 599px) {
  .my-image-list {
    @include mdc-image-list-standard-columns(3);
  }
}
```

# Demo

*in action:* https://sveltematerialui.com/demo/image-list

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/image-list.svelte and https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/image-list.scss

# Exports

todo...