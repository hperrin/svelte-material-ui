<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Linear Progress</h2>

  <pre class="demo-spaced">npm i -D @smui/linear-progress</pre>

  <Demo component={Simple} file="linear-progress/_Simple.svelte" />

  <Demo component={Buffered} file="linear-progress/_Buffered.svelte">
    Buffered
  </Demo>

  <Demo component={Indeterminate} file="linear-progress/_Indeterminate.svelte">
    Indeterminate
  </Demo>

  <Demo
    component={Colored}
    files={['linear-progress/_Colored.svelte', 'linear-progress/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Buffered from './_Buffered.svelte';
  import Indeterminate from './_Indeterminate.svelte';
  import Colored from './_Colored.svelte';
</script>
