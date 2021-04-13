<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select</h2>

  <Showcase />
  <ShowSource file="select/Showcase.svelte" />

  <Standard />
  <ShowSource file="select/Standard.svelte" />

  <Filled />
  <ShowSource file="select/Filled.svelte" />

  <Outlined />
  <ShowSource file="select/Outlined.svelte" />

  <ShapedFilled />
  <ShowSource file="select/ShapedFilled.svelte" />

  <ShapedOutlined />
  <ShowSource file="select/ShapedOutlined.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Showcase from './Showcase.svelte';
  import Standard from './Standard.svelte';
  import Filled from './Filled.svelte';
  import Outlined from './Outlined.svelte';
  import ShapedFilled from './ShapedFilled.svelte';
  import ShapedOutlined from './ShapedOutlined.svelte';
</script>
