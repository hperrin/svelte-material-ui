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

  /*
  You might wonder why you can't use `Button<'p'>` instead. It is
  because of this: https://github.com/sveltejs/rfcs/pull/38#issuecomment-1230881785

  The `InstanceType<typeof ` part is only needed for components that take tag
  names and components (or any other type generics).
  */
  let PButton: InstanceType<typeof Button>;
  let PButtonElement: HTMLParagraphElement;

  onMount(() => {
    /*
    You might wonder why you need `as HTMLParagraphElement` here. It is because
    of this: https://github.com/sveltejs/rfcs/pull/38#issuecomment-1230881785
    */
    PButtonElement = PButton.getElement() as HTMLParagraphElement;
  });
</script>
