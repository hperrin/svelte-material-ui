<div style="display: flex; align-items: center;">
  <IconButton onclick={() => clicked++} size="normal">
    <Icon tag="svg" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton>&nbsp;(normal = standard icon button size)
</div>
<div style="display: flex; align-items: center;">
  <IconButton onclick={() => clicked++} size="mini">
    <Icon tag="svg" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton>&nbsp;(mini = same size as mini FAB)
</div>
<div style="display: flex; align-items: center;">
  <IconButton onclick={() => clicked++} size="button">
    <Icon tag="svg" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton>&nbsp;(button = same height as button)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import { mdiWrench } from '@mdi/js';
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = $state(0);
</script>
