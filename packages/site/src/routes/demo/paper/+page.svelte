<svelte:head>
  <title>Paper - SMUI</title>
</svelte:head>

<section>
  <h2>Paper</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/paper</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="paper/_Simple.svelte" />

  <Demo component={Square} file="paper/_Square.svelte">Square paper</Demo>

  <Demo component={PrimaryColor} file="paper/_PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={SecondaryColor} file="paper/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo
    component={Colored}
    files={['paper/_Colored.svelte', 'paper/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>

  <Demo
    component={ElevationTransition}
    file="paper/_ElevationTransition.svelte"
  >
    Elevation and transition
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Square from './_Square.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Colored from './_Colored.svelte';
  import ElevationTransition from './_ElevationTransition.svelte';
</script>

<style>
  * :global(.paper-container) {
    padding: 24px;
    background-color: var(--mdc-theme-background, #f8f8f8);
  }

  * :global(.smui-paper) {
    margin: 0 auto 24px;
    max-width: 800px;
  }

  * :global(.smui-paper:last-child) {
    margin-bottom: 0;
  }
</style>
