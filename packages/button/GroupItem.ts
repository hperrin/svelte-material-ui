export type GroupItemProps = {
  addClass?: (className: string) => void;
  removeClass?: (className: string) => void;
};

export default function GroupItem(
  node: Element,
  {
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
  }: GroupItemProps = {}
) {
  addClass('smui-button__group-item');

  return {
    destroy() {
      removeClass('smui-button__group-item');
    },
  };
}
