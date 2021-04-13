<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  <h2>Cards</h2>

  <Demo component={Simple} file="card/Simple.svelte" />

  <Demo component={Actions} file="card/Actions.svelte">With Actions</Demo>

  <Demo component={Media} file="card/Media.svelte">With Media</Demo>

  <Demo component={List} file="card/List.svelte">With a List</Demo>

  <Demo component={Complex} file="card/Complex.svelte">Complex</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Actions from './Actions.svelte';
  import Media from './Media.svelte';
  import List from './List.svelte';
  import Complex from './Complex.svelte';
</script>
