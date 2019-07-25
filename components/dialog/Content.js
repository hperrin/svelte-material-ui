export default function Content(node) {
  node.classList.add('mdc-dialog__content');

  return {
    destroy() {
      node.classList.remove('mdc-dialog__content');
    }
  }
}