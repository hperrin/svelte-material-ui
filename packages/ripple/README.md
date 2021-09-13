# Svelte Material UI - Ripple

Ripples are an interaction feedback mechanism.

# Installation

```sh
npm install --save-dev @smui/ripple
```

# Examples and Usage Information

https://sveltematerialui.com/demo/ripple

# Exports

## (default)

A ripple Svelte action.

### Props / Defaults

The action accepts an array, with two entries. The first is a boolean, whether the ripple is enabled. The second is an object with the props:

- `ripple`: `true` - Whether to enable the ripple.
- `surface`: `false` - Whether the ripple surface classes should be added.
- `unbounded`: `false` - Whether the ripple is unbounded.
- `disabled`: `false` - Whether the node is disabled.
- `color`: `undefined` - The ripple color. ('surface', 'primary', or 'secondary')
- `active`: `undefined` - Used to determine active status of the ripple. If it's undefined, the ":active" pseudo class will be checked on `activeTarget` or the node.
- `eventTarget`: `undefined` - An alternate element where ripple triggering event listeners will be added.
- `activeTarget`: `undefined` - An alternate element where active status will be checked.
- `addClass`: `(className) => node.classList.add(className)` - A function to add a class to the node.
- `removeClass`: `(className) => node.classList.remove(className)` - A function to remove a class from the node.
- `addStyle`: `(name, value) => node.style.setProperty(name, value)` - A function to add a style property to the node. If given a value of `''` or `null`, it should remove the property.
- `initPromise`: `Promise.resolve()` - A promise to wait for before initializing the ripple.

# More Information

See [Ripple](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-ripple) in MDC-Web for information about the upstream library's architecture.
