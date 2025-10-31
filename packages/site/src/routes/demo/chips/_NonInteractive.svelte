<Set chips={['one', 'two', 'three', 'four', 'five']} nonInteractive>
  {#snippet chip(chip)}
    <Chip {chip}>
      <Text>{chip}</Text>
    </Chip>
  {/snippet}
</Set>

<script lang="ts">
  import Chip, { Set, Text } from '@smui/chips';
</script>
