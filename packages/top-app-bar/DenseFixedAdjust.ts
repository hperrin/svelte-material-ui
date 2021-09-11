export default function DenseFixedAdjust(node: HTMLElement) {
  node.classList.add('mdc-top-app-bar--dense-fixed-adjust');

  return {
    destroy() {
      node.classList.remove('mdc-top-app-bar--dense-fixed-adjust');
    },
  };
}
