<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Image Lists</h2>

  <Simple />
  <ShowSource file="image-list/Simple.svelte" />

  <TextProtection />
  <ShowSource file="image-list/TextProtection.svelte" />

  <Masonry />
  <ShowSource file="image-list/Masonry.svelte" />

  <EnforceAspectRatio />
  <ShowSource file="image-list/EnforceAspectRatio.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import TextProtection from './TextProtection.svelte';
  import Masonry from './Masonry.svelte';
  import EnforceAspectRatio from './EnforceAspectRatio.svelte';
</script>
