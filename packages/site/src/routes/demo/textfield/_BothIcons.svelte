<div class="columns margins">
  <div>
    <Textfield bind:value={valueA} label="Standard">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="filled" bind:value={valueB} label="Filled">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueC} label="Outlined">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  let valueA = '';
  let valueB = '';
  let valueC = '';
</script>
