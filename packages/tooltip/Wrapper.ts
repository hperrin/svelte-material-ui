export default function Wrapper(
  node: HTMLElement,
  {
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  }: {
    addClass?: (className: string) => void;
    removeClass?: (className: string) => void;
  } = {}
) {
  addClass('mdc-tooltip-wrapper--rich');

  return {
    destroy() {
      removeClass('mdc-tooltip-wrapper--rich');
    },
  };
}
