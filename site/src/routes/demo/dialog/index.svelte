<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs</h2>

  <Simple />
  <ShowSource file="dialog/Simple.svelte" />

  <Event />
  <ShowSource file="dialog/Event.svelte" />

  <List />
  <ShowSource file="dialog/List.svelte" />

  <Selection />
  <ShowSource file="dialog/Selection.svelte" />

  <Sliders />
  <ShowSource file="dialog/Sliders.svelte" />

  <LargeScroll />
  <ShowSource file="dialog/LargeScroll.svelte" />

  <ManyActions />
  <ShowSource file="dialog/ManyActions.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import Event from './Event.svelte';
  import List from './List.svelte';
  import Selection from './Selection.svelte';
  import Sliders from './Sliders.svelte';
  import LargeScroll from './LargeScroll.svelte';
  import ManyActions from './ManyActions.svelte';
</script>
