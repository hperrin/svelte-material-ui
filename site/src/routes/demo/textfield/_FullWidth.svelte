<div class="margins">
  <Textfield style="width: 100%;" lineRipple={false} bind:value label="Label">
    <HelperText slot="helper">Helper Text</HelperText>
  </Textfield>
</div>

<script>
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text/index';

  let value = '';
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }
</style>
