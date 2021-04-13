<svelte:head>
  <title>Checkbox - SMUI</title>
</svelte:head>

<section>
  <h2>Checkbox</h2>

  <Simple />
  <ShowSource file="checkbox/Simple.svelte" />

  <Touch />
  <ShowSource file="checkbox/Touch.svelte" />

  <Group />
  <ShowSource file="checkbox/Group.svelte" />

  <Indeterminate />
  <ShowSource file="checkbox/Indeterminate.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Touch from './Touch.svelte';
  import Group from './Group.svelte';
  import Indeterminate from './Indeterminate.svelte';
</script>
