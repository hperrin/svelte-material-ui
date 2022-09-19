export { DefaultFocusState } from '@material/menu';
import type { ComponentProps } from 'svelte';
import type { MenuSurfaceComponentDev } from '@smui/menu-surface';
import type Component from './Menu.svelte';

export declare class MenuComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: MenuSurfaceComponentDev['$$prop_def'] & ComponentProps<Component>;
}
