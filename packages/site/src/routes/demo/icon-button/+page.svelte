<svelte:head>
  <title>Icon Button - SMUI</title>
</svelte:head>

<section>
  <h2>Icon Button</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/icon-button</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="icon-button/_Simple.svelte" />

  <Demo component={Toggle} file="icon-button/_Toggle.svelte">
    Toggle buttons
  </Demo>

  <Demo component={Svgs} file="icon-button/_Svgs.svelte">Using SVGs</Demo>

  <Demo component={Touch} file="icon-button/_Touch.svelte">
    Increased touch target
  </Demo>

  <Demo component={Sizes} file="icon-button/_Sizes.svelte">
    Different sizes
  </Demo>

  <Demo
    component={Colored}
    files={['icon-button/_Colored.svelte', 'icon-button/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Toggle from './_Toggle.svelte';
  import Svgs from './_Svgs.svelte';
  import Touch from './_Touch.svelte';
  import Sizes from './_Sizes.svelte';
  import Colored from './_Colored.svelte';
</script>
