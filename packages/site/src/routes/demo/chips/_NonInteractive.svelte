<Set chips={['one', 'two', 'three', 'four', 'five']} let:chip nonInteractive>
  <Chip {chip}>
    <Text>{chip}</Text>
  </Chip>
</Set>

<script lang="ts">
  import Chip, { Set, Text } from '@smui/chips';
</script>
