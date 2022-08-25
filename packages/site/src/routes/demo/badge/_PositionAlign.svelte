<div style="margin-top: 2em; text-align: center;">
  <Button style="position: relative;">
    <Label>Button</Label>
    <Badge {position} {align} aria-label="unread count">8</Badge>
  </Button>
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
  Y Alignment:
  {#each alignmentsY as alignment}
    <FormField>
      <Radio bind:group={alignY} value={alignment} />
      <span slot="label">
        {alignment}
      </span>
    </FormField>
  {/each}
</div>

<div style="margin-top: 2em;">
  X Alignment:
  {#each alignmentsX as alignment}
    <FormField>
      <Radio bind:group={alignX} value={alignment} />
      <span slot="label">
        {alignment}
      </span>
    </FormField>
  {/each}
</div>

<script lang="ts">
  import Badge from '@smui-extra/badge';
  import Button, { Label } from '@smui/button';
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let position: 'inset' | 'middle' | 'outset' = 'middle';
  let alignY: 'top' | 'middle' | 'bottom' = 'top';
  let alignX: 'start' | 'middle' | 'end' = 'end';
  $: align = `${alignY}-${alignX}` as
    | 'top-start'
    | 'top-middle'
    | 'top-end'
    | 'middle-start'
    | 'middle-middle'
    | 'middle-end'
    | 'bottom-start'
    | 'bottom-middle'
    | 'bottom-end';

  const positions = ['inset', 'middle', 'outset'];
  const alignmentsY = ['top', 'middle', 'bottom'];
  const alignmentsX = ['start', 'middle', 'end'];
</script>
