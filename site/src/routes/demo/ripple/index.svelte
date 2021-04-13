<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple</h2>

  <Demo component={Simple} file="ripple/Simple.svelte" />

  <Demo component={PrimaryColor} file="ripple/PrimaryColor.svelte" />

  <Demo component={SecondaryColor} file="ripple/SecondaryColor.svelte" />

  <Demo component={Unbounded} file="ripple/Unbounded.svelte">Unbounded</Demo>

  <Demo
    component={KeyboardActivation}
    file="ripple/KeyboardActivation.svelte"
  />
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import PrimaryColor from './PrimaryColor.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import Unbounded from './Unbounded.svelte';
  import KeyboardActivation from './KeyboardActivation.svelte';
</script>
