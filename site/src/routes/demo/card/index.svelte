<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  <h2>Cards</h2>

  <Simple />
  <ShowSource file="card/Simple.svelte" />

  <Actions />
  <ShowSource file="card/Actions.svelte" />

  <Media />
  <ShowSource file="card/Media.svelte" />

  <List />
  <ShowSource file="card/List.svelte" />

  <Complex />
  <ShowSource file="card/Complex.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Actions from './Actions.svelte';
  import Media from './Media.svelte';
  import List from './List.svelte';
  import Complex from './Complex.svelte';
</script>
