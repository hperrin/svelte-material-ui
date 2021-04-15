<svelte:head>
  <title>Circular Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Circular Progress</h2>

  <pre class="demo-spaced">npm install --save-dev @smui/circular-progress</pre>

  <Demo component={Simple} file="circular-progress/_Simple.svelte" />

  <Demo
    component={Indeterminate}
    file="circular-progress/_Indeterminate.svelte"
  >
    Indeterminate
  </Demo>

  <Demo
    component={FourColor}
    file="circular-progress/_FourColor.svelte"
    scss="circular-progress/_FourColor.scss"
  >
    Four Color
  </Demo>

  <Demo
    component={Colored}
    file="circular-progress/_Colored.svelte"
    scss="circular-progress/_Colored.scss"
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Indeterminate from './_Indeterminate.svelte';
  import FourColor from './_FourColor.svelte';
  import Colored from './_Colored.svelte';
</script>
