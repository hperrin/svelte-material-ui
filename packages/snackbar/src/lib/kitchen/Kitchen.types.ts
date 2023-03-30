import type { MDCSnackbarCloseEvent } from '@material/snackbar';
import type Snackbar from '../Snackbar.svelte';

export interface ConfigAction {
  text: string;
  onClick?: (e: MouseEvent) => void;
  [k: string]: any;
}

export type Config = {
  props?: Omit<Snackbar['$$prop_def'], 'slot'>;
  onClose?: (e: MDCSnackbarCloseEvent) => void;
  onDismiss?: (e: MouseEvent) => void;
  actions?: ConfigAction[];
  dismissButton?: boolean;
  dismissTitle?: string;
  dismissText?: string;
  label?: string;
};
