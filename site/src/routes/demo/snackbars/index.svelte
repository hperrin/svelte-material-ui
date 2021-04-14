<svelte:head>
  <title>Snackbars - SMUI</title>
</svelte:head>

<section>
  <h2>Snackbars</h2>

  <Demo component={Simple} file="snackbars/_Simple.svelte" />

  <Demo
    component={LeadingWithAction}
    file="snackbars/_LeadingWithAction.svelte"
  >
    Leading with action
  </Demo>

  <Demo
    component={StackedWithAction}
    file="snackbars/_StackedWithAction.svelte"
  >
    Stacked with action
  </Demo>

  <Demo component={DynamicText} file="snackbars/_DynamicText.svelte">
    Using dynamic text
  </Demo>

  <Demo component={Kitchen} file="snackbars/_Kitchen.svelte">
    The "Kitchen" Snackbar generator
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import LeadingWithAction from './_LeadingWithAction.svelte';
  import StackedWithAction from './_StackedWithAction.svelte';
  import DynamicText from './_DynamicText.svelte';
  import Kitchen from './_Kitchen.svelte';
</script>
