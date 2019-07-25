export default function Subtitle(node) {
  node.classList.add('mdc-drawer__subtitle');

  return {
    destroy() {
      node.classList.remove('mdc-drawer__subtitle');
    }
  }
}