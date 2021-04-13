<svelte:head>
  <title>Slider - SMUI</title>
</svelte:head>

<section>
  <h2>Slider</h2>

  <Simple />
  <ShowSource file="slider/Simple.svelte" />

  <Continuous />
  <ShowSource file="slider/Continuous.svelte" />

  <Discrete />
  <ShowSource file="slider/Discrete.svelte" />

  <TickMarks />
  <ShowSource file="slider/TickMarks.svelte" />

  <Range />
  <ShowSource file="slider/Range.svelte" />

  <Disabled />
  <ShowSource file="slider/Disabled.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Continuous from './Continuous.svelte';
  import Discrete from './Discrete.svelte';
  import TickMarks from './TickMarks.svelte';
  import Range from './Range.svelte';
  import Disabled from './Disabled.svelte';
</script>
