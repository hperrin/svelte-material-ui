import ClassAdder from '../common/ClassAdder.svelte';
import H2 from '../common/H2.svelte';

function Title(...args) {
  const classAdder = new ClassAdder(...args);
  classAdder.$set({addClass: 'mdc-dialog__title'});
  if (!('component' in args[0].props)) {
    classAdder.$set({component: H2});
  }
  return classAdder;
}

Title.prototype = ClassAdder;

export default Title;