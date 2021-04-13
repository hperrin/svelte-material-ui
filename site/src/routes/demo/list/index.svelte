<svelte:head>
  <title>Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Lists</h2>

  <Demo component={Simple} file="list/Simple.svelte" />

  <Demo component={GraphicsDense} file="list/GraphicsDense.svelte">
    A dense list with graphics
  </Demo>

  <Demo component={NonInteractive} file="list/NonInteractive.svelte">
    A non-interactive list with activated item
  </Demo>

  <Demo component={TwoLineSelection} file="list/TwoLineSelection.svelte">
    A two-line single selection list with avatars, disabled item, and meta
  </Demo>

  <Demo component={ThreeLine} file="list/ThreeLine.svelte">
    A three-line list
  </Demo>

  <Demo component={Groups} file="list/Groups.svelte">A list group</Demo>

  <Demo component={Radio} file="list/Radio.svelte">A radio list</Demo>

  <Demo component={Check} file="list/Check.svelte">
    A check list with trailing checkboxes
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import GraphicsDense from './GraphicsDense.svelte';
  import NonInteractive from './NonInteractive.svelte';
  import TwoLineSelection from './TwoLineSelection.svelte';
  import ThreeLine from './ThreeLine.svelte';
  import Groups from './Groups.svelte';
  import Radio from './Radio.svelte';
  import Check from './Check.svelte';
</script>
