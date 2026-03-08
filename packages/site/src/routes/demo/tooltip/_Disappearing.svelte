{#if show}
  <div>
    <Wrapper>
      <Button touch onclick={() => (show = false)}>
        <Label>Click Me to Disappear My Container</Label>
      </Button>
      <Tooltip>
        <Label>I am a tooltip in a container that disappears.</Label>
      </Tooltip>
    </Wrapper>
  </div>
{/if}

<div>
  <Button touch onclick={() => (show = true)}>
    <Label>Click Me to Reset</Label>
  </Button>
</div>

<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button from '@smui/button';
  import { Label } from '@smui/common';

  let show = $state(true);
</script>
