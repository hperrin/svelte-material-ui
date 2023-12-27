<div>
  <Autocomplete
    search={searchItems}
    bind:value
    showMenuWithNoInput={false}
    label="Fruit"
  >
    <Text
      slot="loading"
      style="display: flex; width: 100%; justify-content: center; align-items: center;"
    >
      <CircularProgress style="height: 24px; width: 24px;" indeterminate />
    </Text>
  </Autocomplete>
  <pre class="status">Selected: {value || ''}</pre>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';
  import { Text } from '@smui/list';
  import CircularProgress from '@smui/circular-progress';

  let fruits = [
    'Apple',
    'Orange',
    'Banana',
    'Mango',
    'Lemon',
    'Cherry',
    'Blueberry',
    'Grape',
    'Strawberry',
  ];
  let value: string | undefined = undefined;

  let counter = 0;

  async function searchItems(input: string) {
    if (input === '') {
      return [];
    }

    // Pretend to have some sort of canceling mechanism.
    const myCounter = ++counter;

    // Pretend to be loading something...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // This means the function was called again, so we should cancel.
    if (myCounter !== counter) {
      // `return false` (or, more accurately, resolving the Promise object to
      // `false`) is how you tell Autocomplete to cancel this search. It won't
      // replace the results of any subsequent search that has already finished.
      return false;
    }

    // Return a list of matches.
    return fruits.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase()),
    );
  }
</script>
