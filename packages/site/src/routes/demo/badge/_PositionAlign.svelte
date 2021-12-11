<div style="margin-top: 2em; text-align: center;">
  <IconButton style="position: relative;">
    <Icon class="material-icons">message</Icon>
    <Badge {position} {align} aria-label="unread count">8</Badge>
  </IconButton>
</div>

<div style="margin-top: 2em;">
  Position:
  {#each positions as pos}
    <FormField>
      <Radio bind:group={position} value={pos} />
      <span slot="label">
        {pos}
      </span>
    </FormField>
  {/each}
</div>

<div style="margin-top: 2em;">
  Alignment:
  {#each alignments as alignment}
    <FormField>
      <Radio bind:group={align} value={alignment} />
      <span slot="label">
        {alignment}
      </span>
    </FormField>
  {/each}
</div>

<script lang="ts">
  import Badge from '@smui-extra/badge';
  import IconButton, { Icon } from '@smui/icon-button';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let position: 'inset' | 'middle' | 'outset' = 'middle';
  let align: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' =
    'top-end';

  const positions = ['inset', 'middle', 'outset'];
  const alignments = ['top-start', 'top-end', 'bottom-start', 'bottom-end'];
</script>
