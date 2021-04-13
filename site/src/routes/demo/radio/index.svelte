<svelte:head>
  <title>Radio - SMUI</title>
</svelte:head>

<section>
  <h2>Radio</h2>

  <Demo component={Simple} file="radio/Simple.svelte" />

  <Demo component={Touch} file="radio/Touch.svelte">
    Increased touch target
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Touch from './Touch.svelte';
</script>
