<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs</h2>

  <Demo component={Simple} file="dialog/Simple.svelte" />

  <Demo component={Event} file="dialog/Event.svelte">
    Using dialog events instead of button clicks, with a default button that is
    initially focused
  </Demo>

  <Demo component={List} file="dialog/List.svelte">
    No actions, and a very long selection list dialog
  </Demo>

  <Demo component={Selection} file="dialog/Selection.svelte">
    A selection dialog
  </Demo>

  <Demo component={Sliders} file="dialog/Sliders.svelte">
    A dialog with sliders
  </Demo>

  <Demo component={LargeScroll} file="dialog/LargeScroll.svelte">
    A large, scrollable dialog
  </Demo>

  <Demo component={ManyActions} file="dialog/ManyActions.svelte">
    Too many action buttons for one line
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Event from './Event.svelte';
  import List from './List.svelte';
  import Selection from './Selection.svelte';
  import Sliders from './Sliders.svelte';
  import LargeScroll from './LargeScroll.svelte';
  import ManyActions from './ManyActions.svelte';
</script>
