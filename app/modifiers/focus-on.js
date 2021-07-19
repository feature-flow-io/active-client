import { modifier } from 'ember-modifier';
import { nextFrame } from '../utils/timing-helpers';

export default modifier(function focusOn(element, [eventName, targetElement]) {
  async function handleFocus() {
    await nextFrame();
    document.getElementById(targetElement).focus();
  }

  element.addEventListener(eventName, handleFocus);

  return () => {
    element.removeEventListener(eventName, handleFocus);
  };
});
