const paragraph = document.querySelector('#paragraph1');

const btn = document.querySelector('button');

let mouseCaption = btn.textContent;
const OVER_MSG = 'Наведен курсор';


btn.addEventListener('mouseover',function(ev){
    this.textContent = OVER_MSG;
});

btn.addEventListener('mouseout',function(ev){
    this.textContent = mouseCaption;
})