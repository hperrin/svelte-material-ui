<Banner open fixed mobileStacked content$style="max-width: max-content;">
  <Label slot="label">
    This is a fixed banner! It's here to let you know an important thing. Once
    you've successfully known the thing, you can dismiss it.
  </Label>
  <Button slot="actions">I Know It</Button>
</Banner>

<script lang="ts">
  import Banner, { Label } from '@smui/banner';
  import Button from '@smui/button';
</script>
