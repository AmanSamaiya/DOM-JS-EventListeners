const btn = document.getElementById("btn");

const colorChanger = () => {
  document.querySelector("button").style.backgroundColor = "green";
  document.querySelector("button").style.fontSize = "15px";
  document.querySelector("button").style.height = "40px";
  document.querySelector("button").style.width = "200px";
  document.querySelector("button").innerText = "I am small now !";
};

btn.addEventListener("mouseover", colorChanger);

