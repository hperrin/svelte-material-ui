<!--
  Note: not all SMUI components can take a `component` prop.
-->
<div>
  <Button component={Div}><Label>I'm a &lt;div /&gt; Button</Label></Button>
  <Button component={Span}><Label>I'm a &lt;span /&gt; Button</Label></Button>
  <Button component={Strong}
    ><Label>I'm a &lt;strong /&gt; Button</Label></Button
  >
  <Button component={Em}><Label>I'm a &lt;em /&gt; Button</Label></Button>
</div>

<script lang="ts">
  import { Div, Span, Strong, Em } from '@smui/common/elements';
  import Button, { Label } from '@smui/button';
</script>
