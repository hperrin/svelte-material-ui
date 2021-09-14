declare module '*.svelte' {
  export { SMUIComponent as default } from '../SMUIComponent';
  export { ClassAdderInternals } from './index.types';
  export const internals: ClassAdderInternals;
}
