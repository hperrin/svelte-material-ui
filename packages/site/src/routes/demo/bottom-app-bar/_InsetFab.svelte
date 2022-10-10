<!-- Check out iframe/*.svelte too see how these work. -->
<iframe
  class="bottom-app-bar-iframe"
  src="/demo/bottom-app-bar/iframe/inset-fab"
  title="inset-fab"
/>
<a style="display: none;" href="/demo/bottom-app-bar/iframe/inset-fab"
  >helper needed for export</a
>

<iframe
  class="bottom-app-bar-iframe"
  src="/demo/bottom-app-bar/iframe/inset-fab-right"
  title="inset-fab-right"
/>
<a style="display: none;" href="/demo/bottom-app-bar/iframe/inset-fab-right"
  >helper needed for export</a
>

<style>
  .bottom-app-bar-iframe {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
  }

  @media (max-width: 480px) {
    .bottom-app-bar-iframe {
      margin-right: 0;
    }
  }
</style>
