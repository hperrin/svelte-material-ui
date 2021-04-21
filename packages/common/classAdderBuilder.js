// import { create_ssr_component } from 'svelte/internal';
import ClassAdder, { internals } from './ClassAdder.svelte';

const defaults = { ...internals };

export function classAdderBuilder(props) {
  // function Component(...args) {
  //   Object.assign(internals, defaults, props);
  //   return new ClassAdder(...args);
  // }

  // Component.prototype = ClassAdder;

  // SSR support
  // if (ClassAdder.$$render || ClassAdder.render) {
  //   return create_ssr_component((...args) => {
  //     Object.assign(internals, defaults, props);
  //     ClassAdder.render(...args).html;
  //   });
  // return new Proxy(Component, {
  //   construct: function (target, args) {
  //     Object.assign(internals, defaults, props);
  //     return new target(...args);
  //   },
  //   get: function (_target, prop) {
  //     Object.assign(internals, defaults, props);
  //     return ClassAdder[prop];
  //   },
  // });
  // }
  // if (ClassAdder.$$render) {
  //   Component.$$render = (...args) => {
  //     Object.assign(internals, defaults, props);
  //     return ClassAdder.$$render(...args);
  //   };
  // }
  // if (ClassAdder.render) {
  //   Component.render = (...args) => {
  //     Object.assign(internals, defaults, props);
  //     return ClassAdder.render(...args);
  //   };
  // }

  // return Component;

  return new Proxy(ClassAdder, {
    construct: function (target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function (target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    },
  });
}
