<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch</h2>

  <pre class="demo-spaced">npm i -D @smui/switch</pre>

  <Demo component={Simple} file="switch/_Simple.svelte" />

  <Demo component={PrimaryColor} file="switch/_PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={Group} file="switch/_Group.svelte">Group switch</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import Group from './_Group.svelte';
</script>
