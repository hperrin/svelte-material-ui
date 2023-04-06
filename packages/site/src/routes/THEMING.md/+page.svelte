<svelte:head>
  <title>Theming - SMUI</title>
</svelte:head>

<section class="markdown">
  <Theming />
</section>

<script lang="ts">
  import Theming from '../../../../../THEMING.md';
</script>

<style>
  .markdown :global(pre.highlight) {
    overflow-x: auto;
  }
</style>
