<svelte:head>
  <title>Elevation - SMUI</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <Demo component={Elevation} file="elevation/_Elevation.svelte" />

  <Demo
    component={TransitionsAndColor}
    file="elevation/_TransitionsAndColor.svelte"
  >
    Transitions and color
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Elevation from './_Elevation.svelte';
  import TransitionsAndColor from './_TransitionsAndColor.svelte';
</script>
