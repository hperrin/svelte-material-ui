<svelte:head>
  <title>Touch Target - SMUI</title>
</svelte:head>

<section>
  <h2>Touch Target</h2>

  <pre class="demo-spaced">npm i -D @smui/touch-target</pre>

  <Demo component={Simple} file="touch-target/_Simple.svelte">
    Touch Target Wrapper
    <svelte:fragment slot="subtitle">
      These interactive components all have increased touch targets, and they
      won't overlap because of the touch target wrapper.
    </svelte:fragment>
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
</script>
