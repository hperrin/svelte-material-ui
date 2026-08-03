<ChipSet chips={['one', 'two', 'three', 'four', 'five']} nonInteractive>
  {#snippet chip(chip)}
    <Chip {chip}>
      <Text>{chip}</Text>
    </Chip>
  {/snippet}
</ChipSet>

<script lang="ts">
  import Chip, { ChipSet, Text } from '@smui/chips';
</script>
