var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

// loop through array, add the name of each reindeer to the div
//name of reindeer should be prepended with corresponding color

for (var i = 0; i < reindeer.length && colors.length; i++) {
  hohohoElement.innerHTML += "<div>" + colors[i] + " " + reindeer[i] + "<div>";
}
