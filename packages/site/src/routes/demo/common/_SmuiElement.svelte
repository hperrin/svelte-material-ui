<!--
  When a component takes a `tag` prop, it means it also takes a `component` prop
  and that `SmuiElement` is the default component.

  Note: not all SMUI components can take a `component` or `tag` prop.
-->

<div>
  <Button tag="div"><Label>I'm a &lt;div /&gt; Button</Label></Button>
  <Button tag="span"><Label>I'm a &lt;span /&gt; Button</Label></Button>
  <Button tag="strong"><Label>I'm a &lt;strong /&gt; Button</Label></Button>
  <Button tag="em"><Label>I'm a &lt;em /&gt; Button</Label></Button>
  <Button tag="p" bind:this={PButton}
    ><Label>I'm a &lt;p /&gt; Button</Label></Button
  >
</div>

<div>
  <SmuiElement tag="em"
    >I'm rendered as a HTML <code>em</code> element!</SmuiElement
  >
</div>

<script lang="ts">
  import { SmuiElement } from '@smui/common';
  import Button, { Label } from '@smui/button';

  import { onMount } from 'svelte';

  // When you change the tag, you can use the generic type argument to get the
  // right element from `getElement`. The first arg for Button is "href".
  let PButton: Button<undefined, 'p'>;
  let PButtonElement: HTMLParagraphElement;

  onMount(() => {
    PButtonElement = PButton.getElement();
    console.log(PButtonElement);
  });
</script>
