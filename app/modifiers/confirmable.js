import { modifier } from 'ember-modifier';

export default modifier(function confirmable(
  element,
  [verifiableName, targetElement]
) {
  function verifyConfirmation(event) {
    const submitBtn = document.getElementById(targetElement);

    if (event.target.value === verifiableName) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  element.addEventListener('input', verifyConfirmation);

  return () => {
    element.removeEventListener('input', verifyConfirmation);
  };
});
