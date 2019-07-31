export default function HelperLine(node) {
  node.classList.add('mdc-text-field-helper-line');

  return {
    destroy() {
      node.classList.remove('mdc-text-field-helper-line');
    }
  }
}