<div class="columns margins" style="justify-content: flex-start;">
  <div>
    <Select bind:value label="Select Menu">
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {value}</pre>
  </div>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value = 'Orange';
</script>
