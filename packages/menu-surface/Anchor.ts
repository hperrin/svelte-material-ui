export type AnchorProps = {
  addClass?: (className: string) => void;
  removeClass?: (className: string) => void;
};

export default function Anchor(
  node: HTMLElement,
  {
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  }: AnchorProps = {}
) {
  addClass('mdc-menu-surface--anchor');

  return {
    destroy() {
      removeClass('mdc-menu-surface--anchor');
    },
  };
}
