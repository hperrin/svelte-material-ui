<svelte:head>
  <title>Snackbar - SMUI</title>
</svelte:head>

<section>
  <h2>Snackbar</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/snackbar</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="snackbar/_Simple.svelte" />

  <Demo component={LeadingWithAction} file="snackbar/_LeadingWithAction.svelte">
    Leading with action
  </Demo>

  <Demo component={StackedWithAction} file="snackbar/_StackedWithAction.svelte">
    Stacked with action
  </Demo>

  <Demo component={DynamicText} file="snackbar/_DynamicText.svelte">
    Using dynamic text
  </Demo>

  <Demo
    component={Colors}
    files={['snackbar/_Colors.svelte', 'snackbar/_Colors.scss']}
  >
    Colored snackbars
  </Demo>

  <Demo component={Kitchen} file="snackbar/_Kitchen.svelte">
    The "Kitchen" Snackbar generator
  </Demo>

  <Demo component={KitchenSvg} file="snackbar/_KitchenSvg.svelte">
    Kitchen, with an SVG dismiss button
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import LeadingWithAction from './_LeadingWithAction.svelte';
  import StackedWithAction from './_StackedWithAction.svelte';
  import DynamicText from './_DynamicText.svelte';
  import Colors from './_Colors.svelte';
  import Kitchen from './_Kitchen.svelte';
  import KitchenSvg from './_KitchenSvg.svelte';
</script>
