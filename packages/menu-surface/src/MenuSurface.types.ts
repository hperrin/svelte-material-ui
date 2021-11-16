import type Component from './MenuSurface.svelte';

export declare class MenuSurfaceComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    | 'use'
    | 'class'
    | 'style'
    | 'static'
    | 'anchor'
    | 'fixed'
    | 'open'
    | 'fullWidth'
    | 'quickOpen'
    | 'anchorElement'
    | 'anchorCorner'
    | 'anchorMargin'
    | 'maxHeight'
    | 'horizontallyCenteredOnViewport'
  > &
    Component['$$prop_def'];
}

import { Corner } from '@material/menu-surface';

export { Corner };

export interface SMUIMenuSurfaceAccessor {
  open: boolean;
  closeProgrammatic(skipRestoreFocus?: boolean): void;
}
