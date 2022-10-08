<svelte:head>
  <title>Elevation - SMUI</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @material/elevation@^14.0.0</pre>

  <h5>Demos</h5>

  <Demo
    component={Elevation}
    files={['elevation/_Elevation.svelte', 'elevation/_Elevation.scss']}
  />

  <Demo
    component={TransitionsAndColor}
    files={[
      'elevation/_TransitionsAndColor.svelte',
      'elevation/_TransitionsAndColor.scss',
    ]}
  >
    Transitions and color
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Elevation from './_Elevation.svelte';
  import TransitionsAndColor from './_TransitionsAndColor.svelte';
</script>
