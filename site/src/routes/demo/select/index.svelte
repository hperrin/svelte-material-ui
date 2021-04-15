<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select</h2>

  <Demo component={Showcase} file="select/_Showcase.svelte" />

  <Demo component={Standard} file="select/_Standard.svelte">Standard</Demo>

  <Demo component={Filled} file="select/_Filled.svelte">Filled</Demo>

  <Demo component={Outlined} file="select/_Outlined.svelte">Outlined</Demo>

  <Demo component={ShapedFilled} file="select/_ShapedFilled.svelte">
    Shaped Filled
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={ShapedOutlined} file="select/_ShapedOutlined.svelte">
    Shaped Outlined
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={Disabled} file="select/_Disabled.svelte">Disabled</Demo>

  <Demo component={Required} file="select/_Required.svelte">Required</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Showcase from './_Showcase.svelte';
  import Standard from './_Standard.svelte';
  import Filled from './_Filled.svelte';
  import Outlined from './_Outlined.svelte';
  import ShapedFilled from './_ShapedFilled.svelte';
  import ShapedOutlined from './_ShapedOutlined.svelte';
  import Disabled from './_Disabled.svelte';
  import Required from './_Required.svelte';
</script>
