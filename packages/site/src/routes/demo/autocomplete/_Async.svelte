<div>
  <Autocomplete
    search={searchItems}
    bind:value
    showMenuWithNoInput={false}
    label="Fruit"
  >
    {#snippet loading()}
      <Text
        style="display: flex; width: 100%; justify-content: center; align-items: center;"
      >
        <CircularProgress style="height: 24px; width: 24px;" indeterminate />
      </Text>
    {/snippet}
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
  let value: string | undefined = $state();

  let counter = 0;

  async function searchItems(input: string) {
    if (input === '') {
      return [];
    }

    if (value != null) {
      // Return an array with just the already selected value to hide the menu.
      // As soon as the user changes the text field, the value is unselected, so
      // the search should run again.
      return [value];
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
