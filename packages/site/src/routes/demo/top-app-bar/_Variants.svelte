<!-- Check out iframe/*.svelte too see how these work. -->
<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe/standard"
  title="standard"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe/standard"
  >helper needed for export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe/fixed"
  title="fixed"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe/fixed"
  >helper needed for export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe/dense"
  title="dense"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe/dense"
  >helper needed for export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe/prominent"
  title="prominent"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe/prominent"
  >helper needed for export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe/short"
  title="short"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe/short"
  >helper needed for export</a
>

<iframe
  class="top-app-bar-iframe"
  src="/demo/top-app-bar/iframe/short-closed"
  title="short closed"
/>
<a style="display: none;" href="/demo/top-app-bar/iframe/short-closed"
  >helper needed for export</a
>

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
