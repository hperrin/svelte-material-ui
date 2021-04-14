<!-- Check out iframe.svelte too see how these work. -->
<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe"
  title="standard"
  width="480"
  height="320"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe"
  >helper needed for sapper export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=fixed"
  title="fixed"
  width="480"
  height="320"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=dense"
  title="dense"
  width="480"
  height="320"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=prominent"
  title="prominent"
  width="480"
  height="320"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=short"
  title="short"
  width="480"
  height="320"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=short-closed"
  title="short closed"
  width="480"
  height="320"
/>

<style>
  .top-app-bar-iframe {
    max-width: 480px;
    min-width: 480px;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
  }
</style>
