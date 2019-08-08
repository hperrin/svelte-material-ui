import ClassAdder from '../common/ClassAdder.svelte';

function Content(...args) {
  const classAdder = new ClassAdder(...args);
  classAdder.$set({addClass: 'smui-card__content'});
  return classAdder;
}

Content.prototype = ClassAdder;

export default Content;