<svelte:head>
  <title>Snackbars - SMUI</title>
</svelte:head>

<section>
  <h2>Snackbars</h2>

  <Demo component={Simple} file="snackbars/Simple.svelte" />

  <Demo component={LeadingWithAction} file="snackbars/LeadingWithAction.svelte">
    Leading with action
  </Demo>

  <Demo component={StackedWithAction} file="snackbars/StackedWithAction.svelte">
    Stacked with action
  </Demo>

  <Demo component={DynamicText} file="snackbars/DynamicText.svelte">
    Using dynamic text
  </Demo>

  <Demo component={Kitchen} file="snackbars/Kitchen.svelte">
    The "Kitchen" Snackbar generator
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import LeadingWithAction from './LeadingWithAction.svelte';
  import StackedWithAction from './StackedWithAction.svelte';
  import DynamicText from './DynamicText.svelte';
  import Kitchen from './Kitchen.svelte';
</script>
