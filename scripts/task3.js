
const emailInput = document.querySelector('div > input');

function isItEmail(inputString){
    const hundIndex = inputString.indexOf('@');
    const dotIndex = inputString.indexOf('.');

    return hundIndex > 0 && dotIndex > -1;
}

  emailInput.addEventListener('blur',function(ev){
    console.log(this.value.indexOf('.'));
    console.log(this.value.indexOf('@'));
     
    if ( !isItEmail(this.value)){
        alert('NOT valid email');
    }
})
