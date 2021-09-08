<!-- Check out iframe.svelte too see how these work. -->
<iframe
  class="data-table-iframe"
  src="/demo/data-table/iframe"
  title="standard"
/>
<a style="display: none;" href="/demo/data-table/iframe"
  >helper needed for sapper export</a
>

<style>
  .data-table-iframe {
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
</style>
