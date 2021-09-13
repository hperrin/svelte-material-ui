import Dialog from './Dialog.svelte';
import type { DialogComponentDev } from './Dialog.types';
export * from './Dialog.types';

import Header from './Header';
import Title from './Title';
import Content from './Content';
import Actions from './Actions';
import InitialFocus from './InitialFocus';

export default Dialog as typeof DialogComponentDev;

export { Header, Title, Content, Actions, InitialFocus };
