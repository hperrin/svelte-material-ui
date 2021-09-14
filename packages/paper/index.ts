import Paper from './Paper.svelte';
import type { PaperComponentDev } from './Paper.types';
export * from './Paper.types';

import Content from './Content';
import Title from './Title';
import Subtitle from './Subtitle';

export default Paper as typeof PaperComponentDev;

export { Content, Title, Subtitle };
