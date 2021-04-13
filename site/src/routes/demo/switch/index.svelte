<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch</h2>

  <Simple />
  <ShowSource file="switch/Simple.svelte" />

  <PrimaryColor />
  <ShowSource file="switch/PrimaryColor.svelte" />

  <Group />
  <ShowSource file="switch/Group.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import PrimaryColor from './PrimaryColor.svelte';
  import Group from './Group.svelte';
</script>
