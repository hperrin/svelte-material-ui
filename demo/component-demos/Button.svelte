<section>
  <h2>Button</h2>

  <div>
    <Button on:click={() => clicked++}><Label>Default</Label></Button>
    <!-- <Button on:click={() => clicked++} color="primary"><Label>Primary</Label></Button>
    <Button on:click={() => clicked++} color="secondary"><Label>Secondary</Label></Button> -->
    <Button on:click={() => clicked++} disabled><Label>Disabled</Label></Button>
    <Button on:click={() => clicked++} ripple={false}><Label>No Ripple</Label></Button>
    <Button on:click={() => clicked++} variant="raised"><Label>Raised</Label></Button>
    <Button on:click={() => clicked++} variant="unelevated"><Label>Unelevated</Label></Button>
    <Button on:click={() => clicked++} variant="outlined"><Label>Outlined</Label></Button>
    <Button on:click={() => clicked++} dense><Label>Dense</Label></Button>
    <Button on:click={() => clicked++} class="myClass"><Label>With a Class</Label></Button>
  </div>

  <div>
    <Button on:click={() => clicked++}><Icon class="material-icons" style="margin-right: 12px;">favorite</Icon><Label>Icon</Label></Button>
    <Button on:click={() => clicked++}><Label>Trailing Icon</Label><Icon class="material-icons" style="margin-left: 12px;">favorite</Icon></Button>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import Button, {Label, Icon} from 'svelte-material-ui/components/button';

  let clicked = 0;
</script>

<style>
  * :global(.myClass) {
    text-decoration: underline !important;
  }
</style>