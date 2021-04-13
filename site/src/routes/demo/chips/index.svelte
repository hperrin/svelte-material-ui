<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips</h2>

  <Simple />
  <ShowSource file="chips/Simple.svelte" />

  <Choice />
  <ShowSource file="chips/Choice.svelte" />

  <Filter />
  <ShowSource file="chips/Filter.svelte" />

  <FilterIcons />
  <ShowSource file="chips/FilterIcons.svelte" />

  <Input />
  <ShowSource file="chips/Input.svelte" />

  <Keyed />
  <ShowSource file="chips/Keyed.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Choice from './Choice.svelte';
  import Filter from './Filter.svelte';
  import FilterIcons from './FilterIcons.svelte';
  import Input from './Input.svelte';
  import Keyed from './Keyed.svelte';
</script>
