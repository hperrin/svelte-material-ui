<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" onclick={() => clicked++}>build</IconButton
  >
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" onclick={() => clicked++} disabled
    >search</IconButton
  >&nbsp;(disabled)
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" onclick={() => clicked++} ripple={false}
    >add_shopping_cart</IconButton
  >&nbsp;(no ripple)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import IconButton from '@smui/icon-button';

  let clicked = $state(0);
</script>
