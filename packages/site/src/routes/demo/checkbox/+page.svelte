<svelte:head>
  <title>Checkbox - SMUI</title>
</svelte:head>

<section>
  <h2>Checkbox</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/checkbox</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="checkbox/_Simple.svelte" />

  <Demo component={Touch} file="checkbox/_Touch.svelte">
    Increased touch target
  </Demo>

  <Demo component={Group} file="checkbox/_Group.svelte">Group checkbox</Demo>

  <Demo component={Indeterminate} file="checkbox/_Indeterminate.svelte">
    Indeterminate
  </Demo>

  <Demo
    component={Colored}
    files={['checkbox/_Colored.svelte', 'checkbox/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Touch from './_Touch.svelte';
  import Group from './_Group.svelte';
  import Indeterminate from './_Indeterminate.svelte';
  import Colored from './_Colored.svelte';
</script>
