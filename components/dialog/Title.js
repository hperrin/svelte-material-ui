export default function Title(node) {
  node.classList.add('mdc-dialog__title');

  return {
    destroy() {
      node.classList.remove('mdc-dialog__title');
    }
  }
}