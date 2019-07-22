export default function Graphic(node) {
  node.classList.add('mdc-list-item__graphic');

  return {
    destroy() {
      node.classList.remove('mdc-list-item__graphic');
    }
  }
}