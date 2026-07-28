var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var site_data = JSON.parse(this.responseText);
	  const websiteUpdate = new Date(site_data.updated_at).toLocaleString([],{
		/* 
		NOTE:
		By default, time is displayed HH:MM:SS.
		However, that the "website last updated" script 
		gets data from GitHub, while "page last updated"
		gets data from Neocities.
		The "deploy to neocities" script (.github/workflows/deploy.yml) always runs after
		the GitHub repo is updated, so the time always 
		shows that the page was updated a few seconds 
		after the GitHub repo, which makes no sense.
		My "solution" to this is just hiding the seconds
		from the date.
		- Fire
		*/
		hour12: true,
		weekday: "short",
		hour:'2-digit',
		minute:"2-digit",
		month:"numeric",
		day:"numeric",
		year:"numeric"
	  })
	  document.getElementById("wlu").innerHTML = websiteUpdate;

    }
  };
  xhttp.open("GET", "https://api.github.com/repos/FireFlows/sinigang", true);
  xhttp.send();

const pageUpdate = new Date(document.lastModified).toLocaleString([],{
	hour12: true,
	weekday:"short",
	hour:"2-digit",
	minute:"2-digit",
	month:"numeric",
	day:"numeric",
	year:"numeric",
});
document.getElementById("lu").innerHTML = pageUpdate;
