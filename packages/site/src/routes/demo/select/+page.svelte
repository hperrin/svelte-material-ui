<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/select</pre>

  <h5>Demos</h5>

  <Demo component={Showcase} file="select/_Showcase.svelte" />

  <Demo component={Keys} file="select/_Keys.svelte">
    Using Keys
    <svelte:fragment slot="subtitle">
      If your options aren't strings, you must provide a <code>key</code> function
      that converts them to unique strings, or the label may misbehave.
    </svelte:fragment>
  </Demo>

  <Demo component={Forms} file="select/_Forms.svelte">
    Using Forms
    <svelte:fragment slot="subtitle">
      If you put a <code>Select</code> in a <code>&lt;form&gt;</code>, you have
      to add the <code>hiddenInput</code> and <code>input$name</code> props to have
      it sent with the rest of the inputs.
    </svelte:fragment>
  </Demo>

  <Demo component={Invalid} file="select/_Invalid.svelte">
    Dynamic Invalid State
  </Demo>

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

  <Demo component={Required} file="select/_Required.svelte">Required</Demo>

  <Demo component={Disabled} file="select/_Disabled.svelte">Disabled</Demo>

  <Demo component={ConditionalIcon} file="select/_ConditionalIcon.svelte">
    Conditional icon
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Showcase from './_Showcase.svelte';
  import Keys from './_Keys.svelte';
  import Forms from './_Forms.svelte';
  import Invalid from './_Invalid.svelte';
  import Standard from './_Standard.svelte';
  import Filled from './_Filled.svelte';
  import Outlined from './_Outlined.svelte';
  import ShapedFilled from './_ShapedFilled.svelte';
  import ShapedOutlined from './_ShapedOutlined.svelte';
  import Required from './_Required.svelte';
  import Disabled from './_Disabled.svelte';
  import ConditionalIcon from './_ConditionalIcon.svelte';
</script>

<style>
  * :global(.margins) {
    margin: 18px 0 24px;
  }

  * :global(.columns) {
    display: flex;
    flex-wrap: wrap;
  }

  * :global(.columns > *) {
    flex-basis: 0;
    min-width: 245px;
    margin-right: 12px;
  }
  * :global(.columns > *:last-child) {
    margin-right: 0;
  }
</style>
