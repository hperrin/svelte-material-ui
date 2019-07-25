export default function Scrim(node) {
  node.classList.add('mdc-drawer-scrim');

  return {
    destroy() {
      node.classList.remove('mdc-drawer-scrim');
    }
  }
}