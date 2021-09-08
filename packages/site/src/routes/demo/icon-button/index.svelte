<svelte:head>
  <title>Icon Button - SMUI</title>
</svelte:head>

<section>
  <h2>Icon Button</h2>

  <pre class="demo-spaced">npm i -D @smui/icon-button</pre>

  <Demo component={Simple} file="icon-button/_Simple.svelte" />

  <Demo component={Toggle} file="icon-button/_Toggle.svelte">
    Toggle buttons
  </Demo>

  <Demo component={Svgs} file="icon-button/_Svgs.svelte">Using SVGs</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Toggle from './_Toggle.svelte';
  import Svgs from './_Svgs.svelte';
</script>
