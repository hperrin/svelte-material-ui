<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  <h2>Cards</h2>

  <Demo component={Simple} file="card/_Simple.svelte" />

  <Demo component={Actions} file="card/_Actions.svelte">With Actions</Demo>

  <Demo component={Media} file="card/_Media.svelte">With Media</Demo>

  <Demo component={List} file="card/_List.svelte">With a List</Demo>

  <Demo component={Complex} file="card/_Complex.svelte">Complex</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Actions from './_Actions.svelte';
  import Media from './_Media.svelte';
  import List from './_List.svelte';
  import Complex from './_Complex.svelte';
</script>
