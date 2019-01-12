/**
 * Есть такой код
https://jsfiddle.net/kvwnj9pa/
он имитирует кнопку "toggle". Имитирует нормально, но выглядит ужасно.
Необходимо отрефакторить код:
а) разнести код по функциям.
б) сделать универсальный вариант при котором мы можем настраивать цвета,
в которые должен окрашиваться фон (сейчас это только серый) например,
сделать так, что цвет задавался через аргументы и параметры
 */

//let isChanged = false;
const TO_OFF = true;
const TO_ON = false;
const POS_OFF = 2;
const POS_ON = 27;

let colorArray = [255,255,255];
const firstColors = [180,180,180];
const secondColors = [50,50,50];

function calculateDeltaColors(colors1, colors2){
	const deltas = [];
	for(let i = 0; i < colors1.length; i++ ){
		deltas[i] = Math.floor((colors1[i] - colors2[i])/32);
	}
	return deltas;
}
const deltaColors = calculateDeltaColors(firstColors,secondColors);
console.log(deltaColors);

//let r = 255, g = 255, b = 255;

function getRgb(r,g,b){
	return "rgb(" + r + "," + g + "," + b + ")";
}

function getRgbFromArr(arr){
	return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

// function sliderInfoManager(startColorArray = [255, 255, 255], endColorArray = [100, 100, 100]){
// 	const color = startColorArray;
// 	let leftInPx = 2;
// 	function getColorArray(){
// 		return color;
// 	} 
// 	return getColorArray;
// };

function incrementPos(left){
	return parseFloat(left) + 1 + "px"
}

function decrementPos(left){
	return parseFloat(left) - 1 + "px"
}
 
function toggleChange(event, startColorArray = [255, 255, 255], endColorArray = [100, 100, 100]){
	let colors = [];
// console.log(colors);
// console.log(event);
	if (this.isChanged){
  	this.isChanged = TO_ON;
		//body.style.backgroundColor = "white";  
		colors = endColorArray; 
		const interval = setInterval(function(){
    	if (parseFloat(toggleSlider.style.left) < POS_OFF - 2){  
      	colors = startColorArray;
				toggleSlider.style.left = POS_OFF + "px";
      	clearInterval(interval);
      } else {      	
				colors = colors.map((c, i) => c + deltaColors[i] );
      	toggleSlider.style.left = decrementPos(toggleSlider.style.left);
			}
			body.style.backgroundColor = getRgbFromArr(colors);
    },100);
  } else {
		this.isChanged = TO_OFF;
		colors = startColorArray;
		const interval = setInterval(function(){
    	if (parseFloat(toggleSlider.style.left) > POS_ON + 2){       	
      	colors = endColorArray;
				toggleSlider.style.left = POS_ON + "px";
      	clearInterval(interval);
      } else {
      	colors = colors.map((c, i) => c - deltaColors[i]  );
       	toggleSlider.style.left = incrementPos(toggleSlider.style.left);
			}
			body.style.backgroundColor = getRgbFromArr(colors);
    },100);
  }
}
//============================================================

const body = document.body;
body.style.backgroundColor = getRgbFromArr(colorArray);
//============================================================
const toggleBody = document.createElement("DIV");
toggleBody.style.width = "45px";
toggleBody.style.height = "20px";
toggleBody.style.backgroundColor = "rgb(200, 200, 200)";
toggleBody.style.borderRadius = "10px";
//============================================================
const toggleSlider = document.createElement("DIV");
toggleSlider.style.width = "16px";
toggleSlider.style.height = "16px";
toggleSlider.style.position = "relative";
toggleSlider.style.top = "2px";
toggleSlider.style.left = "2px";
toggleSlider.style.backgroundColor = "rgb(230, 230, 230)";
toggleSlider.style.borderRadius = "8px";

toggleSlider.isChanged = false;
//const event = toggleBody.onclick;

toggleBody.addEventListener("click", toggleChange);//, firstColors, secondColors));

toggleBody.appendChild(toggleSlider);
body.appendChild(toggleBody);