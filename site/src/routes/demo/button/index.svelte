<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button</h2>

  <Demo component={Simple} file="button/Simple.svelte" />

  <Demo component={Touch} file="button/Touch.svelte">
    Increased touch target
  </Demo>

  <Demo component={SecondaryColor} file="button/SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={Groups} file="button/Groups.svelte">Button groups</Demo>

  <Demo component={SplitButtons} file="button/SplitButtons.svelte">
    Split buttons using a button group
  </Demo>

  <Demo component={Round} file="button/Round.svelte">
    Creating rounded buttons with Sass mixins
  </Demo>

  <Demo component={Notched} file="button/Notched.svelte">
    Creating notched buttons with Sass
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Touch from './Touch.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import Groups from './Groups.svelte';
  import SplitButtons from './SplitButtons.svelte';
  import Round from './Round.svelte';
  import Notched from './Notched.svelte';
</script>
