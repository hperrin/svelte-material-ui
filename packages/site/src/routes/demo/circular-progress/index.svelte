<svelte:head>
  <title>Circular Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Circular Progress</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/circular-progress</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="circular-progress/_Simple.svelte" />

  <Demo
    component={Indeterminate}
    file="circular-progress/_Indeterminate.svelte"
  >
    Indeterminate
  </Demo>

  <Demo
    component={FourColor}
    files={[
      'circular-progress/_FourColor.svelte',
      'circular-progress/_FourColor.scss',
    ]}
  >
    Four Color
  </Demo>

  <Demo
    component={Colored}
    files={[
      'circular-progress/_Colored.svelte',
      'circular-progress/_Colored.scss',
    ]}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Indeterminate from './_Indeterminate.svelte';
  import FourColor from './_FourColor.svelte';
  import Colored from './_Colored.svelte';
</script>
