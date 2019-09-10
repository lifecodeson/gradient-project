var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("rndm");

function randomRGB(){
  return Math.floor(Math.random() * 256 );
}

function randomColor(){
  var colorRndm1 = 'rgb(';
  colorRndm1 += randomRGB() + ',';
  colorRndm1 += randomRGB() + ',';
  colorRndm1 += randomRGB() + ')';
	var colorRndm2 = 'rgb(';
  colorRndm2 += randomRGB() + ',';
  colorRndm2 += randomRGB() + ',';
  colorRndm2 += randomRGB() + ')';
	//set random gradient
	body.style.background =
	"linear-gradient(to right, "
	+ colorRndm1
	+ ", "
	+ colorRndm2
	+ ")";
	css.textContent = body.style.background + ";";
	return;
}

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);
