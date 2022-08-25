import type { ComponentType } from 'svelte';

import CharacterCounter from './CharacterCounter.svelte';
import type { CharacterCounterComponentDev } from './CharacterCounter.types.js';
export * from './CharacterCounter.types.js';

export default CharacterCounter as ComponentType<CharacterCounterComponentDev>;
