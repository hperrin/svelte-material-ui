import { Corner } from './mdc';

export { Corner };

export interface SMUIMenuSurfaceAccessor {
  open: boolean;
  closeProgrammatic(skipRestoreFocus?: boolean): void;
}
