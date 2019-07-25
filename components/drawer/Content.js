export default function Content(node) {
  node.classList.add('mdc-drawer__content');

  return {
    destroy() {
      node.classList.remove('mdc-drawer__content');
    }
  }
}