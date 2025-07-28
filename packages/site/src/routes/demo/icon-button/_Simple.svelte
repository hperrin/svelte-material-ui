<div style="display: flex; align-items: center;">
  <IconButton onclick={() => clicked++}>
    <Icon class="material-icons">build</Icon>
  </IconButton>
</div>
<div style="display: flex; align-items: center;">
  <IconButton onclick={() => clicked++} disabled>
    <Icon class="material-icons">search</Icon>
  </IconButton>&nbsp;(disabled)
</div>
<div style="display: flex; align-items: center;">
  <IconButton onclick={() => clicked++} ripple={false}>
    <Icon class="material-icons">add_shopping_cart</Icon>
  </IconButton>&nbsp;(no ripple)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = $state(0);
</script>
