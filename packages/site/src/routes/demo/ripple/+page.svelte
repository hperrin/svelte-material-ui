<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/ripple</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="ripple/_Simple.svelte" />

  <Demo component={PrimaryColor} file="ripple/_PrimaryColor.svelte" />

  <Demo component={SecondaryColor} file="ripple/_SecondaryColor.svelte" />

  <Demo component={Unbounded} file="ripple/_Unbounded.svelte">Unbounded</Demo>

  <Demo
    component={KeyboardActivation}
    file="ripple/_KeyboardActivation.svelte"
  />
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Unbounded from './_Unbounded.svelte';
  import KeyboardActivation from './_KeyboardActivation.svelte';
</script>
