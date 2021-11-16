import Snackbar from './Snackbar.svelte';
import type { SnackbarComponentDev } from './Snackbar.types.js';
export * from './Snackbar.types.js';

import Actions from './Actions.js';
import { Label } from '@smui/common';

export default Snackbar as typeof SnackbarComponentDev;

export { Actions, Label };
