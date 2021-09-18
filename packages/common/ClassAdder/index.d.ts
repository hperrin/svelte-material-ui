import type { SvelteComponentDev } from 'svelte/internal';

declare module '*.svelte' {
  export default SvelteComponentDev;
  export { ClassAdderInternals } from './index.types.js';
  export const internals: ClassAdderInternals;
}
