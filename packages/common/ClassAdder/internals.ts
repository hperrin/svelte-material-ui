import type { ClassAdderInternals } from './index.types.js';
import Div from '../elements/Div.svelte';
import type { DivComponentDev } from '../elements/Div.types.js';

export const internals: ClassAdderInternals<typeof DivComponentDev> = {
  component: Div as typeof DivComponentDev,
  class: '',
  classMap: {},
  contexts: {},
  props: {},
};
