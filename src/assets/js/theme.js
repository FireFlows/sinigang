const theme = localStorage.getItem('data-theme');
document.documentElement.setAttribute("data-theme",theme);

function setTheme() {
  var x = document.getElementById("theme");
  if (x.innerHTML === "Light") {
    x.innerHTML = "Dark";
    localStorage.setItem("data-theme","light")
    document.documentElement.setAttribute("data-theme","light");
  } 
  else {
    x.innerHTML = "Light";
    localStorage.setItem("data-theme","dark")
  document.documentElement.setAttribute("data-theme","dark");
  }
}