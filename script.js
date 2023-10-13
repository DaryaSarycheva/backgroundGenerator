var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


 color1.value = "#ff0000"; 
 color2.value = "#0000ff";
 setGradient();

function setGradient() {
	body.style.background = 
	 "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
 
	css.textContent = body.style.background + ";";
}

random.addEventListener("click", generateRandomColor); 

function generateRandomColor(){
	 var randomColor1 = getRandomColor();
     var randomColor2 = getRandomColor();

 		color1.value = randomColor1;
        color2.value = randomColor2;

	}
setGradient()

function getRandomColor(){
	var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        
			}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 

