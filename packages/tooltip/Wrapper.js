export default function Wrapper(
  node,
  {
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  } = {}
) {
  addClass('mdc-tooltip-wrapper--rich');

  return {
    destroy() {
      removeClass('mdc-tooltip-wrapper--rich');
    },
  };
}
