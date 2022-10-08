<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/dialog</pre>

  <h5>Demos</h5>

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
    Selection dialog
  </Demo>

  <Demo component={Sliders} file="dialog/_Sliders.svelte">
    Dialog with sliders
  </Demo>

  <Demo component={LargeScroll} file="dialog/_LargeScroll.svelte">
    Large, scrollable dialog
  </Demo>

  <Demo component={Fullscreen} file="dialog/_Fullscreen.svelte">
    Fullscreen dialog
    <svelte:fragment slot="subtitle">
      Note that dialogs will only be fullscreen on mobile sized screens. On
      desktop sized screens, it will be shown as a modal dialog.
    </svelte:fragment>
  </Demo>

  <Demo component={OverFullscreen} file="dialog/_OverFullscreen.svelte">
    Dialog over fullscreen dialog
    <svelte:fragment slot="subtitle">
      Note that the Material Spec states that the only time a dialog should be
      placed on top of another dialog is a confirmation dialog showing on top of
      a fullscreen dialog.
    </svelte:fragment>
  </Demo>

  <Demo component={Sheet} file="dialog/_Sheet.svelte">
    Floating sheet dialog
    <svelte:fragment slot="subtitle">
      Floating sheets are dialogs with a close icon button. Having the close
      icon button is mutually exclusive with having action bar buttons (e.g.
      cancel and OK buttons). The icon button is absolutely positioned.
    </svelte:fragment>
  </Demo>

  <Demo component={ManyActions} file="dialog/_ManyActions.svelte">
    Too many action buttons for one line
    <svelte:fragment slot="subtitle">
      Actions buttons will stack automatically if the dialog is too narrow. If
      you want them to stack regardless, you can force it.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import DefaultFocus from './_DefaultFocus.svelte';
  import Event from './_Event.svelte';
  import Mandatory from './_Mandatory.svelte';
  import List from './_List.svelte';
  import Selection from './_Selection.svelte';
  import Sliders from './_Sliders.svelte';
  import LargeScroll from './_LargeScroll.svelte';
  import Fullscreen from './_Fullscreen.svelte';
  import OverFullscreen from './_OverFullscreen.svelte';
  import Sheet from './_Sheet.svelte';
  import ManyActions from './_ManyActions.svelte';
</script>
