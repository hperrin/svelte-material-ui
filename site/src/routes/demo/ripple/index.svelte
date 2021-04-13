<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple</h2>

  <Simple />
  <ShowSource file="ripple/Simple.svelte" />

  <PrimaryColor />
  <ShowSource file="ripple/PrimaryColor.svelte" />

  <SecondaryColor />
  <ShowSource file="ripple/SecondaryColor.svelte" />

  <Unbounded />
  <ShowSource file="ripple/Unbounded.svelte" />

  <KeyboardActivation />
  <ShowSource file="ripple/KeyboardActivation.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import PrimaryColor from './PrimaryColor.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import Unbounded from './Unbounded.svelte';
  import KeyboardActivation from './KeyboardActivation.svelte';
</script>
