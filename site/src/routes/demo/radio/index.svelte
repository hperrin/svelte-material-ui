<svelte:head>
  <title>Radio - SMUI</title>
</svelte:head>

<section>
  <h2>Radio</h2>

  <pre class="spaced">npm install --save-dev @smui/radio</pre>

  <Demo component={Simple} file="radio/_Simple.svelte" />

  <Demo component={Touch} file="radio/_Touch.svelte">
    Increased touch target
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Touch from './_Touch.svelte';
</script>
