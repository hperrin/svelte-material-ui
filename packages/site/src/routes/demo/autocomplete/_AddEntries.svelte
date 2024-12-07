<div>
  <Autocomplete
    {options}
    getOptionLabel={(option) =>
      option ? `${option.label} (${option.id})` : ''}
    bind:value
    bind:text
    noMatchesActionDisabled={false}
    onSMUIAutocompleteNoMatchesAction={() => {
      newLabel = text;
      dialogOpen = true;
    }}
    label="Dialog"
  >
    {#snippet noMatches()}
      <Text>Add item</Text>
    {/snippet}
  </Autocomplete>

  <pre class="status">Selected: {value ? JSON.stringify(value) : ''}</pre>

  <Dialog
    bind:open={dialogOpen}
    aria-labelledby="autocomplete-dialog-title"
    aria-describedby="autocomplete-dialog-content"
  >
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <Title id="autocomplete-dialog-title">New Item</Title>
    <Content id="autocomplete-dialog-content">
      <Textfield bind:value={newLabel} label="Label" />
    </Content>
    <Actions>
      <Button>
        <Label>Cancel</Label>
      </Button>
      <Button onclick={addObject}>
        <Label>Add</Label>
      </Button>
    </Actions>
  </Dialog>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';
  import { Text } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Textfield from '@smui/textfield';

  type Item = {
    id: number;
    label: string;
  };

  let dialogOpen = $state(false);
  // When options are objects, you need to wrap them in a $state rune, so that
  // Svelte can compare the objects properly.
  let options: Item[] = $state([
    {
      id: 0,
      label: 'One',
    },
    {
      id: 1,
      label: 'Two',
    },
    {
      id: 2,
      label: 'Three',
    },
    {
      id: 3,
      label: 'Four',
    },
    {
      id: 4,
      label: 'Five',
    },
  ]);
  let newLabel = $state('');

  let value: Item | undefined = $state();
  let text = $state('');

  function addObject() {
    const newObject = {
      id: options[options.length - 1].id + 1,
      label: newLabel,
    };
    options = [...options, newObject];
    value = newObject;
    dialogOpen = false;
  }
</script>
