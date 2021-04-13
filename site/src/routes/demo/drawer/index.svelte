<svelte:head>
  <title>Drawers - SMUI</title>
</svelte:head>

<section>
  <h2>Drawers</h2>

  <Permanent />
  <ShowSource file="drawer/Permanent.svelte" />

  <Dismissible />
  <ShowSource file="drawer/Dismissible.svelte" />

  <Modal />
  <ShowSource file="drawer/Modal.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Permanent from './Permanent.svelte';
  import Dismissible from './Dismissible.svelte';
  import Modal from './Modal.svelte';
</script>
