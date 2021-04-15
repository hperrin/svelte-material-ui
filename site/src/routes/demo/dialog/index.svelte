<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs</h2>

  <pre class="demo-spaced">npm i -D @smui/dialog</pre>

  <Demo component={Simple} file="dialog/_Simple.svelte" />

  <Demo component={Event} file="dialog/_Event.svelte">
    Using dialog events instead of button clicks, with a default button that is
    initially focused
  </Demo>

  <Demo component={List} file="dialog/_List.svelte">
    No actions, and a very long selection list dialog
  </Demo>

  <Demo component={Selection} file="dialog/_Selection.svelte">
    A selection dialog
  </Demo>

  <Demo component={Sliders} file="dialog/_Sliders.svelte">
    A dialog with sliders
  </Demo>

  <Demo component={LargeScroll} file="dialog/_LargeScroll.svelte">
    A large, scrollable dialog
  </Demo>

  <Demo component={ManyActions} file="dialog/_ManyActions.svelte">
    Too many action buttons for one line
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Event from './_Event.svelte';
  import List from './_List.svelte';
  import Selection from './_Selection.svelte';
  import Sliders from './_Sliders.svelte';
  import LargeScroll from './_LargeScroll.svelte';
  import ManyActions from './_ManyActions.svelte';
</script>
