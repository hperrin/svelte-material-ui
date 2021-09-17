import type { SMUIComponent } from '../smui';

declare module '*.svelte' {
  export default SMUIComponent;
  export { ClassAdderInternals } from './index.types.js';
  export const internals: ClassAdderInternals;
}
