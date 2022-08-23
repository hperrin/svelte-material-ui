export { DefaultFocusState } from '@material/menu';
import type { SmuiComponentDev } from '@smui/common';
import type { MenuSurfaceComponentDev } from '@smui/menu-surface';
import type Component from './Menu.svelte';

export declare class MenuComponentDev
  extends Component
  implements SmuiComponentDev
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: MenuSurfaceComponentDev['$$prop_def'] & Component['$$prop_def'];

  getElement(): ReturnType<Component['getElement']>;
}
