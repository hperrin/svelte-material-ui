<svelte:head>
  <title>Slider - SMUI</title>
</svelte:head>

<section>
  <h2>Slider</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/slider</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="slider/_Simple.svelte" />

  <Demo component={Continuous} file="slider/_Continuous.svelte">
    Continuous
  </Demo>

  <Demo component={Discrete} file="slider/_Discrete.svelte">
    Discrete with min/max/step
  </Demo>

  <Demo component={TickMarks} file="slider/_TickMarks.svelte">
    Adding tick marks to discrete
  </Demo>

  <Demo component={Range} file="slider/_Range.svelte">Range slider</Demo>

  <Demo component={MinRange} file="slider/_MinRange.svelte">
    Min range slider
    <svelte:fragment slot="subtitle">
      Limit the range the user can select to a minimum value.
    </svelte:fragment>
  </Demo>

  <Demo component={DiscreteRange} file="slider/_DiscreteRange.svelte">
    Discrete range slider with tick marks
  </Demo>

  <Demo component={Disabled} file="slider/_Disabled.svelte">Disabled</Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Continuous from './_Continuous.svelte';
  import Discrete from './_Discrete.svelte';
  import TickMarks from './_TickMarks.svelte';
  import Range from './_Range.svelte';
  import MinRange from './_MinRange.svelte';
  import DiscreteRange from './_DiscreteRange.svelte';
  import Disabled from './_Disabled.svelte';
</script>
