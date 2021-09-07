export default function Anchor(
  node,
  {
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  } = {}
) {
  addClass('mdc-menu-surface--anchor');

  return {
    destroy() {
      removeClass('mdc-menu-surface--anchor');
    },
  };
}
