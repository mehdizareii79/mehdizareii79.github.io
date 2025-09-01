---
---
const desiredRepo = "{{ site.github.repository_nwo }}";
const dateTagClass = ".date";
const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    let repo = JSON.parse(this.responseText);

    var lastUpdated = new Date(repo.pushed_at);
    var day = lastUpdated.getUTCDate();
    var month = lastUpdated.getUTCMonth();
    var year = lastUpdated.getUTCFullYear();
    $(dateTagClass).text(`Last Updated: ${months[month]} ${day}, ${year}`);
  }
  else if (this.readyState == 4 && this.status == 401) 
  {
    $(dateTagClass).text(`Last Updated: Fetch Error`);
  }
};

xhttp.open("GET", `https://api.github.com/repos/${desiredRepo}`, true);
xhttp.send();
