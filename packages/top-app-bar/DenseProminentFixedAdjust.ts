export default function DenseProminentFixedAdjust(node: HTMLElement) {
  node.classList.add('mdc-top-app-bar--dense-prominent-fixed-adjust');

  return {
    destroy() {
      node.classList.remove('mdc-top-app-bar--dense-prominent-fixed-adjust');
    },
  };
}
