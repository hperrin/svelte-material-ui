<svelte:head>
  <title>Form Field - SMUI</title>
</svelte:head>

<section>
  <h2>Form Fields</h2>

  <Demo component={Checkbox} file="form-field/Checkbox.svelte">Checkbox</Demo>

  <Demo component={EndAlignment} file="form-field/EndAlignment.svelte">
    End alignment
  </Demo>

  <Demo component={Radio} file="form-field/Radio.svelte">Radio button</Demo>

  <Demo component={Switch} file="form-field/Switch.svelte">Switch</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Checkbox from './Checkbox.svelte';
  import EndAlignment from './EndAlignment.svelte';
  import Radio from './Radio.svelte';
  import Switch from './Switch.svelte';
</script>
