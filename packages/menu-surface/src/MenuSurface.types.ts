import { Corner } from '@material/menu-surface';

export { Corner };

export interface SMUIMenuSurfaceAccessor {
  open: boolean;
  closeProgrammatic(skipRestoreFocus?: boolean): void;
}
