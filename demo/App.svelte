<div class="container">
  <h1>Material Components</h1>

  <section>
    <h2>Button</h2>

    <p>
      <Button on:click={() => btnClicked++}><ButtonLabel>Click Me</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} disabled><ButtonLabel>Disabled</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} ripple={false}><ButtonLabel>No Ripple</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} raised><ButtonLabel>Raised</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} unelevated><ButtonLabel>Unelevated</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} outlined><ButtonLabel>Outlined</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} dense><ButtonLabel>Dense</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} className="myClass"><ButtonLabel>With a Class</ButtonLabel></Button>
    </p>

    <p>
      <Button on:click={() => btnClicked++}><ButtonIcon style="margin-right: 12px;">favorite</ButtonIcon><ButtonLabel>Icon</ButtonLabel></Button>
      <Button on:click={() => btnClicked++}><ButtonLabel>Trailing Icon</ButtonLabel><ButtonIcon style="margin-left: 12px;">favorite</ButtonIcon></Button>
    </p>

    <p class="status">Clicked: {btnClicked}</p>
  </section>

  <section>
    <h2>Floating Action Button</h2>

    <p>
      <Fab on:click={() => fabClicked++}><FabIcon>favorite</FabIcon></Fab>
      <Fab on:click={() => fabClicked++} mini><FabIcon>favorite</FabIcon></Fab>
      <Fab on:click={() => fabClicked++} extended><FabIcon style="margin-right: 12px;">favorite</FabIcon><FabLabel>Extended</FabLabel></Fab>
      <Fab on:click={() => fabClicked++} extended ripple={false}><FabIcon style="margin-right: 12px;">favorite</FabIcon><FabLabel>No Ripple</FabLabel></Fab>
      <Fab on:click={() => fabClicked++} extended><FabLabel>Extended W/o Icon</FabLabel></Fab>
    </p>

    <p>
      <Fab on:click={() => fabClicked++} exited={fabExited}><FabIcon>favorite</FabIcon></Fab>
      <label><input type="checkbox" bind:checked={fabExited}> Exited</label>
    </p>

    <p class="status">Clicked: {fabClicked}</p>
  </section>

  <section>
    <h2>Icon Button</h2>

    <p>
      <IconButton on:click={() => icbClicked++}>build</IconButton>
      <IconButton on:click={() => icbClicked++} disabled>search</IconButton> (disabled)
      <IconButton on:click={() => icbClicked++} ripple={false}>add_shopping_cart</IconButton> (no ripple)
      <IconButton on:click={() => icbClicked++} toggleable bind:pressed={icbInitialOff}><IconButtonIcon on>star</IconButtonIcon><IconButtonIcon>star_border</IconButtonIcon></IconButton>
      {icbInitialOff ? '(on)' : '(off)'}
      <IconButton on:click={() => icbClicked++} toggleable bind:pressed={icbInitialOn}><IconButtonIcon on>alarm_on</IconButtonIcon><IconButtonIcon>alarm_off</IconButtonIcon></IconButton>
      {icbInitialOn ? '(on)' : '(off)'}
    </p>

    <p class="status">Clicked: {icbClicked}</p>
  </section>

  <section>
    <h2>Chips</h2>

    <p>
      <ChipSet chips={['one', 'two', 'three', 'four', 'five']} let:chip>
        <Chip shouldRemoveOnTrailingIconClick={false}>
          {#if chip === 'four'}
            <ChipIcon leading>book</ChipIcon>
          {/if}
          <ChipText>{chip}</ChipText>
          {#if chip === 'five'}
            <ChipIcon trailing>commute</ChipIcon>
          {/if}
        </Chip>
      </ChipSet>
    </p>

    <p>
      Choice Chips
      <ChipSet chips={['Morning', 'Afternoon', 'Evening', 'Night']} let:chip choice bind:selected={chpChoice}>
        <Chip tabindex="0">{chip}</Chip>
      </ChipSet>
    </p>

    <p>
      Programmatically select:
      <Button on:click={() => chpChoice = 'Morning'}><ButtonLabel>Morning</ButtonLabel></Button>
      <Button on:click={() => chpChoice = 'Afternoon'}><ButtonLabel>Afternoon</ButtonLabel></Button>
      <Button on:click={() => chpChoice = 'Evening'}><ButtonLabel>Evening</ButtonLabel></Button>
      <Button on:click={() => chpChoice = 'Night'}><ButtonLabel>Night</ButtonLabel></Button>
    </p>

    <p class="status">Selected: {chpChoice}</p>

    <p>
      Filter Chips
      <ChipSet chips={['Shoes', 'Pants', 'Shirts', 'Hats']} let:chip filter bind:selected={chpFilter}>
        <Chip tabindex="0"><ChipCheckmark /><ChipText>{chip}</ChipText></Chip>
      </ChipSet>
    </p>

    <p class="status">Selected: {chpFilter.join(', ')}</p>

    <p>
      Input Chips
      <ChipSet chips={chpInput} let:chip input>
        <Chip><ChipText>{chip}</ChipText><ChipIcon trailing tabindex="0">cancel</ChipIcon></Chip>
      </ChipSet>
      <Button on:click={addInputChip}><ButtonLabel>Add</ButtonLabel></Button>
    </p>

    <p>
      Keyed Chips
      <ChipSet chips={chpKeyed} let:chip key={chip => chip.k} input>
        <Chip><ChipText>{chip.v}</ChipText><ChipIcon trailing tabindex="0">cancel</ChipIcon></Chip>
      </ChipSet>
      <Button on:click={addKeyedChip}><ButtonLabel>Add</ButtonLabel></Button>
    </p>
  </section>
</div>

<script>
  import Button, {Label as ButtonLabel, Icon as ButtonIcon} from '../components/button';
  import Fab, {Label as FabLabel, Icon as FabIcon} from '../components/fab';
  import IconButton, {Icon as IconButtonIcon} from '../components/icon-button';
  import Chip, {Set as ChipSet, Icon as ChipIcon, Checkmark as ChipCheckmark, Text as ChipText} from '../components/chips';

  let btnClicked = 0;
  let fabClicked = 0;
  let fabExited = false;
  let icbClicked = 0;
  let icbInitialOff = false;
  let icbInitialOn = true;
  let chpChoice = 'Morning';
  let chpFilter = ['Shoes', 'Shirts'];
  let chpInput = [1, 2, 3, 4];
  let chpKeyed = [{k: 1, v: 'Apple'}, {k: 2, v: 'Apple'}, {k: 3, v: 'Apple'}, {k: 4, v: 'Apple'}];

  function addInputChip() {
    if (chpInput.length) {
      chpInput.push(chpInput[chpInput.length - 1] + 1);
      chpInput = chpInput;
    } else {
      chpInput.push(1);
      chpInput = chpInput;
    }
  }

  function addKeyedChip() {
    if (chpKeyed.length) {
      chpKeyed.push({k: chpKeyed[chpKeyed.length - 1].k + 1, v: 'Apple'});
      chpKeyed = chpKeyed;
    } else {
      chpKeyed.push({k: 1, v: 'Apple'});
      chpKeyed = chpKeyed;
    }
  }
</script>

<style>
  .container {
    background: #fff;
    margin: 2em auto;
    padding: 2em;
    max-width: 960px;
  }

  :global(.myClass) {
    text-decoration: underline !important;
  }

  section {
    margin-top: 4em;
  }

  .status {
    font-family: monospace;
    font-size: .9em;
  }
</style>