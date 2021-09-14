<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++}
    >build</IconButton
  >
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} disabled
    >search</IconButton
  > (disabled)
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} ripple={false}
    >add_shopping_cart</IconButton
  > (no ripple)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import IconButton from '@smui/icon-button';

  let clicked = 0;
</script>
