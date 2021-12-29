<div>
  <List
    class="demo-list"
    twoLine
    avatarList
    singleSelection
    bind:selectedIndex={selectionIndex}
  >
    {#each options as item}
      <Item
        on:SMUI:action={() => (selection = item.name)}
        disabled={item.disabled}
        selected={selection === item.name}
      >
        <Graphic
          style="background-image: url(https://place-hold.it/40x40?text={item.name
            .split(' ')
            .map((val) => val.substring(0, 1))
            .join('')}&fontsize=16);"
        />
        <Text>
          <PrimaryText>{item.name}</PrimaryText>
          <SecondaryText>{item.description}</SecondaryText>
        </Text>
        <Meta class="material-icons">info</Meta>
      </Item>
    {/each}
  </List>
</div>

<pre
  class="status">Selected: {selection}, value of selectedIndex: {selectionIndex}</pre>

<script lang="ts">
  import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';

  let options = [
    {
      name: 'Bruce Willis',
      description: 'Actor',
      disabled: false,
    },
    {
      name: 'Austin Powers',
      description: 'Fictional Character',
      disabled: true,
    },
    {
      name: 'Thomas Edison',
      description: 'Inventor',
      disabled: false,
    },
    {
      name: 'Stephen Hawking',
      description: 'Scientist',
      disabled: false,
    },
  ];
  let selection = 'Stephen Hawking';
  // This value is updated when the component is initialized, based on the
  // selected Item's `selected` prop.
  let selectionIndex: number | undefined = undefined;
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
  }
</style>
