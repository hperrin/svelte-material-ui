<!--
  When a component takes a `tag` prop, it means it also takes a `component` prop
  and that `Element` is the default component.

  Note: not all SMUI components can take a `component` or `tag` prop.
-->

<div>
  <Button tag="div"><Label>I'm a &lt;div /&gt; Button</Label></Button>
  <Button tag="span"><Label>I'm a &lt;span /&gt; Button</Label></Button>
  <Button tag="strong"><Label>I'm a &lt;strong /&gt; Button</Label></Button>
  <Button tag="em"><Label>I'm a &lt;em /&gt; Button</Label></Button>
</div>

<div>
  <Element tag="em">I'm rendered as a HTML <code>em</code> element!</Element>
</div>

<script lang="ts">
  import { Element } from '@smui/common';
  import Button, { Label } from '@smui/button';
</script>
