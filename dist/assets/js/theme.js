document.body.setAttribute("data-theme",localStorage.getItem("data-theme"))

function setDarkTheme() {
  document.body.setAttribute("data-theme","dark");
  localStorage.setItem("data-theme","dark")
}
function setLightTheme() {
    document.body.removeAttribute("data-theme","dark");
    localStorage.setItem("data-theme","")
}

