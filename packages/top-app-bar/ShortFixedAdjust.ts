export default function ShortFixedAdjust(node: HTMLElement) {
  node.classList.add('mdc-top-app-bar--short-fixed-adjust');

  return {
    destroy() {
      node.classList.remove('mdc-top-app-bar--short-fixed-adjust');
    },
  };
}
