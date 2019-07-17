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
</div>

<script>
  import Button, {Label as ButtonLabel, Icon as ButtonIcon} from '../components/button';
  import Fab, {Label as FabLabel, Icon as FabIcon} from '../components/fab';
  import IconButton, {Icon as IconButtonIcon} from '../components/icon-button';

  let btnClicked = 0;
  let fabClicked = 0;
  let fabExited = false;
  let icbClicked = 0;
  let icbInitialOff = false;
  let icbInitialOn = true;
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