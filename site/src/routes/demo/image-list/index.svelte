<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Image Lists</h2>

  <Demo component={Simple} file="image-list/_Simple.svelte" />

  <Demo component={TextProtection} file="image-list/_TextProtection.svelte">
    4x5 aspect ratio, with text protection
  </Demo>

  <Demo component={Masonry} file="image-list/_Masonry.svelte">
    Masonry, with rounded shapes
  </Demo>

  <Demo
    component={EnforceAspectRatio}
    file="image-list/_EnforceAspectRatio.svelte"
  >
    Using a <code>div</code> instead of an <code>img</code> to enforce aspect ratio
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import TextProtection from './_TextProtection.svelte';
  import Masonry from './_Masonry.svelte';
  import EnforceAspectRatio from './_EnforceAspectRatio.svelte';
</script>
