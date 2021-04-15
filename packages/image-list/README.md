# Svelte Material UI - Image List

Image lists are RTL aware containers for sets of images and optional content.

# Installation

```sh
npm install --save-dev @smui/image-list
```

# Demo

_in action:_ https://sveltematerialui.com/demo/image-list

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/image-list/

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
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

<script>
  import ImageList, {
    Item,
    ImageAspectContainer,
    Image,
    Supporting,
    Label,
  } from '@smui/image-list';
  import './style.scss';
  import { images } from './store.js';
</script>
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

# Exports

todo...

# More Information

See [Image lists](https://material.io/components/image-lists) in the Material design spec.

See [Image List](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-image-list) in MDC-Web for information about the upstream library's architecture.
