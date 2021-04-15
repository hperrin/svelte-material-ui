<svelte:head>
  <title>Drawers - SMUI</title>
</svelte:head>

<section>
  <h2>Drawers</h2>

  <pre class="demo-spaced">npm i -D @smui/drawer</pre>

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

<script>
  import Demo from '../../../components/Demo.svelte';
  import Permanent from './_Permanent.svelte';
  import Dismissible from './_Dismissible.svelte';
  import Modal from './_Modal.svelte';
</script>
