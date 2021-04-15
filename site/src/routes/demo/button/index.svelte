<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button</h2>

  <pre class="demo-spaced">npm i -D @smui/button</pre>

  <Demo component={Simple} file="button/_Simple.svelte" />

  <Demo component={Touch} file="button/_Touch.svelte">
    Increased touch target
  </Demo>

  <Demo component={SecondaryColor} file="button/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={Groups} file="button/_Groups.svelte">Button groups</Demo>

  <Demo component={SplitButtons} file="button/_SplitButtons.svelte">
    Split buttons using a button group
  </Demo>

  <Demo component={Round} file="button/_Round.svelte" scss="button/_Round.scss">
    Creating rounded buttons with Sass mixins
  </Demo>

  <Demo
    component={Notched}
    file="button/_Notched.svelte"
    scss="button/_Notched.scss"
  >
    Creating notched buttons with Sass
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Touch from './_Touch.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Groups from './_Groups.svelte';
  import SplitButtons from './_SplitButtons.svelte';
  import Round from './_Round.svelte';
  import Notched from './_Notched.svelte';
</script>

<style>
  * :global(.mdc-button, .smui-button__group) {
    margin-bottom: 8px;
  }
  *
    :global(.smui-button__group > .mdc-button, .smui-button__group-item
      > .mdc-button) {
    margin-bottom: 0;
  }
</style>
