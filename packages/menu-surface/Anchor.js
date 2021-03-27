export default function Anchor(node, { classForward = () => {} }) {
  let classList = [];

  function addClass(className) {
    const idx = classList.indexOf(className);
    if (idx === -1) {
      node.classList.add(className);
      classList.push(className);
      if (classForward) {
        classForward(classList);
      }
    }
  }

  function removeClass(className) {
    const idx = classList.indexOf(className);
    if (idx !== -1) {
      node.classList.remove(className);
      classList.splice(idx, 1);
      if (classForward) {
        classForward(classList);
      }
    }
  }

  addClass('mdc-menu-surface--anchor');

  return {
    destroy() {
      removeClass('mdc-menu-surface--anchor');
    },
  };
}
