<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Image Lists</h2>

  <Demo component={Simple} file="image-list/Simple.svelte" />

  <Demo component={TextProtection} file="image-list/TextProtection.svelte">
    4x5 aspect ratio, with text protection
  </Demo>

  <Demo component={Masonry} file="image-list/Masonry.svelte">
    Masonry, with rounded shapes
  </Demo>

  <Demo
    component={EnforceAspectRatio}
    file="image-list/EnforceAspectRatio.svelte"
  >
    Using a <code>div</code> instead of an <code>img</code> to enforce aspect ratio
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import TextProtection from './TextProtection.svelte';
  import Masonry from './Masonry.svelte';
  import EnforceAspectRatio from './EnforceAspectRatio.svelte';
</script>
