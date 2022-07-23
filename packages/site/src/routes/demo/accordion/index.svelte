<svelte:head>
  <title>Accordion - SMUI</title>
</svelte:head>

<section>
  <h2>Accordion</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui-extra/accordion</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="accordion/_Simple.svelte" />

  <Demo component={Multiple} file="accordion/_Multiple.svelte">
    Multiple
    <svelte:fragment slot="subtitle">
      Allow multiple open panels.
    </svelte:fragment>
  </Demo>

  <Demo
    component={DisabledNonInteractive}
    file="accordion/_DisabledNonInteractive.svelte"
  >
    Disabled and Non-Interactive Panels
  </Demo>

  <Demo component={Description} file="accordion/_Description.svelte">
    Descriptions
  </Demo>

  <Demo component={Icon} file="accordion/_Icon.svelte">Toggle icons</Demo>

  <Demo component={Extend} file="accordion/_Extend.svelte">
    Extending panels
  </Demo>

  <Demo component={PrimaryColor} file="accordion/_PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={SecondaryColor} file="accordion/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={Nested} file="accordion/_Nested.svelte">Nested</Demo>

  <Demo component={PaperProps} file="accordion/_PaperProps.svelte">
    Paper props
    <svelte:fragment slot="subtitle">
      The panels are Paper components, so they can take any property that Paper
      can.
    </svelte:fragment>
  </Demo>

  <Demo component={Complex} file="accordion/_Complex.svelte">
    Complex content
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Multiple from './_Multiple.svelte';
  import DisabledNonInteractive from './_DisabledNonInteractive.svelte';
  import Extend from './_Extend.svelte';
  import Description from './_Description.svelte';
  import Icon from './_Icon.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Nested from './_Nested.svelte';
  import PaperProps from './_PaperProps.svelte';
  import Complex from './_Complex.svelte';
</script>

<style>
  * :global(.accordion-container) {
    padding: 24px;
    background-color: var(--mdc-theme-background, #f8f8f8);
  }

  * :global(.smui-accordion) {
    margin: 0 12px 24px;
  }

  * :global(.smui-accordion:last-child) {
    margin-bottom: 0;
  }
</style>
