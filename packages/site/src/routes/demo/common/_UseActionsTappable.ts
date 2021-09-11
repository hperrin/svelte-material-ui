import TinyGesture from 'tinygesture';

export default function Tappable(
  node: HTMLElement,
  options: {
    bgColor: string;
    color: string;
  }
) {
  const gesture = new TinyGesture(node);
  let tapTimeout: NodeJS.Timeout;
  let pressTimeout: NodeJS.Timeout;
  let pressed = false;

  node.style.transition =
    (node.style.transition ? node.style.transition + ', ' : '') +
    'background-color ease 0.3s, color ease 0.3s';

  gesture.on('tap', () => {
    if (!pressed) {
      node.style.transform = 'perspective(1000px) translate3d(0, 0, 100px)';
      clearTimeout(tapTimeout);
      tapTimeout = setTimeout(() => (node.style.transform = null), 300);
    }
    pressed = false;
  });
  gesture.on('doubletap', () => {
    node.style.transform = 'perspective(1000px) translate3d(0, 0, 400px)';
    clearTimeout(tapTimeout);
    tapTimeout = setTimeout(() => (node.style.transform = null), 300);
  });
  gesture.on('longpress', () => {
    pressed = true;
    node.style.backgroundColor = options.bgColor;
    node.style.color = options.color;
    clearTimeout(pressTimeout);
  });

  gesture.on('panend', () => {
    pressTimeout = setTimeout(() => {
      node.style.backgroundColor = null;
      node.style.color = null;
    }, 300);
  });

  return {
    destroy() {
      clearTimeout(tapTimeout);
      clearTimeout(pressTimeout);
      gesture.destroy();
    },
  };
}
