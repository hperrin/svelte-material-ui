<svelte:head>
  <title>Form Field - SMUI</title>
</svelte:head>

<section>
  <h2>Form Fields</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/form-field</pre>

  <h5>Demos</h5>

  <Demo component={Checkbox} file="form-field/_Checkbox.svelte">Checkbox</Demo>

  <Demo component={EndAlignment} file="form-field/_EndAlignment.svelte">
    End alignment
  </Demo>

  <Demo component={Radio} file="form-field/_Radio.svelte">Radio button</Demo>

  <Demo component={Switch} file="form-field/_Switch.svelte">Switch</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Checkbox from './_Checkbox.svelte';
  import EndAlignment from './_EndAlignment.svelte';
  import Radio from './_Radio.svelte';
  import Switch from './_Switch.svelte';
</script>
