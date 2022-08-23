<svelte:head>
  <title>Drawers - SMUI</title>
</svelte:head>

<section>
  <h2>Drawers</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/drawer</pre>

  <h5>Demos</h5>

  <Demo component={Permanent} file="drawer/_Permanent.svelte">
    A permanent drawer
  </Demo>

  <Demo component={Dismissible} file="drawer/_Dismissible.svelte">
    A dismissible drawer with a header and activated items
  </Demo>

  <Demo component={Modal} file="drawer/_Modal.svelte">
    A modal drawer with header, activated items, subheading, icons, list groups
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Permanent from './_Permanent.svelte';
  import Dismissible from './_Dismissible.svelte';
  import Modal from './_Modal.svelte';
</script>
