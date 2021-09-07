<!-- Check out iframe.svelte too see how these work. -->
<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe"
  title="standard"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe"
  >helper needed for sapper export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=fixed"
  title="fixed"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=dense"
  title="dense"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=prominent"
  title="prominent"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=short"
  title="short"
/>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe?style=short-closed"
  title="short closed"
/>

<style>
  .top-app-bar-iframe {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
  }

  @media (max-width: 480px) {
    .top-app-bar-iframe {
      margin-right: 0;
    }
  }
</style>
