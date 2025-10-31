<div>
  <Wrapper>
    <Button touch>
      <Label>Show Delay: 1s, Hide Delay: 2s</Label>
    </Button>
    <Tooltip showDelay={1000} hideDelay={2000}>I am a delayed tooltip.</Tooltip>
  </Wrapper>
</div>

<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button, { Label } from '@smui/button';
</script>
