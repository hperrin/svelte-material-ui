<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/switch</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="switch/_Simple.svelte" />

  <Demo component={SecondaryColor} file="switch/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={Group} file="switch/_Group.svelte">Group switch</Demo>

  <Demo component={NoIcons} file="switch/_NoIcons.svelte">
    No icons
    <svelte:fragment slot="subtitle">
      Think about your <a
        href="https://developer.chrome.com/blog/new-in-devtools-83/#vision-deficiencies"
        target="_blank">color</a
      >
      <a
        href="https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector/Simulation"
        target="_blank">blind</a
      > users before you choose this.
    </svelte:fragment>
  </Demo>

  <Demo component={Events} file="switch/_Events.svelte">Events</Demo>

  <Demo
    component={Colored}
    files={['switch/_Colored.svelte', 'switch/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import Group from './_Group.svelte';
  import NoIcons from './_NoIcons.svelte';
  import Events from './_Events.svelte';
  import Colored from './_Colored.svelte';
</script>
