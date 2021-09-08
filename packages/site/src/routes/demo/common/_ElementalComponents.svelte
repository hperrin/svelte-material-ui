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

<script>
  import Div from '@smui/common/Div.svelte';
  import Span from '@smui/common/Span.svelte';
  import Strong from '@smui/common/Strong.svelte';
  import Em from '@smui/common/Em.svelte';
  import Button, { Label } from '@smui/button';
</script>
