<div class="flexy">
  <div class="margins">
    <!--
      I'm using viewBox="2 2 20 20" instead of
      viewBox="0 0 24 24" because the mdiPlus icon
      is particularly small. This embiggens it.
    -->
    <Fab on:click={() => clicked++}>
      <Icon component={Svg} viewBox="2 2 20 20">
        <path fill="currentColor" d={mdiPlus} />
      </Icon>
    </Fab>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Fab, { Icon } from '@smui/fab';
  import { Svg } from '@smui/common/elements';
  import { mdiPlus } from '@mdi/js';

  let clicked = 0;
</script>

<style>
  * :global(svg:focus) {
    outline: 0;
  }
</style>
