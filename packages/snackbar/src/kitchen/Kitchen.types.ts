import type { ComponentProps } from 'svelte';

import type { MDCSnackbarCloseEvent } from '../mdc';
import type Snackbar from '../Snackbar.svelte';

export interface ConfigAction {
  text: string;
  onClick?: (e: MouseEvent) => void;
  [k: string]: any;
}

export type Config = {
  props?: Omit<ComponentProps<typeof Snackbar>, 'children'>;
  onClose?: (e: MDCSnackbarCloseEvent) => void;
  onDismiss?: (e: MouseEvent) => void;
  actions?: ConfigAction[];
  dismissButton?: boolean;
  dismissTitle?: string;
  dismissText?: string;
  label?: string;
};
