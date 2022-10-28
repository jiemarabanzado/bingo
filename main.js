const card1=[5,4,13,17,21,28,31,37,42,47];
const card2=[2,3,11,15,22,27,32,38,43,41];
const card3=[7,6,16,14,23,26,33,36,44,48];
const card4=[8,1,12,19,24,25,34,35,49,50];
let active=document.querySelectorAll('.n-players');

//creazione cards
//1 player
for (let index = 0; index < card1.length; index++) {
    document.getElementById('p1-card').innerHTML+=`<div class="Number1">${card1[index]}</div>`;}
//2player
for (let index = 0; index < card1.length; index++) {
    document.getElementById('p1-2-card').innerHTML+=`<div class="Number2">${card1[index]}</div>`;}
for (let index = 0; index < card2.length; index++) {
        document.getElementById('p2-card').innerHTML+=`<div class="Number2">${card2[index]}</div>`;}
//3player
for (let index = 0; index < card1.length; index++) {
    document.getElementById('p1-3-card').innerHTML+=`<div class="Number1">${card1[index]}</div>`;} 
for (let index = 0; index < card2.length; index++) {
    document.getElementById('p2-3-card').innerHTML+=`<div class="Number2">${card2[index]}</div>`;} 
for (let index = 0; index < card3.length; index++) {
    document.getElementById('p3-card').innerHTML+=`<div class="Number3">${card3[index]}</div>`;}  
//4player
for (let index = 0; index < card1.length; index++) {
    document.getElementById('p1-4-card').innerHTML+=`<div class="Number1">${card1[index]}</div>`;} 
for (let index = 0; index < card2.length; index++) {
    document.getElementById('p2-4-card').innerHTML+=`<div class="Number2">${card2[index]}</div>`;} 
for (let index = 0; index < card3.length; index++) {
    document.getElementById('p3-4-card').innerHTML+=`<div class="Number3">${card3[index]}</div>`;}
for (let index = 0; index < card4.length; index++) {
    document.getElementById('p4-card').innerHTML+=`<div class="Number4">${card4[index]}</div>`;}

                //scelta del numero partecipanti
document.getElementById('play1').addEventListener('click',function(){
    active[0].classList.add('active');
    document.getElementById('player-selection').style.display='none';
    })
document.getElementById('play2').addEventListener('click',function(){
    active[1].classList.add('active');
    document.getElementById('player-selection').style.display='none';
})
document.getElementById('play3').addEventListener('click',function(){
    active[2].classList.add('active');
    document.getElementById('player-selection').style.display='none';
})
document.getElementById('play4').addEventListener('click',function(){
    active[3].classList.add('active');
    document.getElementById('player-selection').style.display='none';
})

             //scelta nomi
//one player
document.getElementById('chose-name1').addEventListener('click',function(){
    let scelta1=document.getElementById('name1').value;
    console.log(scelta1);
    document.getElementById('p1-name').innerHTML=scelta1;
})
//two players
document.getElementById('chose-name1-2').addEventListener('click',function(){
    let scelta1=document.getElementById('name1-2').value;
    console.log(scelta1);
    document.getElementById('p1-2-name').innerHTML=scelta1;
})     
document.getElementById('chose-name2').addEventListener('click',function(){
    let scelta1=document.getElementById('name2').value;
    console.log(scelta1);
    document.getElementById('p2-name').innerHTML=scelta1;
})      
//three player
document.getElementById('chose-name1-3').addEventListener('click',function(){
    let scelta1=document.getElementById('name1-3').value;
    console.log(scelta1);
    document.getElementById('p1-3-name').innerHTML=scelta1;
})  
document.getElementById('chose-name2-3').addEventListener('click',function(){
    let scelta1=document.getElementById('name2-3').value;
    console.log(scelta1);
    document.getElementById('p2-3-name').innerHTML=scelta1;
})  
document.getElementById('chose-name3').addEventListener('click',function(){
    let scelta1=document.getElementById('name3').value;
    console.log(scelta1);
    document.getElementById('p3-name').innerHTML=scelta1;
})  
//four player
document.getElementById('chose-name1-4').addEventListener('click',function(){
    let scelta1=document.getElementById('name1-4').value;
    console.log(scelta1);
    document.getElementById('p1-4-name').innerHTML=scelta1;
})  
document.getElementById('chose-name2-4').addEventListener('click',function(){
    let scelta1=document.getElementById('name2-4').value;
    console.log(scelta1);
    document.getElementById('p2-4-name').innerHTML=scelta1;
})  
document.getElementById('chose-name3-4').addEventListener('click',function(){
    let scelta1=document.getElementById('name3-4').value;
    console.log(scelta1);
    document.getElementById('p3-4-name').innerHTML=scelta1;
})  
document.getElementById('chose-name4').addEventListener('click',function(){
    let scelta1=document.getElementById('name4').value;
    console.log(scelta1);
    document.getElementById('p4-name').innerHTML=scelta1;
})  



//generazione tabella numeri usciti
let NumTable=[];
NumTable[0]=1;
for (let index = 1; index <= NumTable.length; index++) {
    NumTable[index]=NumTable[index-1]+1;
}
console.log(NumTable);