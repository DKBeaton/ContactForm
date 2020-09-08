const inputs = document.querySelectorAll('.input');

function focusFunction() {
  const parentElement = this.parentNode;
  parentElement.classList.add('focus');
}

function unFocusFunction() {
  const parentElement = this.parentNode;
  if (this.value == "") {
    parentElement.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunction);
  input.addEventListener('blur', unFocusFunction)
});