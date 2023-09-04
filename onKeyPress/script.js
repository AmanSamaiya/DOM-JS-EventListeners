const newLetter = () => {
  const letter = event.key;
  document.querySelector("h3").innerText = letter;
};

document.body.addEventListener("keypress", newLetter);
