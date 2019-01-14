

function increaseFirstParFont(){
    const newFontSize = 50;
    updateElementFontSize('#paragraph1', newFontSize);

}

function updateElementFontSize(selector, newSize){
    document.querySelector(selector).style.fontSize = newSize + "px"; 
}


/**
 * попробовать онклик в html для разнообразия
 */