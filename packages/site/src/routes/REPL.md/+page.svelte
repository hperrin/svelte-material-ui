<svelte:head>
  <title>REPL - SMUI</title>
</svelte:head>

<section class="markdown">
  <Repl />
</section>

<script lang="ts">
  import Repl from '../../../../../REPL.md';
</script>

<style>
  .markdown :global(pre.highlight) {
    overflow-x: auto;
  }
</style>
