const btn = document.getElementById("btn");

const colorChanger = () => {
  document.querySelector("h1").innerText = "Awesome!!!";
  document.querySelector("h1").style.color = "Gold";
  document.querySelector("body").style.backgroundColor = "grey";
};

btn.addEventListener("dblclick", colorChanger);
