export default function Actions(node) {
  node.classList.add('mdc-dialog__actions');

  return {
    destroy() {
      node.classList.remove('mdc-dialog__actions');
    }
  }
}