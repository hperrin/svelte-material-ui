import Paper from './Paper.svelte';
import type { PaperComponentDev } from './Paper.types.js';
export * from './Paper.types.js';

import Content from './Content.js';
import Title from './Title.js';
import Subtitle from './Subtitle.js';

export default Paper as typeof PaperComponentDev;

export { Content, Title, Subtitle };
