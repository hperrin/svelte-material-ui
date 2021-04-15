<svelte:head>
  <title>Elevation - SMUI</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <pre class="spaced">npm install --save-dev @material/elevation</pre>

  <Demo
    component={Elevation}
    file="elevation/_Elevation.svelte"
    scss="elevation/_Elevation.scss"
  />

  <Demo
    component={TransitionsAndColor}
    file="elevation/_TransitionsAndColor.svelte"
    scss="elevation/_TransitionsAndColor.scss"
  >
    Transitions and color
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Elevation from './_Elevation.svelte';
  import TransitionsAndColor from './_TransitionsAndColor.svelte';
</script>
