<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Image Lists</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/image-list</pre>

  <h5>Demos</h5>

  <Demo
    component={Simple}
    files={['image-list/_Simple.svelte', 'image-list/_Simple.scss']}
  />

  <Demo
    component={FourByFive}
    files={['image-list/_FourByFive.svelte', 'image-list/_FourByFive.scss']}
  >
    4x5 aspect ratio, with text protection
  </Demo>

  <Demo
    component={Masonry}
    files={['image-list/_Masonry.svelte', 'image-list/_Masonry.scss']}
  >
    Masonry, with rounded shapes
  </Demo>

  <Demo
    component={EnforceAspectRatio}
    files={[
      'image-list/_EnforceAspectRatio.svelte',
      'image-list/_EnforceAspectRatio.scss',
    ]}
  >
    Using a <code>div</code> instead of an <code>img</code> to enforce aspect ratio
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import FourByFive from './_FourByFive.svelte';
  import Masonry from './_Masonry.svelte';
  import EnforceAspectRatio from './_EnforceAspectRatio.svelte';
</script>
