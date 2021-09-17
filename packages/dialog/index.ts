import Dialog from './Dialog.svelte';
import type { DialogComponentDev } from './Dialog.types.js';
export * from './Dialog.types.js';

import Header from './Header.js';
import Title from './Title.js';
import Content from './Content.js';
import Actions from './Actions.js';
import InitialFocus from './InitialFocus.js';

export default Dialog as typeof DialogComponentDev;

export { Header, Title, Content, Actions, InitialFocus };
