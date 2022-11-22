export default function ProminentFixedAdjust(node: HTMLElement) {
  node.classList.add('mdc-top-app-bar--prominent-fixed-adjust');

  return {
    destroy() {
      node.classList.remove('mdc-top-app-bar--prominent-fixed-adjust');
    },
  };
}
