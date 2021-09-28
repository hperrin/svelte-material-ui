# Svelte Material UI - Common Components

Common Label and Icon components, elemental components, and helper utilities.

You can use the elemental components to switch the HTML element that an SMUI component with a `component` prop uses.

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

# Elemental Components

These components are used in SMUI components that take a `component` prop. They determine which HTML element will be used as the root element of the component. You can import them from `@smui/common/elements`.

### Props / Defaults (Common to all Elemental Components)

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.

## A

An elemental component for the `a` tag.

## Aside

An elemental component for the `aside` tag.

## Button

An elemental component for the `button` tag.

## Div

An elemental component for the `div` tag.

## Em

An elemental component for the `em` tag.

## Footer

An elemental component for the `footer` tag.

## H1

An elemental component for the `h1` tag.

## H2

An elemental component for the `h2` tag.

## H3

An elemental component for the `h3` tag.

## H4

An elemental component for the `h4` tag.

## H5

An elemental component for the `h5` tag.

## H6

An elemental component for the `h6` tag.

## Header

An elemental component for the `header` tag.

## Hr

An elemental component for the `hr` tag.

## I

An elemental component for the `i` tag.

## Img

An elemental component for the `img` tag.

## Li

An elemental component for the `li` tag.

## Main

An elemental component for the `main` tag.

## Nav

An elemental component for the `nav` tag.

## P

An elemental component for the `p` tag.

## Section

An elemental component for the `section` tag.

## Span

An elemental component for the `span` tag.

## Strong

An elemental component for the `strong` tag.

## Svg

An elemental component for the `svg` tag.

## Ul

An elemental component for the `ul` tag.

# Helper Utilities

Helper utilities are exported from the `@smui/common/internal` endpoint. They are used within SMUI to provide additional functionality outside of the features the Svelte API is natively capable of. You can use them in your own components to provide the same additional functionality.

`classAdderBuilder` and `forwardEventsBuilder` use internal Svelte features. Since they depend on `svelte/internal`, you should consider use of them the same way you consider use of `svelte/internal` directly.

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
  import SomeComponent from './SomeComponent.svelte';

  export let condition = true;

  let internalClasses: { [k: string]: boolean } = {};

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

Dispatch a custom event. This differs from Svelte's component event system, because these events require a DOM element as a target, can bubble (and do by default), and are cancelable with `event.preventDefault()`. All SMUI/MDC events are dispatched with this instead of Svelte's `createEventDispatcher`.

```svelte
<div
  bind:this={eventTarget}
  on:mouseover={emitEvent}
  on:click={emitCancelableEvent}
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
      }
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
<div class="my-component {className}" {...exclude($$restProps, ['button$'])}>
  <button
    on:click
    class="button {button$class}"
    {...prefixFilter($$restProps, 'button$')}
  >
    <slot />
  </button>
</div>

<script lang="ts">
  import { exclude, prefixFilter } from '@smui/common/internal';

  let className = '';
  export { className as class };
  export let button$class = '';
</script>
```

```svelte
<MyComponent
  class="my-class"
  button$disabled={disabled}
  on:click={() => (disabled = true)}
>
  Click Me Only Once
</MyComponent>

<script lang="ts">
  import MyComponent from './MyComponent.svelte';

  let disabled = false;
</script>
```

## forwardEventsBuilder

Build an action to allow **all** events to be forwarded from a Svelte component, with support for event modifiers using the "$" syntax.

This is especially useful for UI library components, as it is generally unknown which events will be required from them for all desired use cases. For example, if a Button component only forwards a `click` event, then no use case that requires the `mouseover` or the `keypress` event can be used with it.

In addition, a component that uses Svelte's built in event forwarding system cannot allow event listeners on the "capture" phase of the event lifecycle. It also cannot allow events to be cancelable with the browser's built in `preventDefault` function. In fact, the one big advantage to Svelte's event system, the fact that you don't need an element as an event target, doesn't even apply to UI library components.

```svelte
<!-- MyComponent.svelte -->
<div use:forwardEvents tabindex="0">
  <slot />
</div>

<script lang="ts">
  import { forwardEventsBuilder } from '@smui/common/internal';
  import { get_current_component } from 'svelte/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());
</script>
```

```svelte
<MyComponent
  on:click={() => console.log('Click!')}
  on:mouseover={() => console.log('Mouseover!')}
  on:touchstart$passive={() => console.log("Touchstart, and it's passive!")}
  on:keypress$preventDefault$stopPropagation={() =>
    console.log('No key presses!')}
>
  Listen to my events!
</MyComponent>

<script lang="ts">
  import MyComponent from './MyComponent.svelte';
</script>
```

## prefixFilter

Filter an object for only properties with a certain prefix. It is usually used along with `exclude` to allow props to be given to multiple elements within a component.

```svelte
<!-- MyComponent.svelte -->
<div class="my-component {className}" {...exclude($$restProps, ['button$'])}>
  <button
    on:click
    class="button {button$class}"
    {...prefixFilter($$restProps, 'button$')}
  >
    <slot />
  </button>
</div>

<script lang="ts">
  import { exclude, prefixFilter } from '@smui/common/internal';

  let className = '';
  export { className as class };
  export let button$class = '';
</script>
```

```svelte
<MyComponent
  class="my-class"
  button$disabled={disabled}
  on:click={() => (disabled = true)}
>
  Click Me Only Once
</MyComponent>

<script lang="ts">
  import MyComponent from './MyComponent.svelte';

  let disabled = false;
</script>
```

## useActions

An action that takes actions and runs them on the element. Used to allow actions on components, and forward actions from one component to another, until the ultimate component finally renders the DOM element.

```svelte
<!-- MyComponent.svelte -->
<div use:useActions={use}>
  <slot />
</div>

<script lang="ts">
  import { useActions, ActionArray } from '@smui/common/internal';

  export let use: ActionArray = [];
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

# Other Components

These components are not exported in the index file, but are available to be imported elsewhere. They are generally used for simple components which only add a class to an element.

## ContextFragment.svelte

A fragment component (only contains a `<slot />`) used to define a Svelte context with a Svelte store.

### Props / Defaults

- `key`: `undefined` - The key of the Svelte context.
- `value`: `undefined` - The value of the store contained in the Svelte context. The store will be updated when the value changes.

## classadder/ClassAdder.svelte

A base component that adds a class to an element. The ClassAdder is used to provide simple components. It usually uses one of the elemental components listed above, but you can specify a different component for it to use. Every elemental component supports the `use` prop.

### Props / Defaults

- `component`: `(depends on context)` - The component to extend. Usually it is set to one of the elemental components below.
- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.

## classAdderBuilder

Use this to build a ClassAdder component. ClassAdder components are useful for reducing the size of your bundle. If you have tons of simple components that just need to add classes/props or set a context, using ClassAdder components means there's only one "big" Svelte component in your bundle for all of these many tiny components.

```js
import { classAdderBuilder } from '@smui/common/classadder';
import { Div } from '@smui/common/elements';

export default classAdderBuilder({
  class: 'my-added-class',
  component: Div,
});
```

### Props / Defaults

- `component`: `null` - An elemental component.
- `class`: `''` - The class to add.
- `classMap`: `{}` - A map of classes to contexts. The context should resolve to a Svelte store, and the class will be added if the Svelte store's value is true.
- `contexts`: `{}` - A map of contexts to values to set for them.
- `props`: `{}` - A map of props to add to the element.
