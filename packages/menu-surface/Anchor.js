export default function Anchor(node, { addClass, removeClass }) {
  addClass('mdc-menu-surface--anchor');

  return {
    destroy() {
      removeClass('mdc-menu-surface--anchor');
    },
  };
}
