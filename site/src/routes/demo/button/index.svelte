<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button</h2>

  <Simple />
  <ShowSource file="button/Simple.svelte" />

  <Touch />
  <ShowSource file="button/Touch.svelte" />

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
  import Simple from './Simple.svelte';
  import Touch from './Touch.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import Groups from './Groups.svelte';
  import SplitButtons from './SplitButtons.svelte';
  import Round from './Round.svelte';
  import Notched from './Notched.svelte';
</script>
