<svelte:head>
  <title>Autocomplete - SMUI</title>
</svelte:head>

<section>
  <h2>Autocomplete</h2>

  <div>
    <div class="columns margins">
      <div>
        Default:<br />
        <Autocomplete
          options={fruits}
          bind:value={valueSimple}
          label="Fruit"
          class="demo-autocomplete-width"
        />
        <pre class="status">Selected: {valueSimple || ''}</pre>
      </div>

      <div>
        Freesolo:<br />
        <Autocomplete
          freeSolo={true}
          options={fruits}
          bind:value={valueFreesolo}
          label="Fruit"
          class="demo-autocomplete-width"
        />
        <pre class="status">Selected: {valueFreesolo || ''}</pre>
      </div>

      <div>
        Prefilled:<br />
        <Autocomplete
          options={fruits}
          bind:value={valuePrefilled}
          label="Fruit"
          class="demo-autocomplete-width"
        />
        <pre class="status">Selected: {valuePrefilled || ''}</pre>
      </div>

      <div>
        Objects:<br />
        <Autocomplete
          options={objects}
          getOptionLabel={(option) => `${option.label} (${option.id})`}
          bind:value={valueObjects}
          label="Objects"
          class="demo-autocomplete-width"
        />

        <pre class="status">Selected: {valueObjects
            ? JSON.stringify(valueObjects)
            : ''}</pre>
      </div>

      <div>
        Dialog:<br />
        <Autocomplete
          options={objectsDialog}
          getOptionLabel={(option) => `${option.label} (${option.id})`}
          bind:value={valueDialog}
          on:no-matches-action={() => dialog.open()}
          label="Dialog"
          class="demo-autocomplete-width"
        >
          <div slot="no-matches">
            <Text>Add object</Text>
          </div>
        </Autocomplete>

        <pre class="status">Selected: {valueDialog
            ? JSON.stringify(valueDialog)
            : ''}</pre>

        <Dialog
          bind:this={dialog}
          aria-labelledby="simple-title"
          aria-describedby="simple-content"
        >
          <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
          <Title id="simple-title">New object</Title>
          <form on:submit|preventDefault={addObject}>
            <Content id="simple-content">
              <Textfield bind:value={newLabel} label="Label" />
            </Content>
            <Actions>
              <Button type="button">
                <Label>Cancel</Label>
              </Button>
              <Button type="submit">
                <Label>Add</Label>
              </Button>
            </Actions>
          </form>
        </Dialog>
      </div>
    </div>
  </div>

  <div>
    <div class="columns margins">
      <div>
        Standard:<br />
        <Autocomplete
          options={fruits}
          bind:value={valueStandard}
          label="Fruit"
          class="demo-autocomplete-width"
        />

        <pre class="status">Selected: {valueStandard || ''}</pre>
      </div>

      <div>
        Filled:<br />
        <Autocomplete
          options={fruits}
          variant="filled"
          bind:value={valueFilled}
          label="Fruit"
          class="demo-autocomplete-width"
        />

        <pre class="status">Selected: {valueFilled || ''}</pre>
      </div>

      <div>
        Outlined:<br />
        <Autocomplete
          options={fruits}
          variant="outlined"
          bind:value={valueOutlined}
          label="Fruit"
          class="demo-autocomplete-width"
        />

        <pre class="status">Selected: {valueOutlined || ''}</pre>
      </div>
    </div>
  </div>

  <div>
    Manual setup:
    <div class="columns margins">
      <div>
        <Autocomplete
          options={fruits}
          bind:value={valueManualStandard}
          bind:text={textManualStandard}
          class="demo-autocomplete-width"
        >
          <Textfield>
            <Input
              bind:value={textManualStandard}
              id="input-manual-a"
              aria-controls="helper-text-manual-a"
              aria-describedby="helper-text-manual-a"
            />
            <FloatingLabel for="input-manual-a">Standard</FloatingLabel>
            <LineRipple />
          </Textfield>
        </Autocomplete>

        <pre class="status">Selected: {valueManualStandard || ''}</pre>
      </div>

      <div>
        <Autocomplete
          options={fruits}
          bind:value={valueManualFilled}
          bind:text={textManualFilled}
          class="demo-autocomplete-width"
        >
          <Textfield variant="filled">
            <Input
              bind:value={textManualFilled}
              id="input-manual-b"
              aria-controls="helper-text-manual-b"
              aria-describedby="helper-text-manual-b"
            />
            <FloatingLabel for="input-manual-b">Filled</FloatingLabel>
            <LineRipple />
          </Textfield>
        </Autocomplete>

        <pre class="status">Selected: {valueManualFilled || ''}</pre>
      </div>

      <div>
        <Autocomplete
          options={fruits}
          bind:value={valueManualOutlined}
          bind:text={textManualOutlined}
          class="demo-autocomplete-width"
        >
          <Textfield variant="outlined">
            <Input
              bind:value={textManualOutlined}
              id="input-manual-c"
              aria-controls="helper-text-manual-c"
              aria-describedby="helper-text-manual-c"
            />
            <NotchedOutline>
              <FloatingLabel for="input-manual-c">Outlined</FloatingLabel>
            </NotchedOutline>
          </Textfield>
        </Autocomplete>

        <pre class="status">Selected: {valueManualOutlined || ''}</pre>
      </div>
    </div>
  </div>
</section>

<script>
  import Autocomplete from '@smui-extra/autocomplete';
  import { Text } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Textfield, { Input } from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let objects = [
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
  ];

  let dialog;
  let objectsDialog = [
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
  ];
  let newLabel = '';

  let valueSimple;
  let valueFreesolo;
  let valuePrefilled = 'Orange';
  let valueStandard;
  let valueFilled;
  let valueOutlined;
  let valueObjects;
  let valueDialog;
  let valueManualStandard;
  let textManualStandard;
  let valueManualFilled;
  let textManualFilled;
  let valueManualOutlined;
  let textManualOutlined;

  function addObject() {
    const newObject = {
      id: objectsDialog[objectsDialog.length - 1].id + 1,
      label: newLabel,
    };
    objectsDialog = [...objectsDialog, newObject];
    newLabel = '';
    valueDialog = newObject;
  }
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .columns > * {
    margin-left: 12px;
  }
  .columns > *:first-child {
    margin-left: 0;
  }

  * :global(.demo-autocomplete-width) {
    min-width: 200px;
  }

  * :global(.shaped) {
    border-radius: 16px 16px 0 0;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>
