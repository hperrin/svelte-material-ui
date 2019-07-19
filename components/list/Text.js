export default function Text(node, type) {
  let className;

  function setClassName(type) {
    switch (type) {
      case 'primary':
        className = 'mdc-list-item__primary-text';
        break;
      case 'secondary':
        className = 'mdc-list-item__secondary-text';
        break;
      default:
        className = 'mdc-list-item__text';
        break;
    }
  }

  function removeClasses() {
    node.classList.remove('mdc-list-item__primary-text');
    node.classList.remove('mdc-list-item__secondary-text');
    node.classList.remove('mdc-list-item__text');
  }

  setClassName(type);
  node.classList.add(className);

  return {
    update(type) {
      removeClasses();
      setClassName(type);
      node.classList.add(className);
    },

    destroy() {
      removeClasses();
    }
  }
}