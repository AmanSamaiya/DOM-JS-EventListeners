const btn = document.getElementById("btn");

const colorChanger = () => {
  document.querySelector("button").style.backgroundColor = "green";
  document.querySelector("button").style.fontSize = "15px";
  document.querySelector("button").style.height = "40px";
  document.querySelector("button").style.width = "200px";
  document.querySelector("button").innerText = "I am small now !";
};



const newcolorChanger = () => {
  document.querySelector("button").style.backgroundColor = "#fbff00";
  document.querySelector("button").style.fontSize = "35px";
  document.querySelector("button").style.height = "80px";
  document.querySelector("button").style.width = "600px";
  document.querySelector("button").innerText = "I am big again !";
};



btn.addEventListener("mouseover", colorChanger);



btn.addEventListener("mouseout", newcolorChanger);

