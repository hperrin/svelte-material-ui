<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips</h2>

  <div>
    <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>
      <Chip shouldRemoveOnTrailingIconClick={false}>
        {#if chip === 'four'}
          <Icon class="material-icons" leading>book</Icon>
        {/if}
        <Text>{chip}</Text>
        {#if chip === 'five'}
          <Icon class="material-icons" trailing>commute</Icon>
        {/if}
      </Chip>
    </Set>
  </div>

  <div>
    Choice Chips
    <Set chips={['Morning', 'Afternoon', 'Evening', 'Night']} let:chip choice bind:selected={choice}>
      <Chip tabindex="0">{chip}</Chip>
    </Set>
  </div>

  <div>
    Programmatically select:
    <Button on:click={() => choice = 'Morning'}><Label>Morning</Label></Button>
    <Button on:click={() => choice = 'Afternoon'}><Label>Afternoon</Label></Button>
    <Button on:click={() => choice = 'Evening'}><Label>Evening</Label></Button>
    <Button on:click={() => choice = 'Night'}><Label>Night</Label></Button>
  </div>

  <pre class="status">Selected: {choice}</pre>

  <div>
    Filter Chips
    <Set chips={['Shoes', 'Pants', 'Shirts', 'Hats']} let:chip filter bind:selected={filter}>
      <Chip tabindex="0"><Checkmark /><Text>{chip}</Text></Chip>
    </Set>
  </div>

  <pre class="status">Selected: {filter.join(', ')}</pre>

  <div>
    Input Chips
    <Set chips={input} let:chip input>
      <Chip><Text>{chip}</Text><Icon class="material-icons" trailing tabindex="0">cancel</Icon></Chip>
    </Set>
    <Button on:click={addInputChip}><Label>Add</Label></Button>
  </div>

  <div>
    Keyed Chips
    <Set chips={keyed} let:chip key={chip => chip.k} input>
      <Chip><Text>{chip.v}</Text><Icon class="material-icons" trailing tabindex="0">cancel</Icon></Chip>
    </Set>
    <Button on:click={addKeyedChip}><Label>Add</Label></Button>
  </div>
</section>

<script>
  import Chip, {Set, Icon, Checkmark, Text} from '@smui/chips';
  import Button, {Label} from '@smui/button';

  let choice = 'Morning';
  let filter = ['Shoes', 'Shirts'];
  let input = [1, 2, 3, 4];
  let keyed = [{k: 1, v: 'Apple'}, {k: 2, v: 'Apple'}, {k: 3, v: 'Apple'}, {k: 4, v: 'Apple'}];

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
      keyed.push({k: keyed[keyed.length - 1].k + 1, v: 'Apple'});
      keyed = keyed;
    } else {
      keyed.push({k: 1, v: 'Apple'});
      keyed = keyed;
    }
  }
</script>