const theme = localStorage.getItem('data-theme');
document.documentElement.setAttribute("data-theme",theme);

function setDarkTheme() {
  localStorage.setItem("data-theme","dark")
  document.documentElement.setAttribute("data-theme","dark");
	}
function setLightTheme() {
    localStorage.setItem("data-theme","light")
    document.documentElement.setAttribute("data-theme","light");
	}