document.documentElement.setAttribute("data-theme",localStorage.getItem('data-theme'));
function setTheme() {
  var x = document.getElementById("theme");
  if (x.innerHTML === "Light") {
    x.innerHTML = "Dark";
    document.documentElement.setAttribute("data-theme","light");
    localStorage.setItem("data-theme","light")  
} 
  else {
    x.innerHTML = "Light";
    localStorage.setItem("data-theme","dark")
  document.documentElement.setAttribute("data-theme","dark");
  }
}