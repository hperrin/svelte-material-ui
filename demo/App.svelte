<div>
  <h1>Material Components</h1>

  <section>
    <h2>Button</h2>

    <p>
      <Button on:click={() => btnClicked++} class="testyo"><ButtonLabel>Click Me</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} disabled><ButtonLabel>Disabled</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} ripple={false}><ButtonLabel>No Ripple</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} raised><ButtonLabel>Raised</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} unelevated><ButtonLabel>Unelevated</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} outlined><ButtonLabel>Outlined</ButtonLabel></Button>
      <Button on:click={() => btnClicked++} dense><ButtonLabel>Dense</ButtonLabel></Button>
    </p>

    <p>
      <Button on:click={() => btnClicked++}><ButtonIcon style="margin-right: 12px;">favorite</ButtonIcon><ButtonLabel>Icon</ButtonLabel></Button>
      <Button on:click={() => btnClicked++}><ButtonLabel>Trailing Icon</ButtonLabel><ButtonIcon style="margin-left: 12px;">favorite</ButtonIcon></Button>
    </p>

    <p>Clicked: {btnClicked}</p>
  </section>

  <section>
    <h2>Floating Action Button</h2>

    <p>
      <Fab on:click={() => fabClicked++}><FabIcon>favorite</FabIcon></Fab>
      <Fab on:click={() => fabClicked++} mini><FabIcon>favorite</FabIcon></Fab>
      <Fab on:click={() => fabClicked++} extended><FabIcon style="margin-right: 12px;">favorite</FabIcon><FabLabel>Extended</FabLabel></Fab>
      <Fab on:click={() => fabClicked++} extended><FabLabel>Extended W/o Icon</FabLabel></Fab>
      <Fab on:click={() => fabClicked++} exited={fabExited}><FabIcon>favorite</FabIcon></Fab>
    </p>

    <p>
      <label><input type="checkbox" bind:checked={fabExited}> Exited</label>
    </p>

    <p>Clicked: {fabClicked}</p>
  </section>
</div>

<script>
  import Button, {Label as ButtonLabel, Icon as ButtonIcon} from '../components/button';
  import Fab, {Label as FabLabel, Icon as FabIcon} from '../components/fab';

  let btnClicked = 0;
  let fabClicked = 0;
  let fabExited = false;
</script>