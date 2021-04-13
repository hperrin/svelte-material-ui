<FormField align="end" style="display: flex;">
  <Slider style="flex-grow: 1;" bind:value />
  <span
    slot="label"
    style="padding-right: 12px; width: max-content; display: block;"
  >
    Amount of Wonder
  </span>
</FormField>

<pre class="status">Value: {value}</pre>

<script>
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let value = 50;
</script>
