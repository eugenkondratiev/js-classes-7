const NEW_NAME_MSG = `Input new name. 
Type Escape or Stop to finish.`;
const DEFAULT_NAME = 'Eugen';

function isItTheEnd(str){
    return str.toLowerCase() === 'stop' || str.toLowerCase() === 'escape'; 
}


function addNewName(){
    const newName = prompt(NEW_NAME_MSG,'John') || DEFAULT_NAME;
    
    if (isItTheEnd(newName)){
        btn.removeEventListener('click', addNewName);
    } else {
        const newPar = document.createElement('p');
        newPar.textContent = newName;
        btn.parentNode.insertBefore(newPar, btn);
    }
}

const btn =  document.getElementsByTagName('button').item(0);
btn.addEventListener('click', addNewName);

