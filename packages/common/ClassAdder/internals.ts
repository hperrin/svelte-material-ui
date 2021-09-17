import type { ClassAdderInternals } from './index.types.js';
import Div from '../Div.svelte';
import type { DivComponentDev } from '../Div.types.js';

export const internals: ClassAdderInternals<typeof DivComponentDev> = {
  component: Div as typeof DivComponentDev,
  class: '',
  classMap: {},
  contexts: {},
  props: {},
};
