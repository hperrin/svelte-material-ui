<section>
  <h2>Lists</h2>

  <div>
    A simple list:
    <List class="demo-list">
      <Item on:SMUI:action={() => clickedSimple = 'Cut'}><span use:Text>Cut</span></Item>
      <Item on:SMUI:action={() => clickedSimple = 'Copy'}><span use:Text>Copy</span></Item>
      <Item on:SMUI:action={() => clickedSimple = 'Paste'}><span use:Text>Paste</span></Item>
      <Separator />
      <Item on:SMUI:action={() => clickedSimple = 'Delete'}><span use:Text>Delete</span></Item>
    </List>
  </div>

  <div class="status">Clicked: {clickedSimple}</div>

  <div>
    A dense list with graphics:
    <List class="demo-list" dense>
      <Item on:SMUI:action={() => clickedDense = 'Edit'}>
        <span use:Graphic class="material-icons">edit</span>
        <span use:Text>Edit</span>
      </Item>
      <Item on:SMUI:action={() => clickedDense = 'Send'}>
        <span use:Graphic class="material-icons">send</span>
        <span use:Text>Send</span>
      </Item>
      <Item on:SMUI:action={() => clickedDense = 'Archive'}>
        <span use:Graphic class="material-icons">archive</span>
        <span use:Text>Archive</span>
      </Item>
      <Separator />
      <Item on:SMUI:action={() => clickedDense = 'Delete'}>
        <span use:Graphic class="material-icons">clear</span>
        <span use:Text>Delete</span>
      </Item>
    </List>
  </div>

  <div class="status">Clicked: {clickedDense}</div>

  <div>
    A non-interactive list with activated item:
    <List class="demo-list" nonInteractive>
      <Item ripple={false}><span use:Text>Thing 1</span></Item>
      <Separator />
      <Item ripple={false} activated><span use:Text>Thing 2</span></Item>
      <Item ripple={false}><span use:Text>Thing 3</span></Item>
      <Separator />
      <Item ripple={false}><span use:Text>Thing 4</span></Item>
    </List>
  </div>

  <div>
    A two-line single selection list with disabled item and meta:
    <List class="demo-list" twoLine singleSelection bind:selectedIndex={selectionIndex}>
      {#each optionsTwoLine as item}
        <Item on:SMUI:action={() => selectionTwoLine = item.name} disabled={item.disabled} selected={selectionTwoLine === item.name}>
          <span use:Text>
            <span use:Text={'primary'}>{item.name}</span>
            <span use:Text={'secondary'}>{item.description}</span>
          </span>
          <span use:Meta class="material-icons">info</span>
        </Item>
      {/each}
    </List>
  </div>

  <div class="status">Selected: {selectionTwoLine}, value of selectedIndex: {selectionIndex}</div>

  <div>
    A list group:
    <Group>
      <h3 use:Subheader>Actors</h3>
      <List class="demo-list">
        <Item on:SMUI:action={() => clickedGroup = 'Bruce Willis'}>
          <span use:Text>Bruce Willis</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'Tom Hanks'}>
          <span use:Text>Tom Hanks</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'Jack Nicholson'}>
          <span use:Text>Jack Nicholson</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'Leonardo DiCaprio'}>
          <span use:Text>Leonardo DiCaprio</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'Matt Damon'}>
          <span use:Text>Matt Damon</span>
        </Item>
      </List>
      <h3 use:Subheader>Books</h3>
      <List class="demo-list">
        <Item on:SMUI:action={() => clickedGroup = 'To Kill a Mockingbird'}>
          <span use:Text>To Kill a Mockingbird</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'The Great Gatsby'}>
          <span use:Text>The Great Gatsby</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = '1984'}>
          <span use:Text>1984</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'Catch-22'}>
          <span use:Text>Catch-22</span>
        </Item>
        <Item on:SMUI:action={() => clickedGroup = 'Alice\'s Adventures in Wonderland'}>
          <span use:Text>Alice's Adventures in Wonderland</span>
        </Item>
      </List>
    </Group>
  </div>

  <div class="status">Clicked: {clickedGroup}</div>

  <div>
    A radio list:
    <List class="demo-list" radiolist>
      <Item>
        <Radio use={[Graphic]} bind:group={selectedRadio} value="Bruce Willis" />
        <Label>Bruce Willis</Label>
      </Item>
      <Item>
        <Radio use={[Graphic]} bind:group={selectedRadio} value="Tom Hanks" />
        <Label>Tom Hanks</Label>
      </Item>
      <Item>
        <Radio use={[Graphic]} bind:group={selectedRadio} value="Jack Nicholson" />
        <Label>Jack Nicholson</Label>
      </Item>
      <Item>
        <Radio use={[Graphic]} bind:group={selectedRadio} value="Leonardo DiCaprio" />
        <Label>Leonardo DiCaprio</Label>
      </Item>
      <Item>
        <Radio use={[Graphic]} bind:group={selectedRadio} value="Matt Damon" />
        <Label>Matt Damon</Label>
      </Item>
    </List>
  </div>

  <div class="status">Selected: {selectedRadio}</div>

  <div>
    A check list with trailing checkboxes:
    <List class="demo-list" checklist>
      <Item>
        <Label>Bruce Willis</Label>
        <Checkbox use={[Meta]} bind:group={selectedCheckbox} value="Bruce Willis" />
      </Item>
      <Item>
        <Label>Tom Hanks</Label>
        <Checkbox use={[Meta]} bind:group={selectedCheckbox} value="Tom Hanks" />
      </Item>
      <Item>
        <Label>Jack Nicholson</Label>
        <Checkbox use={[Meta]} bind:group={selectedCheckbox} value="Jack Nicholson" />
      </Item>
      <Item>
        <Label>Leonardo DiCaprio</Label>
        <Checkbox use={[Meta]} bind:group={selectedCheckbox} value="Leonardo DiCaprio" />
      </Item>
      <Item>
        <Label>Matt Damon</Label>
        <Checkbox use={[Meta]} bind:group={selectedCheckbox} value="Matt Damon" />
      </Item>
    </List>
  </div>

  <div class="status">Selected: {selectedCheckbox.join(', ')}</div>
</section>

<script>
  import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text} from 'svelte-material-ui/components/list';
  import Radio from 'svelte-material-ui/components/radio';
  import Checkbox from 'svelte-material-ui/components/checkbox';

  let clickedSimple = 'nothing yet';
  let clickedDense = 'nothing yet';
  let optionsTwoLine = [
    {
      name: 'Bruce Willis',
      description: 'Actor',
      disabled: false
    },
    {
      name: 'Austin Powers',
      description: 'Fictional Character',
      disabled: true
    },
    {
      name: 'Thomas Edison',
      description: 'Inventor',
      disabled: false
    },
    {
      name: 'Stephen Hawking',
      description: 'Scientist',
      disabled: false
    }
  ];
  let selectionTwoLine = 'Stephen Hawking';
  // This value is updated when the component is initialized, based on the
  // selected Item's `selected` prop.
  let selectionIndex = null;
  let clickedGroup = 'nothing yet';
  let selectedRadio = 'Tom Hanks';
  let selectedCheckbox = ['Tom Hanks'];
</script>

<style lang="scss">
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid rgba(0,0,0,.1);
  }
</style>