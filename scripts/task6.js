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


const TO_OFF = true;
const TO_ON = false;
const POS_OFF = 2;
const POS_ON = 27;
const TRANSITION_QUANT = 20;

//let colorArray = [255,255,255];
const firstColors = [250,250,250];
const secondColors = [
	getColorInput('red'),
	getColorInput('green'),
	getColorInput('blue')
];

function rampColor(parameter, delta, Limit, direction){
	parameter -= delta * direction;
	if (direction < 0){
		return parameter > Limit ? Limit : Math.floor(parameter);
	} else {
		return parameter < Limit ? Limit : Math.floor(parameter);
	}	
}

function getColorInput(color = 'red'){
	const userInput = +prompt("Input " + color + " from  0 to 255", "100");
	return Math.floor(userInput) % 256 || 100;
}

function calculateDeltaColors(colors1, colors2){
	const deltas = [];
	for(let i = 0; i < colors1.length; i++ ){
		deltas[i] = (colors1[i] - colors2[i])/32;
	}
	return deltas;
}

const deltaColors = calculateDeltaColors(firstColors,secondColors);

function getRgb(r,g,b){
	return "rgb(" + r + "," + g + "," + b + ")";
}

function getRgbFromArr(arr){
	return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}
 
function toggleChange(startColorArray = [255, 255, 255], endColorArray = [100, 100, 100]){
	let colors = [];

/**
 * 
 * actionToggle(isChanged)  функция плвного премещения слайдера с одновременнім изменением цвета фона
 */
	function actionToggle(isChanged){
	 let left = parseFloat(toggleSlider.style.left );
	 const direction = +isChanged * -2 + 1;// -1 or +1
	 
	 		/**плавное перемещение вправо или влево */
	 colors = colors.map((c, i) => rampColor(c, 
											deltaColors[i], 
											isChanged ? startColorArray[i] : endColorArray[i], 
											direction));
	 toggleSlider.style.left = parseFloat(toggleSlider.style.left) + direction + "px";

		// if (isChanged){
		// 	colors = colors.map((c, i) => rampLimitedUp(c, deltaColors[i], startColorArray[i]));
		// 	toggleSlider.style.left = decrementPos(toggleSlider.style.left);
		// } else {
		// 	colors = colors.map((c, i) => rampLimitedDown(c, deltaColors[i], endColorArray[i]) );
		// 	toggleSlider.style.left = incrementPos(toggleSlider.style.left); 
		// }

		body.style.backgroundColor = getRgbFromArr(colors);

			  		/**условия окончания включения */
				if (isChanged && left < POS_OFF - 2){  
						colors = startColorArray;
						toggleSlider.style.left = POS_OFF + "px";
						clearInterval(interval);	
				}
				/**условия окончания отключения */
				if (!isChanged && left > POS_ON + 2){  
					colors = endColorArray;
					toggleSlider.style.left = POS_ON + "px";
					clearInterval(interval);
				}	
				toggleSlider.lastPosition = left;
	}

	colors = this.isChanged ? endColorArray : startColorArray;
	const interval = setInterval(actionToggle, TRANSITION_QUANT, this.isChanged);

this.isChanged = !this.isChanged;

 }
//============================================================

const body = document.body;
body.style.backgroundColor = getRgbFromArr(firstColors);
//============================================================
const toggleBody = document.createElement("DIV");
toggleBody.style.width = "45px";
toggleBody.style.height = "20px";
toggleBody.style.backgroundColor = "rgb(200, 200, 200)";
toggleBody.style.borderRadius = "10px";

toggleBody.isChanged = false;
//============================================================
const toggleSlider = document.createElement("DIV");
toggleSlider.style.width = "16px";
toggleSlider.style.height = "16px";
toggleSlider.style.position = "relative";
toggleSlider.style.top = "2px";
toggleSlider.style.left = "2px";
toggleSlider.style.backgroundColor = "rgb(230, 230, 230)";
toggleSlider.style.borderRadius = "8px";


// toggleBody.addEventListener("click", function(){
// 	toggleChange(firstColors, secondColors);
// }); 

toggleBody.addEventListener("click",toggleChange.bind(toggleBody, firstColors, secondColors)); 

toggleBody.appendChild(toggleSlider);
body.appendChild(toggleBody);