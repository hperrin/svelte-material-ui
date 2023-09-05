/// <reference types="./ambient-accordion" />

import Accordion from './Accordion.svelte';

import Panel from './Panel.svelte';
export * from './Panel.types.js';
import Header from './Header.svelte';
import { Content } from '@smui/paper';

export default Accordion;

export { Panel, Header, Content };
