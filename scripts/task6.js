let isChanged = false;
let r = 255, g = 255, b = 255;
const body = document.body;
body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
const toggleBody = document.createElement("DIV");
toggleBody.style.width = "45px";
toggleBody.style.height = "20px";
toggleBody.style.backgroundColor = "rgb(200, 200, 200)";
toggleBody.style.borderRadius = "10px";
const toggleSlider = document.createElement("DIV");
toggleSlider.style.width = "16px";
toggleSlider.style.height = "16px";
toggleSlider.style.position = "relative";
toggleSlider.style.top = "2px";
toggleSlider.style.left = "2px";
toggleSlider.style.backgroundColor = "rgb(230, 230, 230)";
toggleSlider.style.borderRadius = "8px";
toggleBody.addEventListener("click", function(){
	if (isChanged){
  	isChanged = false;
    body.style.backgroundColor = "white";   
		const interval = setInterval(function(){
    	if (parseFloat(toggleSlider.style.left) < 0){  
      	r = 255, g = 255, b = 255;
      	body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
				toggleSlider.style.left = "2px";
      	clearInterval(interval);
      } else {      	
      	r += 5, g += 5, b += 5;
      	body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      	toggleSlider.style.left = parseFloat(toggleSlider.style.left) - 1 + "px";
      }
    },10);
  } else {
  	isChanged = true;
    body.style.backgroundColor = "grey";     
		const interval = setInterval(function(){
    	if (parseFloat(toggleSlider.style.left) > 29){       	
      	r = 100, g = 100, b = 100;
      	body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
				toggleSlider.style.left = "27px";
      	clearInterval(interval);
      } else {
      	r -= 5, g -= 5, b -= 5;
      	body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      	toggleSlider.style.left = parseFloat(toggleSlider.style.left) + 1 + "px";
      }
    },10);
  }
});
toggleBody.appendChild(toggleSlider);
body.appendChild(toggleBody);