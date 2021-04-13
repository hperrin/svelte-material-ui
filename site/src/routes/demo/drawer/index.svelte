<svelte:head>
  <title>Drawers - SMUI</title>
</svelte:head>

<section>
  <h2>Drawers</h2>

  <Demo component={Permanent} file="drawer/Permanent.svelte">
    A permanent drawer
  </Demo>

  <Demo component={Dismissible} file="drawer/Dismissible.svelte">
    A dismissible drawer with a header and activated items
  </Demo>

  <Demo component={Modal} file="drawer/Modal.svelte">
    A modal drawer with header, activated items, subheading, icons, list groups
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Permanent from './Permanent.svelte';
  import Dismissible from './Dismissible.svelte';
  import Modal from './Modal.svelte';
</script>
