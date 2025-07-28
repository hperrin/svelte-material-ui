<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <Wrapper>
    <Button touch>
      <Label>X Position: Start</Label>
    </Button>
    <Tooltip xPos="start">
      <Label>Tooltip.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>X Position: Center</Label>
    </Button>
    <!-- Note: "center" is not valid for rich tooltips. -->
    <Tooltip xPos="center">
      <Label>Tooltip.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>X Position: End</Label>
    </Button>
    <Tooltip xPos="end">
      <Label>Tooltip.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>Y Position: Above</Label>
    </Button>
    <Tooltip yPos="above">
      <Label>Tooltip.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>Y Position: Below</Label>
    </Button>
    <Tooltip yPos="below">
      <Label>Tooltip.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Button touch>
      <Label>X Position: Start, Y Position: Above</Label>
    </Button>
    <Tooltip xPos="start" yPos="above">
      <Label>Tooltip.</Label>
    </Tooltip>
  </Wrapper>
</div>

<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button from '@smui/button';
  import { Label } from '@smui/common';
</script>
