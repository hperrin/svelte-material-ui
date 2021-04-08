<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips</h2>

  <div>
    <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>
      <Chip {chip} shouldRemoveOnTrailingIconClick={false}>
        {#if chip === 'four'}
          <LeadingIcon class="material-icons">book</LeadingIcon>
        {/if}
        <Text tabindex="-1">{chip}</Text>
        {#if chip === 'five'}
          <TrailingIcon class="material-icons">commute</TrailingIcon>
        {/if}
      </Chip>
    </Set>
  </div>

  <div>
    <h6 class="demo-title">Choice chips</h6>
    <Set
      chips={['Morning', 'Afternoon', 'Evening', 'Night']}
      let:chip
      choice
      bind:selected={choice}
    >
      <Chip {chip}><Text>{chip}</Text></Chip>
    </Set>
  </div>

  <div>
    <h6 class="demo-title">Programmatically select</h6>
    <Button on:click={() => (choice = 'Morning')}><Label>Morning</Label></Button
    >
    <Button on:click={() => (choice = 'Afternoon')}
      ><Label>Afternoon</Label></Button
    >
    <Button on:click={() => (choice = 'Evening')}><Label>Evening</Label></Button
    >
    <Button on:click={() => (choice = 'Night')}><Label>Night</Label></Button>
  </div>

  <pre class="status">Selected: {choice}</pre>

  <div>
    <h6 class="demo-title">Filter chips with increased touch target</h6>
    <Set
      chips={['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats']}
      let:chip
      filter
      bind:selected={filter}
    >
      <Chip {chip} touch>
        <Text>{chip}</Text>
      </Chip>
    </Set>
  </div>

  <pre class="status">Selected: {filter.join(', ')}</pre>

  <div>
    <h6 class="demo-title">The same, but with leading icons</h6>
    <Set
      chips={['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats']}
      let:chip
      filter
      bind:selected={filterIcons}
    >
      <Chip {chip} touch>
        <LeadingIcon class="material-icons">checkroom</LeadingIcon>
        <Text>{chip}</Text>
      </Chip>
    </Set>
  </div>

  <pre class="status">Selected: {filterIcons.join(', ')}</pre>

  <div>
    <h6 class="demo-title">Input chips</h6>
    <Set chips={input} let:chip input>
      <Chip {chip}>
        <Text>{chip}</Text>
        <TrailingAction icon$class="material-icons">cancel</TrailingAction>
      </Chip>
    </Set>
    <Button on:click={addInputChip}><Label>Add</Label></Button>
  </div>

  <div>
    <h6 class="demo-title">Keyed chips</h6>
    <Set chips={keyed} let:chip key={(chip) => chip.k} input>
      <Chip {chip}>
        <Text>{chip.v}</Text>
        <TrailingAction icon$class="material-icons">cancel</TrailingAction>
      </Chip>
    </Set>
    <Button on:click={addKeyedChip}><Label>Add</Label></Button>
  </div>
</section>

<script>
  import Chip, {
    Set,
    LeadingIcon,
    TrailingIcon,
    TrailingAction,
    Text,
  } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let choice = 'Morning';
  let filter = ['Shoes', 'Shirts', 'Coats'];
  let filterIcons = ['Shoes', 'Shirts', 'Coats'];
  let input = [1, 2, 3, 4];
  let keyed = [
    { k: 1, v: 'Apple' },
    { k: 2, v: 'Apple' },
    { k: 3, v: 'Apple' },
    { k: 4, v: 'Apple' },
  ];

  function addInputChip() {
    if (input.length) {
      input.push(input[input.length - 1] + 1);
      input = input;
    } else {
      input.push(1);
      input = input;
    }
  }

  function addKeyedChip() {
    if (keyed.length) {
      keyed.push({ k: keyed[keyed.length - 1].k + 1, v: 'Apple' });
      keyed = keyed;
    } else {
      keyed.push({ k: 1, v: 'Apple' });
      keyed = keyed;
    }
  }
</script>
