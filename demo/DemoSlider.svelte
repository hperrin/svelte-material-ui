<section>
  <h2>Slider</h2>

  <div>
    <FormField alignEnd style="display: flex;">
      <div slot="input" style="flex-grow: 1;">
        <Slider bind:value />
      </div>
      <span slot="label" style="margin-right: 18px;">Amount of Wonder</span>
    </FormField>
  </div>

  <div class="status">Value: {value}</div>

  <div>
    Discrete with min/max/step:

    <Slider bind:value={value2} min={-10} max={10} step={2} discrete />
  </div>

  <div>
    Discrete with min/max/step and tick marks:

    <Slider bind:value={value3} min={-10} max={10} step={2} discrete displayMarkers />
  </div>
</section>

<script>
  import Slider from '../components/slider';
  import FormField from '../components/form-field';

  let value = 50;
  let value2 = 0;
  let value3 = 0;
</script>