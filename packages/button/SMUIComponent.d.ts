import type { SMUIComponent } from '@smui/common';

declare module '*.svelte' {
  export { SMUIComponent as default };
}
