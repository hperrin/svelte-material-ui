<svelte:head>
  <title>Paper - SMUI</title>
</svelte:head>

<section>
  <h2>Paper</h2>

  <Simple />
  <ShowSource file="paper/Simple.svelte" />

  <Square />
  <ShowSource file="paper/Square.svelte" />

  <PrimaryColor />
  <ShowSource file="paper/PrimaryColor.svelte" />

  <SecondaryColor />
  <ShowSource file="paper/SecondaryColor.svelte" />

  <CustomColor />
  <ShowSource file="paper/CustomColor.svelte" />

  <ElevationTransition />
  <ShowSource file="paper/ElevationTransition.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Square from './Square.svelte';
  import PrimaryColor from './PrimaryColor.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import CustomColor from './CustomColor.svelte';
  import ElevationTransition from './ElevationTransition.svelte';
</script>
