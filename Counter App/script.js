const addOne = document.getElementById("increment");

const minusOne = document.getElementById("decrement");

const reset = document.getElementById("resetvalue");

var value = document.getElementById("value").innerText;

const increaseByOne = () => {
  value = Number(value) + 1;
  document.getElementById("value").innerText = value;
  return value;
};

const decreaseByOne = () => {
  value = Number(value) - 1;
  document.getElementById("value").innerText = value;
  return value;
};

const resetter = () => {
  value = 0;
  document.getElementById("value").innerText = value;
  return value;
};

addOne.addEventListener("click", increaseByOne);

minusOne.addEventListener("click", decreaseByOne);

reset.addEventListener("click", resetter);
