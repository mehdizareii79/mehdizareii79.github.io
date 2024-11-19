const desiredRepo = "silvery107.github.io";
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
    $(dateTagClass).text(`Updated ${months[month]} ${day}, ${year}`);
  }
  else if (this.readyState == 4 && this.status == 401) 
  {
    $(dateTagClass).text(`Token Expired!`);
  }
};

xhttp.open("GET", `https://api.github.com/repos/silvery107/${desiredRepo}`, true);
xhttp.setRequestHeader('Authorization', 'Bearer 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');

xhttp.send();
