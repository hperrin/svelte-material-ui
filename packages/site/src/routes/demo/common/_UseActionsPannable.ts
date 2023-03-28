import TinyGesture from 'tinygesture';
import { tweened } from 'svelte/motion';
import { cubicInOut } from 'svelte/easing';

export default function Pannable(node: HTMLElement) {
  const gesture = new TinyGesture(node);
  let animationFrame: number | null = null;
  const preventDefault = (event: Event) => {
    event.preventDefault();
  };

  const left = tweened(0, {
    duration: 300,
    easing: cubicInOut,
  });
  const top = tweened(0, {
    duration: 300,
    easing: cubicInOut,
  });

  const leftUnsub = left.subscribe((value) => {
    node.style.left = value + 'px';
  });
  const topUnsub = top.subscribe((value) => {
    node.style.top = value + 'px';
  });

  node.style.transition =
    (node.style.transition ? node.style.transition + ', ' : '') +
    'opacity .3s ease';

  node.addEventListener('touchstart', preventDefault, { passive: false });

  gesture.on('panmove', () => {
    if (animationFrame) {
      return;
    }
    animationFrame = window.requestAnimationFrame(() => {
      if (!gesture.swipingDirection.startsWith('pre-')) {
        node.style.opacity = '0.7';
      } else {
        node.style.opacity = '1';
      }
      node.style.transform =
        'rotate(' + (gesture.touchMoveX / 8 + gesture.touchMoveY / 8) + 'deg)';
      left.set(gesture.touchMoveX, { duration: 0 });
      top.set(gesture.touchMoveY, { duration: 0 });
      animationFrame = null;
    });
  });

  gesture.on('panend', () => {
    if (animationFrame != null) {
      window.cancelAnimationFrame(animationFrame);
    }
    animationFrame = null;
    node.style.transform = '';
    left.set(0);
    top.set(0);
    node.style.opacity = '1';
  });

  return {
    destroy() {
      node.removeEventListener('touchstart', preventDefault, {
        passive: false,
      } as EventListenerOptions);
      if (animationFrame != null) {
        window.cancelAnimationFrame(animationFrame);
      }
      leftUnsub();
      topUnsub();
      gesture.destroy();
    },
  };
}
