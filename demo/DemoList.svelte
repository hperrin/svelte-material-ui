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
    A dense list:
    <List class="demo-list" dense>
      <Item on:SMUI:action={() => clickedDense = 'Cut'}><span use:Text>Cut</span></Item>
      <Item on:SMUI:action={() => clickedDense = 'Copy'}><span use:Text>Copy</span></Item>
      <Item on:SMUI:action={() => clickedDense = 'Paste'}><span use:Text>Paste</span></Item>
      <Separator />
      <Item on:SMUI:action={() => clickedDense = 'Delete'}><span use:Text>Delete</span></Item>
    </List>
  </div>

  <div class="status">Clicked: {clickedDense}</div>

  <div>
    A non-interactive list with activated item:
    <List class="demo-list" nonInteractive>
      <Item ripple={false} nonInteractive><span use:Text>Thing 1</span></Item>
      <Separator />
      <Item ripple={false} nonInteractive activated><span use:Text>Thing 2</span></Item>
      <Item ripple={false} nonInteractive><span use:Text>Thing 3</span></Item>
      <Separator />
      <Item ripple={false} nonInteractive><span use:Text>Thing 4</span></Item>
    </List>
  </div>

  <div>
    A two-line list with disabled item:
    <List class="demo-list" twoLine>
      <Item on:SMUI:action={() => clickedTwoline = 'Bruce Willis'}>
        <span use:Text>
          <span use:Text={'primary'}>Bruce Willis</span>
          <span use:Text={'secondary'}>Actor</span>
        </span>
      </Item>
      <Item disabled>
        <span use:Text>
          <span use:Text={'primary'}>Austin Powers</span>
          <span use:Text={'secondary'}>Fictional Character</span>
        </span>
      </Item>
      <Item on:SMUI:action={() => clickedTwoline = 'Thomas Edison'}>
        <span use:Text>
          <span use:Text={'primary'}>Thomas Edison</span>
          <span use:Text={'secondary'}>Inventor</span>
        </span>
      </Item>
      <Item on:SMUI:action={() => clickedTwoline = 'Stephen Hawking'}>
        <span use:Text>
          <span use:Text={'primary'}>Stephen Hawking</span>
          <span use:Text={'secondary'}>Scientist</span>
        </span>
      </Item>
    </List>
  </div>

  <div class="status">Clicked: {clickedTwoline}</div>

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
</section>

<script>
  import List, {Group, Item, Separator, Subheader, Text} from '../components/list';

  let clickedSimple = 'nothing yet';
  let clickedDense = 'nothing yet';
  let clickedTwoline = 'nothing yet';
  let clickedGroup = 'nothing yet';
</script>

<style lang="scss">
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid rgba(0,0,0,.1);
  }
</style>