<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs</h2>

  <pre class="demo-spaced">npm i -D @smui/dialog</pre>

  <Demo component={Simple} file="dialog/_Simple.svelte" />

  <Demo component={DefaultFocus} file="dialog/_DefaultFocus.svelte">
    Default, initially focused button
  </Demo>

  <Demo component={Event} file="dialog/_Event.svelte">
    Using dialog events instead of button clicks
  </Demo>

  <Demo component={Mandatory} file="dialog/_Mandatory.svelte">
    Mandatory dialog (won't close on scrim click or Esc key)
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
    <svelte:fragment slot="subtitle">
      Actions buttons will stack automatically if the dialog is too narrow. If
      you want them to stack regardless, you can force it.
    </svelte:fragment>
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import DefaultFocus from './_DefaultFocus.svelte';
  import Event from './_Event.svelte';
  import Mandatory from './_Mandatory.svelte';
  import List from './_List.svelte';
  import Selection from './_Selection.svelte';
  import Sliders from './_Sliders.svelte';
  import LargeScroll from './_LargeScroll.svelte';
  import ManyActions from './_ManyActions.svelte';
</script>
