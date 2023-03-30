export default function FixedAdjust(node: HTMLElement) {
  node.classList.add('smui-bottom-app-bar--standard-adjust');

  return {
    destroy() {
      node.classList.remove('smui-bottom-app-bar--standard-adjust');
    },
  };
}
