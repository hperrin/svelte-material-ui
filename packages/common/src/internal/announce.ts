/**
 * A screen reader announcer, compatible with the announce function from
 * @material/dom/announce.js.
 *
 * @param message The text to announce with the screen reader.
 * @param options The options, including "priority" and "ownerDocument".
 */
export function announce(
  message: string,
  options: { priority?: 'polite' | 'assertive'; ownerDocument?: Document } = {}
) {
  const priority = options.priority || 'polite';
  const ownerDocument = options.ownerDocument || document;

  const previousElements = ownerDocument.querySelectorAll(
    '[data-smui-dom-announce]'
  );
  if (previousElements.length) {
    previousElements.forEach((el) => {
      el.parentNode?.removeChild(el);
    });
  }

  const el = ownerDocument.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  el.style.height = '1px';
  el.style.overflow = 'hidden';
  el.setAttribute('aria-atomic', 'true');
  el.setAttribute('aria-live', priority);
  el.setAttribute('data-mdc-dom-announce', 'true');
  el.setAttribute('data-smui-dom-announce', 'true');
  ownerDocument.body.appendChild(el);

  window.setTimeout(() => {
    el.textContent = message;

    const clear = () => {
      el.textContent = '';
      el.removeEventListener('click', clear);
    };
    el.addEventListener('click', clear, { once: true });
  }, 100);
}
