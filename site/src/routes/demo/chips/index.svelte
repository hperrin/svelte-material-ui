<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips</h2>

  <pre class="demo-spaced">npm i -D @smui/chips</pre>

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

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import NonInteractive from './_NonInteractive.svelte';
  import Choice from './_Choice.svelte';
  import Filter from './_Filter.svelte';
  import FilterIcons from './_FilterIcons.svelte';
  import Input from './_Input.svelte';
  import Keyed from './_Keyed.svelte';
</script>
