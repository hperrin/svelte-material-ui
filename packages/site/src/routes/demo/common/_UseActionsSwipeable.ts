import TinyGesture from 'tinygesture';

export default function Swipeable(node: HTMLElement) {
  const gesture = new TinyGesture(node);
  let timeout: NodeJS.Timeout;
  const preventDefault = (event: Event) => {
    event.preventDefault();
  };

  node.style.transition =
    (node.style.transition ? node.style.transition + ', ' : '') +
    'transform .3s ease';

  node.addEventListener('touchstart', preventDefault, { passive: false });

  gesture.on('swiperight', () => {
    node.style.transform = 'perspective(1000px) translate3d(2000px, 0, 0)';
    clearTimeout(timeout);
    setTimeout(() => (node.style.transform = ''), 1000);
  });
  gesture.on('swipeleft', () => {
    node.style.transform = 'perspective(1000px) translate3d(-2000px, 0, 0)';
    clearTimeout(timeout);
    setTimeout(() => (node.style.transform = ''), 1000);
  });
  gesture.on('swipeup', () => {
    node.style.transform = 'perspective(1000px) translate3d(0, -2000px, 0)';
    clearTimeout(timeout);
    setTimeout(() => (node.style.transform = ''), 1000);
  });
  gesture.on('swipedown', () => {
    node.style.transform = 'perspective(1000px) translate3d(0, 2000px, 0)';
    clearTimeout(timeout);
    setTimeout(() => (node.style.transform = ''), 1000);
  });

  return {
    destroy() {
      node.removeEventListener('touchstart', preventDefault, {
        passive: false,
      } as EventListenerOptions);
      clearTimeout(timeout);
      gesture.destroy();
    },
  };
}
