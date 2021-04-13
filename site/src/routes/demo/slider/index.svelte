<svelte:head>
  <title>Slider - SMUI</title>
</svelte:head>

<section>
  <h2>Slider</h2>

  <Demo component={Simple} file="slider/Simple.svelte" />

  <Demo component={Continuous} file="slider/Continuous.svelte">Continuous</Demo>

  <Demo component={Discrete} file="slider/Discrete.svelte">
    Discrete with min/max/step
  </Demo>

  <Demo component={TickMarks} file="slider/TickMarks.svelte">
    Adding tick marks to discrete
  </Demo>

  <Demo component={Range} file="slider/Range.svelte">Range slider</Demo>

  <Demo component={Disabled} file="slider/Disabled.svelte">Disabled</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Continuous from './Continuous.svelte';
  import Discrete from './Discrete.svelte';
  import TickMarks from './TickMarks.svelte';
  import Range from './Range.svelte';
  import Disabled from './Disabled.svelte';
</script>
