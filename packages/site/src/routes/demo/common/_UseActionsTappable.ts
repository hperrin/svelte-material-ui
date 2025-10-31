import TinyGesture from 'tinygesture';

export default function Tappable(
  node: HTMLElement,
  options: {
    bgColor: string;
    color: string;
  },
) {
  const gesture = new TinyGesture(node);
  let tapTimeout: NodeJS.Timeout;
  let pressTimeout: NodeJS.Timeout;
  let pressed = false;

  node.style.transition =
    (node.style.transition ? node.style.transition + ', ' : '') +
    'background-color .3s ease, color .3s ease';

  gesture.on('tap', () => {
    if (pressed) {
      return;
    }
    node.style.transform = 'perspective(1000px) translate3d(0, 0, 100px)';
    clearTimeout(tapTimeout);
    tapTimeout = setTimeout(() => (node.style.transform = ''), 300);
  });
  gesture.on('doubletap', () => {
    node.style.transform = 'perspective(1000px) translate3d(0, 0, 400px)';
    clearTimeout(tapTimeout);
    tapTimeout = setTimeout(() => (node.style.transform = ''), 300);
  });
  gesture.on('longpress', () => {
    pressed = true;
    node.style.backgroundColor = options.bgColor;
    node.style.color = options.color;
    clearTimeout(pressTimeout);
  });

  gesture.on('panend', () => {
    if (pressed) {
      pressTimeout = setTimeout(() => {
        node.style.backgroundColor = '';
        node.style.color = '';
      }, 300);

      setTimeout(() => {
        pressed = false;
      }, 0);
    }
  });

  return {
    destroy() {
      clearTimeout(tapTimeout);
      clearTimeout(pressTimeout);
      gesture.destroy();
    },
  };
}
