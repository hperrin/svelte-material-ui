<Banner open fixed mobileStacked content$style="max-width: max-content;">
  {#snippet label()}
    <Label>
      This is a fixed banner! It's here to let you know an important thing. Once
      you've successfully known the thing, you can dismiss it.
    </Label>
  {/snippet}
  {#snippet actions()}
    <Button>I Know It</Button>
  {/snippet}
</Banner>

<script lang="ts">
  import Banner, { Label } from '@smui/banner';
  import Button from '@smui/button';
</script>
