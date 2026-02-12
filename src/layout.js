// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

  // Inserting your header and footer:
  document.body.insertAdjacentHTML("afterbegin", headerEl);
  document.body.insertAdjacentHTML("beforeend", footerEl);

  // To insert something inside another element:
  const wrapperElement = document.querySelector(".my-wrapper"); // <- your selector here
  if (wrapperElement) wrapperElement.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperElement) wrapperElement.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  // Other initializations:
  initActiveLinks();

  // your javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/src", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}


function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/src/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
    <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `
<nav>
		<div class="avatar">
			<img src="${nesting}/img/avatar.png" style="border-bottom: 4px solid purple;" alt="Eito as a child, scowling.">
		</div>
		<div class="menu">
<iframe src="https://free.timeanddate.com/clock/iaa72f5u/n412/fs17/fc800080/tct/pct/tt0/tw1/tm1/th2/ta1/tb4" frameborder="0" class="nomobile" width="149" height="40" allowtransparency="true"></iframe><br><br>
      <a href="${nesting}/index.html">Home</a><br><br>
			<a href="${nesting}/about.html">About</a><br><br>
			<a href="${nesting}/stuff.html">Stuff</a><br><br>
			<a href="${nesting}/sitemap.html">Sitemap</a><br>
   		</div>
	<a href="//clap.fc2.com/post/sinigang/?url=https%3A%2F%2Fsinigang.neocities.org%2F&title=Fire%27s+Site%21" class="nomobile" target="_blank" title="Web Clap by FC2"><img src="//clap.fc2.com/images/button/white/sinigang?url=https%3A%2F%2Fsinigang.neocities.org%2F&amp;lang=en" alt="Web Clap by FC2" style="border:none;" /></a>
  <span class="nomobile"><br></span><br>
  <img src="${nesting}/img/love_and_peace.png" class="nomobile" alt="Love and peace Eito sticker" style="max-width:100%;height:auto;width:190px;">
  
  </nav>

`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `
<aside><br>
<iframe width="180" height="180" style="border:none" src="https://dimden.dev/moon?custom=1&textColor=%23800080&linkColor=%23000000&styleUrl=${nesting}/style.css" name="dimdenmoonwidget"></iframe>

</aside>
`;