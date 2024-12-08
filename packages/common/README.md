# Svelte Material UI - Common Components

Common Label and Icon components, Element component, and helper utilities.

# Installation

```sh
npm install --save-dev @smui/common
```

# Examples and Usage Information

https://sveltematerialui.com/demo/common

# Exports

## Label

A common label.

The common label is used everywhere that exports a `Label` component.

### Props / Defaults

- `component`: `Span` - A component to use as the root element.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.

## Icon

A common icon.

The common icon is used everywhere that exports an `Icon` component except for `textfield` and `select`.

### Props / Defaults

- `component`: `I` - A component to use as the root element.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `on`: `false` - Used in the context of an icon button toggle to denote the icon for when the button is on.

## SmuiElement

A dynamic HTML element component.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `tag`: `'div'` - An HTML tag name to use as the element.

## Svg

An SVG tag component. This is separated from the `SmuiElement` component, because it returns a `SVGSVGElement` object, which does not implement the `HTMLElement` interface.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.

# Event Modifiers

Event modifiers are exported from the `@smui/common/events` endpoint. You can use them with the event system introduced in Svelte 5.

## once

Fire an event listener only once.

```svelte
<Button onclick={once((event) => console.log(event))}>
  <Label>Click Me</Label>
</Button>

<script lang="ts">
  import { once } from '@smui/common/events';
  import Button, { Label } from '@smui/button';
</script>
```

## preventDefault

Call `preventDefault()` on the event.

```svelte
<Button onclick={preventDefault((event) => console.log(event))}>
  <Label>Click Me</Label>
</Button>

<script lang="ts">
  import { preventDefault } from '@smui/common/events';
  import Button, { Label } from '@smui/button';
</script>
```

## selfEvent

Only run the event listener when `event.target === event.currentTarget`.

```svelte
<Button onclick={selfEvent((event) => console.log(event))}>
  <Label>Click Me</Label>
</Button>

<script lang="ts">
  import { selfEvent } from '@smui/common/events';
  import Button, { Label } from '@smui/button';
</script>
```

## stopImmediatePropagation

Call `stopImmediatePropagation()` on the event.

```svelte
<Button onclick={stopImmediatePropagation((event) => console.log(event))}>
  <Label>Click Me</Label>
</Button>

<script lang="ts">
  import { stopImmediatePropagation } from '@smui/common/events';
  import Button, { Label } from '@smui/button';
</script>
```

## stopPropagation

Call `stopPropagation()` on the event.

```svelte
<Button onclick={stopPropagation((event) => console.log(event))}>
  <Label>Click Me</Label>
</Button>

<script lang="ts">
  import { stopPropagation } from '@smui/common/events';
  import Button, { Label } from '@smui/button';
</script>
```

## trustedEvent

Only run the event listener when `event.isTrusted` is true.

```svelte
<Button onclick={trustedEvent((event) => console.log(event))}>
  <Label>Click Me</Label>
</Button>

<script lang="ts">
  import { trustedEvent } from '@smui/common/events';
  import Button, { Label } from '@smui/button';
</script>
```

# Helper Utilities

Helper utilities are exported from the `@smui/common/internal` endpoint. They are used within SMUI to provide additional functionality outside of the features the Svelte API is natively capable of. You can use them in your own components to provide the same additional functionality.

`classAdderBuilder` uses internal Svelte features. Since it depends on `svelte/internal`, you should consider use of it the same way you consider use of `svelte/internal` directly.

## classMap

