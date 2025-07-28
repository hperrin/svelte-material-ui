<div>
  <Wrapper>
    <Button touch>
      <Label>Show Delay: 1s, Hide Delay: 2s</Label>
    </Button>
    <Tooltip showDelay={1000} hideDelay={2000}>
      <Label>I am a delayed tooltip.</Label>
    </Tooltip>
  </Wrapper>
</div>

<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button from '@smui/button';
  import { Label } from '@smui/common';
</script>
