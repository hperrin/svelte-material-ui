<svelte:head>
  <title>Form Field - SMUI</title>
</svelte:head>

<section>
  <h2>Form Fields</h2>

  <Checkbox />
  <ShowSource file="form-field/Checkbox.svelte" />

  <EndAlignment />
  <ShowSource file="form-field/EndAlignment.svelte" />

  <Radio />
  <ShowSource file="form-field/Radio.svelte" />

  <Switch />
  <ShowSource file="form-field/Switch.svelte" />
</section>

<script>
  import ShowSource from '../../../components/ShowSource.svelte';
  import Checkbox from './Checkbox.svelte';
  import EndAlignment from './EndAlignment.svelte';
  import Radio from './Radio.svelte';
  import Switch from './Switch.svelte';
</script>
