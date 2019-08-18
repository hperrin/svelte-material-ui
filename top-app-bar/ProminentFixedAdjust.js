export default function ProminentFixedAdjust(node) {
  node.classList.add('mdc-top-app-bar--prominent-fixed-adjust');

  return {
    destroy() {
      node.classList.remove('mdc-top-app-bar--prominent-fixed-adjust');
    }
  }
}