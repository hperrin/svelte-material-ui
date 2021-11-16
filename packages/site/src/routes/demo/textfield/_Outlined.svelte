<div class="columns margins">
  <div>
    <Textfield variant="outlined" bind:value={valueA} label="Label">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueB} label="Leading Icon">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueC} label="Trailing Icon">
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
  <div>
    <Textfield variant="outlined" invalid bind:value={valueD} label="Invalid">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueD}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';

  let valueA = '';
  let valueB = '';
  let valueC = '';
  let valueD = '';
</script>
