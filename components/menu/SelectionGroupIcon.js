export default function Graphic(node) {
  node.classList.add('mdc-menu__selection-group-icon');

  return {
    destroy() {
      node.classList.remove('mdc-menu__selection-group-icon');
    }
  }
}