Build a class string from a map of class names to conditions. This is useful when you need to add classes to a component, since Svelte's "class:" directives don't work on components. (It's also useful for actions that take `addClass` and `removeClass` functions.)

```svelte
<SomeComponent
  class={classMap({
    'my-always-on-class': true,
    'my-conditional-class': condition,
    ...internalClasses,
  })}
>
  I've got class.
</SomeComponent>

<script lang="ts">
  import { classMap } from '@smui/common/internal';
  import SomeComponent from './SomeComponent.svelte';

  export let condition = true;

  let internalClasses: { [k: string]: boolean } = $state({});

  export function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  export function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }
</script>
```

## dispatch

Dispatch a custom event. This differs from Svelte's component event system, because these events require a DOM element as a target, can bubble (and do by default), and are cancelable with `event.preventDefault()`. All SMUI events are dispatched with this instead of Svelte's `createEventDispatcher`.

```svelte
<div
  bind:this={eventTarget}
  onmouseover={emitEvent}
  onclick={emitCancelableEvent}
  tabindex={0}
/>

<script lang="ts">
  import { dispatch } from '@smui/common/internal';

  let eventTarget;

  function emitEvent(originalEvent: Event) {
    dispatch(eventTarget, 'MyCustomEvent', { originalEvent });

    // You would access originalEvent with `event.detail.originalEvent`.
  }

  function emitCancelableEvent(originalEvent: Event) {
    const event = dispatch(
      eventTarget,
      'MyCustomEvent',
      { originalEvent },
      {
        bubbles: true,
        cancelable: true,
      },
    );

    if (!event.defaultPrevented) {
      alert('The event was not canceled!');
    }
  }
</script>
```

## exclude

Exclude a set of properties from an object. It differs from normal `omit` functions by also excluding all properties that begin with a given string if that string ends with "$". It is usually used along with `prefixFilter` to allow props to be given to multiple elements within a component.

```svelte
<!-- MyComponent.svelte -->
<div class="my-component {className}" {...exclude(restProps, ['button$'])}>
  <button class="button {button$class}" {...prefixFilter(restProps, 'button$')}>
    {@render children?.()}
  </button>
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import { exclude, prefixFilter } from '@smui/common/internal';

  type OwnProps = {
    class?: string;
    button$class?: string;
    children?: Snippet;
  };
  let {
    class: className = '',
    button$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiAttrs<
        'button',
        keyof OwnProps
      > as `button\$${k}`]?: SmuiAttrs<'button', keyof OwnProps>[k];
    } = $props();
</script>
```

```svelte
<MyComponent
  class="my-class"
  button$disabled={disabled}
  button$onclick={() => (disabled = true)}
>
  Click Me Only Once
</MyComponent>

<script lang="ts">
  import MyComponent from './MyComponent.svelte';

  let disabled = $state(false);
</script>
```

## prefixFilter

Filter an object for only properties with a certain prefix. It is usually used along with `exclude` to allow props to be given to multiple elements within a component.

```svelte
<!-- MyComponent.svelte -->
<div class="my-component {className}" {...exclude(restProps, ['button$'])}>
  <button class="button {button$class}" {...prefixFilter(restProps, 'button$')}>
    {@render children?.()}
  </button>
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import { exclude, prefixFilter } from '@smui/common/internal';

  type OwnProps = {
    class?: string;
    button$class?: string;
    children?: Snippet;
  };
  let {
    class: className = '',
    button$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiAttrs<
        'button',
        keyof OwnProps
      > as `button\$${k}`]?: SmuiAttrs<'button', keyof OwnProps>[k];
    } = $props();
</script>
```

```svelte
<MyComponent
  class="my-class"
  button$disabled={disabled}
  button$onclick={() => (disabled = true)}
>
  Click Me Only Once
</MyComponent>

<script lang="ts">
  import MyComponent from './MyComponent.svelte';

  let disabled = $state(false);
</script>
```

## useActions

An action that takes actions and runs them on the element. Used to allow actions on components, and forward actions from one component to another, until the ultimate component finally renders the DOM element.

```svelte
<!-- MyComponent.svelte -->
<div use:useActions={use}>
  {@render children?.()}
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { useActions } from '@smui/common/internal';

  let {
    use = [],
    children,
  }: {
    use?: ActionArray;
    children?: Snippet;
  } = $props();
</script>
```

```svelte
<MyComponent use={[SomeAction]}>I use an action!</MyComponent>

<MyComponent use={[SomeAction, [SomeOtherAction, { someOption: true }]]}>
  I use two actions! And one has options!
</MyComponent>

<script lang="ts">
  import MyComponent from './MyComponent.svelte';
  import SomeAction from './SomeAction.js';
  import SomeOtherAction from './SomeOtherAction.js';
</script>
```

## announce

A function that announces a string of text to users who are using a screen reader.

```svelte
<!--
  Note that this is not the proper way to annotate a button for screen readers.
  It's just an example.
-->
<Button
  onfocus={() => announce("Don't push this button!", { priority: 'assertive' })}
  style="background-color: red; color: white; transform: scale(2);"
>
  Big Red Button
</Button>

<script lang="ts">
  import { announce } from '@smui/common/internal';
</script>
```

# Other Components

These components are not exported in the index file, but are available to be imported elsewhere. They are generally used for simple components which only add a class to an element.

## ContextFragment.svelte

A fragment component (only contains a `{@render children?.()}`) used to define a Svelte context with a Svelte store.

### Props / Defaults

- `key`: `undefined` - The key of the Svelte context.
- `value`: `undefined` - The value of the store contained in the Svelte context. The store will be updated when the value changes.

## classadder/ClassAdder.svelte

A base component that adds a class to an element. The ClassAdder is used to provide simple components. It usually uses the `SmuiElement` component shown above, but you can specify a different component for it to use.

### Props / Defaults

- `component`: `(depends on context)` - The component to extend. Usually it is set to `SmuiElement`.
- `tag`: `(depends on context)` - The HTML tag name `SmuiElement` will use.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.

## classAdderBuilder

Use this to build a ClassAdder component. ClassAdder components are useful for reducing the size of your bundle. If you have tons of simple components that just need to add classes/props or set a context, using ClassAdder components means there's only one actual Svelte component in your bundle for all of these many tiny components.

```js
import { classAdderBuilder } from '@smui/common/classadder';

export default classAdderBuilder({
  class: 'my-added-class',
  tag: 'div',
});
```

You can also supply a component that implements the `SmuiComponent` interface.

```js
import { classAdderBuilder } from '@smui/common/classadder';
import Button from '@smui/button';

export default classAdderBuilder({
  class: 'my-added-class',
  component: Button,
});
```

### Props / Defaults

- `component`: `SmuiElement` - An SMUI compatible component.
- `tag`: `'div'` - An HTML tag name. (Only means anything for the `SmuiElement` component.)
- `class`: `''` - The class to add.
- `classMap`: `{}` - A map of classes to contexts. The context should resolve to a Svelte store, and the class will be added if the Svelte store's value is true.
- `contexts`: `{}` - A map of contexts to values to set for them.
- `props`: `{}` - A map of props to add to the element.
