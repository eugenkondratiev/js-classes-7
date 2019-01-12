
const parrotInput = document.querySelector('input');

parrotInput.addEventListener('focus',function(ev){
   this.style.backgroundColor = '#69F0AE';  
});

parrotInput.addEventListener('blur',function(ev){
    this.style.backgroundColor = 'FF8A80';
});


// const workField = window.document.querySelector('object');

// console.log(workfield);


/**
 * интересно как получить доступ к onload. чтоб изменить фон инпута уже 
 * после создания
 * при такой разметке.
 * получается что документом становится создаваемый автоматически документ 
 * во "фрейме" <object>
 * 
 * ...пока не получилось...
 */



