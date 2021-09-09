export { DefaultFocusState } from '@material/menu';
import type MenuSurface from '@smui/menu-surface';
import type Menu from './Menu.svelte';

export declare class MenuComponentDev extends Menu {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Menu['$$prop_def'] & MenuSurface['$$prop_def'];
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$events_def: Menu['$$events_def'] & MenuSurface['$$events_def'];
}
