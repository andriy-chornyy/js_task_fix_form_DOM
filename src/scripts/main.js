'use strict';

const inputs = document.querySelectorAll('input');
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = `Enter your ${capitalize(input.name)}:`;

  input.placeholder = capitalize(input.name);

  input.parentNode.insertBefore(label, input);
});

console.log(inputs);
