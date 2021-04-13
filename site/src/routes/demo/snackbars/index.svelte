<svelte:head>
  <title>Snackbars - SMUI</title>
</svelte:head>

<section>
  <h2>Snackbars</h2>

  <Simple />
  <ShowSource file="snackbars/Simple.svelte" />

  <LeadingWithAction />
  <ShowSource file="snackbars/LeadingWithAction.svelte" />

  <StackedWithAction />
  <ShowSource file="snackbars/StackedWithAction.svelte" />

  <DynamicText />
  <ShowSource file="snackbars/DynamicText.svelte" />

  <Kitchen />
  <ShowSource file="snackbars/Kitchen.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Simple from './Simple.svelte';
  import LeadingWithAction from './LeadingWithAction.svelte';
  import StackedWithAction from './StackedWithAction.svelte';
  import DynamicText from './DynamicText.svelte';
  import Kitchen from './Kitchen.svelte';
</script>
