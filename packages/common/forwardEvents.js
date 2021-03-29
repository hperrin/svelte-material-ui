export function forwardEventsBuilder(dispatch, additionalEvents = []) {
  const events = [
    'focus',
    'blur',
    'fullscreenchange',
    'fullscreenerror',
    'scroll',
    'cut',
    'copy',
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'auxclick',
    'click',
    'contextmenu',
    'dblclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',
    'pointerlockchange',
    'pointerlockerror',
    'select',
    'wheel',
    'drag',
    'dragend',
    'dragenter',
    'dragstart',
    'dragleave',
    'dragover',
    'drop',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'pointerover',
    'pointerenter',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointercancel',
    'pointerout',
    'pointerleave',
    'gotpointercapture',
    'lostpointercapture',
    ...additionalEvents,
  ];

  function listen(node, event, callback) {
    node.addEventListener(event, callback);

    return () => {
      node.removeEventListener(event, callback);
    };
  }

  function forward(event) {
    dispatch(event.type, event.isTrusted ? event : event.detail);
  }

  return (node) => {
    const destructors = [];

    for (let i = 0; i < events.length; i++) {
      destructors.push(listen(node, events[i], forward));
    }

    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
      },
    };
  };
}
