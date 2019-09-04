var userId = ""

var pickId = function(id)
{
	if (id === "vl") { userId = 'Very Liberal' }
	else if (id === "l") { userId = "Liberal" }
	else if (id === "n") { userId = "Neutral" }
	else if (id === "c") { userId = "Conservative" }
	else if (id === "vc") { userId = "Very Conservative" }
	document.getElementById("id-display").innerHTML = userId

	btns = document.getElementsByClassName("id-button")
	for (var i=0; i<btns.length; i++)
	{
		btns[i].disabled = true
	}
}