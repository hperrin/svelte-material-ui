export default function Header(node) {
  node.classList.add('mdc-drawer__header');

  return {
    destroy() {
      node.classList.remove('mdc-drawer__header');
    }
  }
}