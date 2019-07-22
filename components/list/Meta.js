export default function Meta(node) {
  node.classList.add('mdc-list-item__meta');

  return {
    destroy() {
      node.classList.remove('mdc-list-item__meta');
    }
  }
}