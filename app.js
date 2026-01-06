document.addEventListener("DOMContentLoaded", () => {
  const defaultSession = { calories: 2800 };
  const session = JSON.parse(localStorage.getItem("seche-goat")) || defaultSession;

  document.getElementById("calories").value = session.calories;

  document.getElementById("splash").style.display = "none";
  document.getElementById("app").style.display = "block";
});

function save(){
  const calories = document.getElementById("calories").value;
  localStorage.setItem("seche-goat", JSON.stringify({calories}));
  document.getElementById("status").innerText = "Session sauvegardée 🐐";
}
