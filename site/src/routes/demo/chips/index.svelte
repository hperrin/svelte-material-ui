<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips</h2>

  <Demo component={Simple} file="chips/Simple.svelte" />

  <Demo component={Choice} file="chips/Choice.svelte">Choice chips</Demo>

  <Demo component={Filter} file="chips/Filter.svelte">
    Filter chips with increased touch target
  </Demo>

  <Demo component={FilterIcons} file="chips/FilterIcons.svelte">
    The same, but with leading icons
  </Demo>

  <Demo component={Input} file="chips/Input.svelte">Input chips</Demo>

  <Demo component={Keyed} file="chips/Keyed.svelte">Keyed chips</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Choice from './Choice.svelte';
  import Filter from './Filter.svelte';
  import FilterIcons from './FilterIcons.svelte';
  import Input from './Input.svelte';
  import Keyed from './Keyed.svelte';
</script>
