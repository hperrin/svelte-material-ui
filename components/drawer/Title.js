export default function Title(node) {
  node.classList.add('mdc-drawer__title');

  return {
    destroy() {
      node.classList.remove('mdc-drawer__title');
    }
  }
}