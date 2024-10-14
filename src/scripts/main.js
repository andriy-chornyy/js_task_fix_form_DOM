'use strict';
// input.parentNode и input.name не равны null и не пустые,

const inputs = document.querySelectorAll('form input');

const capitalize = (str) => {
  if (str.length > 0 && str !== null) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);


  if (input.name.length > 0 && input.name !== null) {
    label.textContent = `Enter your ${capitalize(input.name)}:`;
    input.placeholder = capitalize(input.name);
  }

  input.parentNode.insertBefore(label, input);
});
