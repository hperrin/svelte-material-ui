<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch</h2>

  <Demo component={Simple} file="switch/Simple.svelte" />

  <Demo component={PrimaryColor} file="switch/PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={Group} file="switch/Group.svelte">Group switch</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import PrimaryColor from './PrimaryColor.svelte';
  import Group from './Group.svelte';
</script>
