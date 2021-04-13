<svelte:head>
  <title>Icon Button - SMUI</title>
</svelte:head>

<section>
  <h2>Icon Button</h2>

  <Demo component={Simple} file="icon-button/Simple.svelte" />

  <Demo component={Toggle} file="icon-button/Toggle.svelte">
    Toggle buttons
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Toggle from './Toggle.svelte';
</script>
