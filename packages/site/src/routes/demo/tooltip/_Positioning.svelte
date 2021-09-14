<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <Wrapper>
    <Button touch>
      <Label>X Position: Start</Label>
    </Button>
    <Tooltip xPos="start">Tooltip.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>X Position: Center</Label>
    </Button>
    <!-- Note: "center" is not valid for rich tooltips. -->
    <Tooltip xPos="center">Tooltip.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>X Position: End</Label>
    </Button>
    <Tooltip xPos="end">Tooltip.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>Y Position: Above</Label>
    </Button>
    <Tooltip yPos="above">Tooltip.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>Y Position: Below</Label>
    </Button>
    <Tooltip yPos="below">Tooltip.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>X Position: Start, Y Position: Above</Label>
    </Button>
    <Tooltip xPos="start" yPos="above">Tooltip.</Tooltip>
  </Wrapper>
</div>

<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button, { Label } from '@smui/button';
</script>
