<div>
  <List
    class="demo-list"
    bind:this={list}
    twoLine
    avatarList
    singleSelection
    selectedIndex={selectionIndex}
  >
    {#each options as item, i}
      <Item
        on:SMUI:action={() => (selectionIndex = i)}
        disabled={item.disabled}
        selected={selectionIndex === i}
      >
        <Graphic
          style="background-image: url(https://placehold.co/40x40?text={item.name
            .split(' ')
            .map((val) => val.substring(0, 1))
            .join('')});"
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

<pre class="status">Selected: {selectionIndex} - {options[selectionIndex]
    .name}</pre>

<div style="margin-top: 1em;">
  <div>Programmatically select:</div>
  {#each options as option, i}
    <Button on:click={() => (selectionIndex = i)}>
      <Label>{option.name}</Label>
    </Button>
  {/each}
</div>

<div style="margin-top: 1em;">
  <div>Programmatically focus:</div>
  {#each options as option, i}
    <Button on:click={() => list.focusItemAtIndex(i)}>
      <Label>{option.name}</Label>
    </Button>
  {/each}
</div>

<script lang="ts">
  import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';
  import Button, { Label } from '@smui/button';

  let list: List;

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
  let selectionIndex = 3;
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
  }
</style>
