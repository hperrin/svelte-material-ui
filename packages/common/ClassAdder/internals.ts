import type { ClassAdderInternals } from './index.types';
import Div from '../Div.svelte';
import type { DivComponentDev } from '../Div.types';

export const internals: ClassAdderInternals<typeof DivComponentDev> = {
  component: Div as typeof DivComponentDev,
  class: '',
  classMap: {},
  contexts: {},
  props: {},
};
