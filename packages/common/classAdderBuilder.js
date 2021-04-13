import ClassAdder, { internals } from './ClassAdder.svelte';

const defaults = { ...internals };

export function classAdderBuilder(props) {
  function Component(...args) {
    Object.assign(internals, defaults, props);
    return new ClassAdder(...args);
  }

  Component.prototype = ClassAdder;

  // SSR support
  if (ClassAdder.$$render) {
    Component.$$render = (...args) =>
      Object.assign(internals, defaults, props) && ClassAdder.$$render(...args);
  }
  if (ClassAdder.render) {
    Component.render = (...args) =>
      Object.assign(internals, defaults, props) && ClassAdder.render(...args);
  }

  return Component;
}
