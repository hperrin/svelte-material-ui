<svelte:head>
  <title>Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Lists</h2>

  <Simple />
  <ShowSource file="list/Simple.svelte" />

  <GraphicsDense />
  <ShowSource file="list/GraphicsDense.svelte" />

  <NonInteractive />
  <ShowSource file="list/NonInteractive.svelte" />

  <TwoLineSelection />
  <ShowSource file="list/TwoLineSelection.svelte" />

  <ThreeLine />
  <ShowSource file="list/ThreeLine.svelte" />

  <Groups />
  <ShowSource file="list/Groups.svelte" />

  <Radio />
  <ShowSource file="list/Radio.svelte" />

  <Check />
  <ShowSource file="list/Check.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import GraphicsDense from './GraphicsDense.svelte';
  import NonInteractive from './NonInteractive.svelte';
  import TwoLineSelection from './TwoLineSelection.svelte';
  import ThreeLine from './ThreeLine.svelte';
  import Groups from './Groups.svelte';
  import Radio from './Radio.svelte';
  import Check from './Check.svelte';
</script>
