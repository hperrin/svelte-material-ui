<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/button</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="button/_Simple.svelte" />

  <Demo component={SecondaryColor} file="button/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={Variants} file="button/_Variants.svelte">Variants</Demo>

  <Demo component={Touch} file="button/_Touch.svelte">
    Increased touch target
  </Demo>

  <Demo component={Icons} file="button/_Icons.svelte">Icons</Demo>

  <Demo component={Link} file="button/_Link.svelte">Link</Demo>

  <Demo component={Groups} file="button/_Groups.svelte">Button groups</Demo>

  <Demo component={SplitButtons} file="button/_SplitButtons.svelte">
    Split buttons using a button group
  </Demo>

  <Demo
    component={Round}
    files={['button/_Round.svelte', 'button/_Round.scss']}
  >
    Creating rounded buttons with Sass mixins
  </Demo>

  <Demo
    component={Notched}
    files={['button/_Notched.svelte', 'button/_Notched.scss']}
  >
    Creating notched buttons with Sass
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Variants from './_Variants.svelte';
  import Touch from './_Touch.svelte';
  import Icons from './_Icons.svelte';
  import Link from './_Link.svelte';
  import Groups from './_Groups.svelte';
  import SplitButtons from './_SplitButtons.svelte';
  import Round from './_Round.svelte';
  import Notched from './_Notched.svelte';
</script>

<style>
  * :global(.mdc-button),
  * :global(.smui-button__group) {
    margin-bottom: 8px;
  }
  * :global(.smui-button__group > .mdc-button),
  * :global(.smui-button__group-item > .mdc-button) {
    margin-bottom: 0;
  }
</style>
