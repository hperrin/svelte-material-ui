<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Linear Progress</h2>

  <Demo component={Simple} file="linear-progress/Simple.svelte" />

  <Demo component={Buffered} file="linear-progress/Buffered.svelte">
    Buffered
  </Demo>

  <Demo component={Indeterminate} file="linear-progress/Indeterminate.svelte">
    Indeterminate
  </Demo>

  <Demo component={Colored} file="linear-progress/Colored.svelte">
    Colored (using Sass mixins)
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Buffered from './Buffered.svelte';
  import Indeterminate from './Indeterminate.svelte';
  import Colored from './Colored.svelte';
</script>
