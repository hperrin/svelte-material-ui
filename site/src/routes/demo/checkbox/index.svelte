<svelte:head>
  <title>Checkbox - SMUI</title>
</svelte:head>

<section>
  <h2>Checkbox</h2>

  <Demo component={Simple} file="checkbox/Simple.svelte" />

  <Demo component={Touch} file="checkbox/Touch.svelte">
    Increased touch target
  </Demo>

  <Demo component={Group} file="checkbox/Group.svelte">Group checkbox</Demo>

  <Demo component={Indeterminate} file="checkbox/Indeterminate.svelte">
    Indeterminate
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Touch from './Touch.svelte';
  import Group from './Group.svelte';
  import Indeterminate from './Indeterminate.svelte';
</script>
