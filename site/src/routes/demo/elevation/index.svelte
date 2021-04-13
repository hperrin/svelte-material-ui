<svelte:head>
  <title>Elevation - SMUI</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <Demo component={Elevation} file="elevation/Elevation.svelte" />

  <Demo
    component={TransitionsAndColor}
    file="elevation/TransitionsAndColor.svelte"
  >
    Transitions and color
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Elevation from './Elevation.svelte';
  import TransitionsAndColor from './TransitionsAndColor.svelte';
</script>
