<svelte:head>
  <title>Radio - SMUI</title>
</svelte:head>

<section>
  <h2>Radio</h2>

  <Simple />
  <ShowSource file="radio/Simple.svelte" />

  <Touch />
  <ShowSource file="radio/Touch.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Touch from './Touch.svelte';
</script>
