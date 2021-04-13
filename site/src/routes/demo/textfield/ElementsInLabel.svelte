<h6 class="demo-title">Elements in the Label</h6>

<div class="margins">
  <Textfield bind:value={valueElementsLabel} type="email">
    <svelte:fragment slot="label">
      <CommonIcon
        class="material-icons"
        style="font-size: 1em; line-height: normal; vertical-align: top;"
        >email</CommonIcon
      > Email
    </svelte:fragment>
  </Textfield>
</div>

<script>
  import Textfield from '@smui/textfield';
  import { Icon as CommonIcon } from '@smui/common';

  let valueElementsLabel = '';
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }
</style>
