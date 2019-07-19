export default function Subheader(node) {
  node.classList.add('mdc-list-group__subheader');

  return {
    destroy() {
      node.classList.remove('mdc-list-group__subheader');
    }
  }
}