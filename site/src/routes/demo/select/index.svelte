<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select</h2>

  <Demo component={Showcase} file="select/Showcase.svelte" />

  <Demo component={Standard} file="select/Standard.svelte">Standard</Demo>

  <Demo component={Filled} file="select/Filled.svelte">Filled</Demo>

  <Demo component={Outlined} file="select/Outlined.svelte">Outlined</Demo>

  <Demo component={ShapedFilled} file="select/ShapedFilled.svelte">
    Shaped Filled
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={ShapedOutlined} file="select/ShapedOutlined.svelte">
    Shaped Outlined
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Showcase from './Showcase.svelte';
  import Standard from './Standard.svelte';
  import Filled from './Filled.svelte';
  import Outlined from './Outlined.svelte';
  import ShapedFilled from './ShapedFilled.svelte';
  import ShapedOutlined from './ShapedOutlined.svelte';
</script>
