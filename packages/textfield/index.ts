import TextfieldComponent from './Textfield.svelte';
import type { TextfieldComponentDev } from './Textfield.types';
const Textfield = TextfieldComponent as typeof TextfieldComponentDev;

import Prefix from './Prefix';
import Suffix from './Suffix';
import HelperLine from './HelperLine';
import InputComponent from './Input.svelte';
import type { InputComponentDev } from './Input.types';
const Input = InputComponent as typeof InputComponentDev;
import TextareaComponent from './Textarea.svelte';
import type { TextareaComponentDev } from './Textarea.types';
const Textarea = TextareaComponent as typeof TextareaComponentDev;

export default Textfield;

export {
  TextfieldComponentDev,
  Prefix,
  Suffix,
  HelperLine,
  Input,
  InputComponentDev,
  Textarea,
  TextareaComponentDev,
};
