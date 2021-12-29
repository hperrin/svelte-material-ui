<div>
  <List class="demo-list" radioList>
    <Item>
      <Graphic>
        <Radio bind:group={selected} value="Bruce Willis" />
      </Graphic>
      <Label>Bruce Willis</Label>
    </Item>
    <Item>
      <Graphic>
        <Radio bind:group={selected} value="Tom Hanks" />
      </Graphic>
      <Label>Tom Hanks</Label>
    </Item>
    <Item>
      <Graphic>
        <Radio bind:group={selected} value="Jack Nicholson" />
      </Graphic>
      <Label>Jack Nicholson</Label>
    </Item>
    <Item>
      <Graphic>
        <Radio bind:group={selected} value="Leonardo DiCaprio" />
      </Graphic>
      <Label>Leonardo DiCaprio</Label>
    </Item>
    <Item>
      <Graphic>
        <Radio bind:group={selected} value="Matt Damon" />
      </Graphic>
      <Label>Matt Damon</Label>
    </Item>
  </List>
</div>

<pre class="status">Selected: {selected}</pre>

<script lang="ts">
  import List, { Item, Graphic, Label } from '@smui/list';
  import Radio from '@smui/radio';

  let selected = 'Tom Hanks';
</script>

<style>
  * :global(.demo-list) {
    max-width: 300px;
  }
</style>
