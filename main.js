const card1=[5,4,13,17,21,28,31,37,42,47];
const card2=[2,5,11,15,22,27,32,38,43,41];
const card3=[7,6,16,14,23,26,33,36,44,48];
const card4=[8,1,12,19,24,25,34,35,49,50];
let active=document.querySelectorAll('.n-players');
document.getElementById('play1').addEventListener('click',function(){
    active[0].classList.add('active');
})