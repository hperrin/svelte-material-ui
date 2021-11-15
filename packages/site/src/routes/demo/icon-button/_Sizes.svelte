<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} size="normal">
    <Icon component={Svg} viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton> (normal = standard icon button size)
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} size="mini">
    <Icon component={Svg} viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton> (mini = same size as mini FAB)
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} size="button">
    <Icon component={Svg} viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton> (button = same height as button)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import { mdiWrench } from '@mdi/js';
  import IconButton, { Icon } from '@smui/icon-button';
  import { Svg } from '@smui/common/elements';

  let clicked = 0;
</script>
