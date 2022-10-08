<svelte:head>
  <title>Banner - SMUI</title>
</svelte:head>

<Fixed />

<section>
  <h2>Banner</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/banner</pre>

  <h5>Demos</h5>

  <Demo component="Shown above." file="banner/_Fixed.svelte" />

  <Demo component={General} file="banner/_General.svelte">Banner options</Demo>

  <Demo component={Icon} file="banner/_Icon.svelte">Banner with icon</Demo>

  <Demo component={DisableAutoClose} file="banner/_DisableAutoClose.svelte">
    Disable auto close
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Fixed from './_Fixed.svelte';
  import General from './_General.svelte';
  import Icon from './_Icon.svelte';
  import DisableAutoClose from './_DisableAutoClose.svelte';
</script>

<style>
  * :global(.top-app-bar-container) {
    width: calc(100% - 24px);
    height: 400px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }
</style>
