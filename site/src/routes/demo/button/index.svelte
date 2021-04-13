<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button</h2>

  <RegularButtons />
  <ShowSource file="button/RegularButtons.svelte" />

  <IncreasedTouchTarget />
  <ShowSource file="button/IncreasedTouchTarget.svelte" />

  <SecondaryColor />
  <ShowSource file="button/SecondaryColor.svelte" />

  <Groups />
  <ShowSource file="button/Groups.svelte" />

  <SplitButtons />
  <ShowSource file="button/SplitButtons.svelte" />

  <Round />
  <ShowSource file="button/Round.svelte" />

  <Notched />
  <ShowSource file="button/Notched.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import RegularButtons from './RegularButtons.svelte';
  import IncreasedTouchTarget from './IncreasedTouchTarget.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import Groups from './Groups.svelte';
  import SplitButtons from './SplitButtons.svelte';
  import Round from './Round.svelte';
  import Notched from './Notched.svelte';
</script>
