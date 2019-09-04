var userId = ""
var userZip = 0

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

var getZip = function(zip)
{
	console.log(zip)
	console.log(zip.toString().length)
	if (zip.toString().length === 5)
	{
		userZip = zip
		document.getElementById("zipcode").disabled = true
		document.getElementById("zip-display").innerHTML = userZip
	}
}
