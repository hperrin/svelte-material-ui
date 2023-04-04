<!--
  Note: you need an element around the SMUI component
  in order to use the "*" prefix in the selector and
  limit the styles to only elements under this
  component.
-->
<div>
  <!--
    Note: to target this class, you need to use
    a :global() selector. See the styles below.
  -->
  <Button class="myClass"><Label>This button has a Class</Label></Button>
</div>

<script lang="ts">
  import Button, { Label } from '@smui/button';
</script>

<style>
  /* Accessing the class with "*" in front limits
    the scope to anything under this component's
    elements. */
  * :global(.myClass) {
    font-style: italic;
  }
</style>
