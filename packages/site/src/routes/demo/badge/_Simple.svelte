<div>
  <span style="position: relative;">
    Text with a badge.
    <Badge aria-label="unread count">3</Badge>
  </span>
</div>

<div style="margin-top: 2em;">
  <Button style="position: relative;">
    <Label>Button with a Badge</Label>
    <Badge aria-label="new messages count">7</Badge>
  </Button>
</div>

<div style="margin-top: 1.5em;">
  Icon button with a badge.

  <IconButton style="position: relative;">
    <Icon class="material-icons">message</Icon>
    <Badge aria-label="unread content count">2</Badge>
  </IconButton>
</div>

<div style="margin-top: 1.5em;">
  FAB with a badge.

  <Fab style="position: relative;">
    <Icon class="material-icons">message</Icon>
    <Badge aria-label="unread content count">2</Badge>
  </Fab>
</div>

<div style="margin-top: 1.5em;">
  <!-- Adding some padding makes sure long badges don't cover the content. -->
  <span
    style="position: relative; display: inline-block; padding: .5em .5em 0 0;"
  >
    Long content in a badge.
    <Badge aria-label="notification count">1,000,000</Badge>
  </span>
</div>

<div style="margin-top: 1.5em;">
  <span style="position: relative;">
    No content in a badge.
    <Badge
      aria-label="unread content is available"
      style="min-height: 10px; min-width: 10px; padding: 0;"
    />
  </span>
</div>

<script lang="ts">
  import Badge from '@smui-extra/badge';
  import Button, { Label } from '@smui/button';
  import IconButton from '@smui/icon-button';
  import Fab from '@smui/fab';
  import { Icon } from '@smui/common';
</script>
