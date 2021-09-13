<div style="display: flex; align-items: center;">
  <IconButton on:click={() => clicked++}>
    <Icon component={Svg} viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiFormatColorFill} />
    </Icon>
  </IconButton>
</div>
<div style="display: flex; align-items: center;">
  <IconButton on:click={() => clicked++} disabled>
    <Icon component={Svg} viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiWrench} />
    </Icon>
  </IconButton> (disabled)
</div>
<div style="display: flex; align-items: center;">
  <IconButton on:click={() => clicked++} ripple={false}>
    <Icon component={Svg} viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiCurrencyUsd} />
    </Icon>
  </IconButton> (no ripple)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import { mdiFormatColorFill, mdiWrench, mdiCurrencyUsd } from '@mdi/js';
  import IconButton, { Icon } from '@smui/icon-button';
  import { Svg } from '@smui/common/elements';

  let clicked = 0;
</script>
