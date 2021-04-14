<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Image Lists</h2>

  <Demo
    component={Simple}
    file="image-list/_Simple.svelte"
    scss="image-list/_Simple.scss"
  />

  <Demo
    component={FourByFive}
    file="image-list/_FourByFive.svelte"
    scss="image-list/_FourByFive.scss"
  >
    4x5 aspect ratio, with text protection
  </Demo>

  <Demo
    component={Masonry}
    file="image-list/_Masonry.svelte"
    scss="image-list/_Masonry.scss"
  >
    Masonry, with rounded shapes
  </Demo>

  <Demo
    component={EnforceAspectRatio}
    file="image-list/_EnforceAspectRatio.svelte"
    scss="image-list/_EnforceAspectRatio.scss"
  >
    Using a <code>div</code> instead of an <code>img</code> to enforce aspect ratio
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import FourByFive from './_FourByFive.svelte';
  import Masonry from './_Masonry.svelte';
  import EnforceAspectRatio from './_EnforceAspectRatio.svelte';
</script>
