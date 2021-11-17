<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/chips</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="chips/_Simple.svelte" />

  <Demo component={NonInteractive} file="chips/_NonInteractive.svelte">
    Non-interactive chips
  </Demo>

  <Demo component={Choice} file="chips/_Choice.svelte">Choice chips</Demo>

  <Demo component={Filter} file="chips/_Filter.svelte">
    Filter chips with increased touch target
  </Demo>

  <Demo component={FilterIcons} file="chips/_FilterIcons.svelte">
    The same, but with leading icons
  </Demo>

  <Demo component={Input} file="chips/_Input.svelte">Input chips</Demo>

  <Demo component={Keyed} file="chips/_Keyed.svelte">Keyed chips</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import NonInteractive from './_NonInteractive.svelte';
  import Choice from './_Choice.svelte';
  import Filter from './_Filter.svelte';
  import FilterIcons from './_FilterIcons.svelte';
  import Input from './_Input.svelte';
  import Keyed from './_Keyed.svelte';
</script>
