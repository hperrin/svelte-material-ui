<section>
  <h2>Button</h2>

  <p>
    <Button on:click={() => clicked++}><Label>Click Me</Label></Button>
    <Button on:click={() => clicked++} disabled><Label>Disabled</Label></Button>
    <Button on:click={() => clicked++} ripple={false}><Label>No Ripple</Label></Button>
    <Button on:click={() => clicked++} raised><Label>Raised</Label></Button>
    <Button on:click={() => clicked++} unelevated><Label>Unelevated</Label></Button>
    <Button on:click={() => clicked++} outlined><Label>Outlined</Label></Button>
    <Button on:click={() => clicked++} dense><Label>Dense</Label></Button>
    <Button on:click={() => clicked++} className="myClass"><Label>With a Class</Label></Button>
  </p>

  <p>
    <Button on:click={() => clicked++}><Icon style="margin-right: 12px;">favorite</Icon><Label>Icon</Label></Button>
    <Button on:click={() => clicked++}><Label>Trailing Icon</Label><Icon style="margin-left: 12px;">favorite</Icon></Button>
  </p>

  <p class="status">Clicked: {clicked}</p>
</section>

<script>
  import Button, {Label, Icon} from '../components/button';

  let clicked = 0;
</script>

<style lang="scss">
  @import "../components/typography";

  * :global(.myClass) {
    text-decoration: underline !important;
  }
</style>