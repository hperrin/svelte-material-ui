export default function InitialFocus(node: HTMLElement) {
  node.setAttribute('data-mdc-dialog-initial-focus', '');

  return {
    destroy() {
      node.removeAttribute('data-mdc-dialog-initial-focus');
    },
  };
}
