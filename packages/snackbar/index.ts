import Snackbar from './Snackbar.svelte';
import type { SnackbarComponentDev } from './Snackbar.types';
export * from './Snackbar.types';

import Actions from './Actions';
import { Label } from '@smui/common';

export default Snackbar as typeof SnackbarComponentDev;

export { Actions, Label };
