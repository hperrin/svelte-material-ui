import type { ComponentType } from 'svelte';

import Accordion from './Accordion.svelte';
import type { AccordionComponentDev } from './Accordion.types.js';
export * from './Accordion.types.js';

import PanelComponent from './Panel.svelte';
import type { PanelComponentDev } from './Panel.types.js';
export * from './Panel.types.js';
const Panel = PanelComponent as ComponentType<PanelComponentDev>;

import HeaderComponent from './Header.svelte';
import type { HeaderComponentDev } from './Header.types.js';
export * from './Header.types.js';
const Header = HeaderComponent as ComponentType<HeaderComponentDev>;

import { Content } from '@smui/paper';

export default Accordion as ComponentType<AccordionComponentDev>;

export { Panel, Header, Content };
