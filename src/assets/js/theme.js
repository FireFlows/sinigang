// Source - https://stackoverflow.com/questions/61758979/how-do-i-prevent-dark-mode-from-resetting-when-loading-page
// Posted by null
// Retrieved 2026-07-29, License - null
var x = document.getElementById("theme-selector");
var darkOn = localStorage.getItem("dark") == "true" ? true : false;
setTheme();

function setTheme(){
localStorage.setItem("dark", darkOn ? "true" : "false");
  if(darkOn){
    document.body.setAttribute("theme", "dark");
    document.getElementById("theme-selector").innerHTML = "Light";
  }
  else{
    document.body.setAttribute("theme", "light");
    document.getElementById("theme-selector").innerHTML = "Dark";
  }
}

var darkOn = false;
function toggle(){
  darkOn = !darkOn;
  setTheme();
}

togButton.addEventListener("click", toggle);