export default function AppContent(node) {
  node.classList.add('mdc-drawer-app-content');

  return {
    destroy() {
      node.classList.remove('mdc-drawer-app-content');
    }
  }
}