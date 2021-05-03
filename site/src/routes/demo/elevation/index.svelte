<svelte:head>
  <title>Elevation - SMUI</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <pre class="demo-spaced">npm i -D @material/elevation</pre>

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

<script>
  import Demo from '../../../components/Demo.svelte';
  import Elevation from './_Elevation.svelte';
  import TransitionsAndColor from './_TransitionsAndColor.svelte';
</script>
