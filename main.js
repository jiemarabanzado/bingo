const card1 = [5, 4, 13, 17, 21, 28, 31, 37, 42, 47];
const card2 = [2, 3, 11, 15, 22, 27, 32, 38, 43, 41];
const card3 = [7, 6, 16, 14, 23, 26, 33, 36, 44, 48];
const card4 = [8, 1, 12, 19, 24, 25, 34, 35, 49, 50];
//creazione cards random
//player 1
let new1;
let cambia;
let Change;
let isNew=true 

function Gen1(){
    let ControlNew1=[];
    let cambia=document.querySelectorAll('.Number1');
    for (let index = 0; index< cambia.length; index++) {
        isNew=true;
        if(index==0){
            Change=parseInt(Math.random() * (51 - 1) + 1);
            cambia[index].innerHTML=Change;
            ControlNew1.push(Change);
        }else{
            while(isNew){
                Change=parseInt(Math.random() * (51 - 1) + 1);
                if(ControlNew1.includes(Change)){
                    isNew=true
                }else{
                    cambia[index].innerHTML=Change;
                    ControlNew1.push(Change);
                    isNew=false;
                }       
            }
        }       
    }
}

document.getElementById('gen1-btn').addEventListener('click',Gen1);

document.getElementById('gen1-2-btn').addEventListener('click',Gen1);

document.getElementById('gen1-3-btn').addEventListener('click',Gen1);

document.getElementById('gen1-4-btn').addEventListener('click',Gen1);
    
//2player
function Gen2(){
    let ControlNew1=[];
    let cambia=document.querySelectorAll('.Number2');
    console.log(cambia);
    for (let index = 0; index< cambia.length; index++) {
        isNew=true;
        if(index==0){
            Change=parseInt(Math.random() * (51 - 1) + 1);
            cambia[index].innerHTML=Change;
            ControlNew1.push(Change);
        }else{
            while(isNew){
                Change=parseInt(Math.random() * (51 - 1) + 1);
                if(ControlNew1.includes(Change)){
                    isNew=true
                }else{
                    cambia[index].innerHTML=Change;
                    ControlNew1.push(Change);
                    isNew=false;
                }       
            }
        }       
    }
}

document.getElementById('gen2-btn').addEventListener('click',Gen2);

document.getElementById('gen2-3-btn').addEventListener('click',Gen2);
    
document.getElementById('gen2-4-btn').addEventListener('click',Gen2);

//3player
function Gen3(){
    let ControlNew1=[];
    let cambia=document.querySelectorAll('.Number3');
    for (let index = 0; index< cambia.length; index++) {
        isNew=true;
        if(index==0){
            Change=parseInt(Math.random() * (51 - 1) + 1);
            cambia[index].innerHTML=Change;
            ControlNew1.push(Change);
        }else{
            while(isNew){
                Change=parseInt(Math.random() * (51 - 1) + 1);
                if(ControlNew1.includes(Change)){
                    isNew=true
                }else{
                    cambia[index].innerHTML=Change;
                    ControlNew1.push(Change);
                    isNew=false;
                }       
            }
        }       
    }
}
document.getElementById('gen3-btn').addEventListener('click',Gen3);

document.getElementById('gen3-4-btn').addEventListener('click',Gen3);

//4player
document.getElementById('gen4-btn').addEventListener('click',function(){
    let ControlNew1=[];
    let cambia=document.querySelectorAll('.Number4');
    for (let index = 0; index< cambia.length; index++) {
        isNew=true;
        if(index==0){
            Change=parseInt(Math.random() * (51 - 1) + 1);
            cambia[index].innerHTML=Change;
            ControlNew1.push(Change);
        }else{
            while(isNew){
                Change=parseInt(Math.random() * (51 - 1) + 1);
                if(ControlNew1.includes(Change)){
                    isNew=true
                }else{
                    cambia[index].innerHTML=Change;
                    ControlNew1.push(Change);
                    isNew=false;
                }       
            }
        }       
    }
})


//scelta del numero partecipanti
let active = document.querySelectorAll('.n-players');
let GameSelected=0;

document.getElementById('play1').addEventListener('click', function () {
    active[0].classList.add('active');
    GameSelected=1;
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('confirm').style.display = 'block';
    for (let index = 0; index < card1.length; index++) {
        document.getElementById('p1-card').innerHTML += `<div class="Number1">${card1[index]}</div>`;
    }
    for (let index = 0; index < card2.length; index++) {
        document.getElementById('Cpu-card').innerHTML += `<div class="Number2">${card2[index]}</div>`;
    }
})
document.getElementById('play2').addEventListener('click', function () {
    active[1].classList.add('active');
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('confirm').style.display = 'block';
    for (let index = 0; index < card1.length; index++) {
        document.getElementById('p1-2-card').innerHTML += `<div class="Number1">${card1[index]}</div>`;
    }
    for (let index = 0; index < card2.length; index++) {
        document.getElementById('p2-card').innerHTML += `<div class="Number2">${card2[index]}</div>`;
    }
    GameSelected=2;
})
document.getElementById('play3').addEventListener('click', function () {
    active[2].classList.add('active');
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('confirm').style.display = 'block';
    for (let index = 0; index < card1.length; index++) {
        document.getElementById('p1-3-card').innerHTML += `<div class="Number1">${card1[index]}</div>`;
    }
    for (let index = 0; index < card2.length; index++) {
        document.getElementById('p2-3-card').innerHTML += `<div class="Number2">${card2[index]}</div>`;
    }
    for (let index = 0; index < card3.length; index++) {
        document.getElementById('p3-card').innerHTML += `<div class="Number3">${card3[index]}</div>`;
    }
    GameSelected=3;
})
document.getElementById('play4').addEventListener('click', function () {
    active[3].classList.add('active');
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('confirm').style.display = 'block';
    for (let index = 0; index < card1.length; index++) {
        document.getElementById('p1-4-card').innerHTML += `<div class="Number1">${card1[index]}</div>`;
    }
    for (let index = 0; index < card2.length; index++) {
        document.getElementById('p2-4-card').innerHTML += `<div class="Number2">${card2[index]}</div>`;
    }
    for (let index = 0; index < card3.length; index++) {
        document.getElementById('p3-4-card').innerHTML += `<div class="Number3">${card3[index]}</div>`;
    }
    for (let index = 0; index < card4.length; index++) {
        document.getElementById('p4-card').innerHTML += `<div class="Number4">${card4[index]}</div>`;
    }
    GameSelected=4;
})
let NomeScelto1=0;
let NomeScelto12=0;
let NomeScelto13=0;
let NomeScelto14=0;
let NomeScelto2=0;
let NomeScelto23=0;
let NomeScelto24=0;
let NomeScelto3=0;
let NomeScelto34=0;
let NomeScelto4=0;
let CardChose1=0;
let CardChose12=0;
let CardChose13=0;
let CardChose14=0;
let CardChose2=0;
let CardChose23=0;
let CardChose24=0;
let CardChose3=0;
let CardChose34=0;
let CardChose4=0;
//conferma delle carte
document.getElementById('confirmC1').addEventListener('click',function(){
    CardChose1=1;
    document.getElementById('confirmC1').style.display='none';
    document.getElementById('gen1-btn').style.display='none';
})
document.getElementById('confirmC1-2').addEventListener('click',function(){
    CardChose12=1;
    document.getElementById('confirmC1-2').style.display='none';
    document.getElementById('gen1-2-btn').style.display='none';
})
document.getElementById('confirmC1-3').addEventListener('click',function(){
    CardChose13=1;
    document.getElementById('confirmC1-3').style.display='none';
    document.getElementById('gen1-3-btn').style.display='none';
})
document.getElementById('confirmC1-4').addEventListener('click',function(){
    CardChose14=1;
    document.getElementById('confirmC1-4').style.display='none';
    document.getElementById('gen1-4-btn').style.display='none';
})
document.getElementById('confirmC2').addEventListener('click',function(){
    CardChose2=1;
    document.getElementById('confirmC2').style.display='none';
    document.getElementById('gen2-btn').style.display='none';
})
document.getElementById('confirmC2-3').addEventListener('click',function(){
    CardChose23=1;
    document.getElementById('confirmC2-3').style.display='none';
    document.getElementById('gen2-3-btn').style.display='none';
})
document.getElementById('confirmC2-4').addEventListener('click',function(){
    CardChose24=1;
    document.getElementById('confirmC2-4').style.display='none';
    document.getElementById('gen2-4-btn').style.display='none';
})
document.getElementById('confirmC3').addEventListener('click',function(){
    CardChose3=1;
    document.getElementById('confirmC3').style.display='none';
    document.getElementById('gen3-btn').style.display='none';
})
document.getElementById('confirmC3-4').addEventListener('click',function(){
    CardChose34=1;
    document.getElementById('confirmC3-4').style.display='none';
    document.getElementById('gen3-4-btn').style.display='none';
})
document.getElementById('confirmC4').addEventListener('click',function(){
    CardChose4=1;
    document.getElementById('confirmC4').style.display='none';
    document.getElementById('gen4-btn').style.display='none';
})
//scelta nomi
//one player
document.getElementById('chose-name1').addEventListener('click', function () {
    let scelta1 = document.getElementById('name1').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p1-name').innerHTML = scelta1;
        NomeScelto1=1;
    }
})
//two players
document.getElementById('chose-name1-2').addEventListener('click', function () {
    let scelta1 = document.getElementById('name1-2').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p1-2-name').innerHTML = scelta1;
        NomeScelto12=1;

    }
})
document.getElementById('chose-name2').addEventListener('click', function () {
    let scelta1 = document.getElementById('name2').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p2-name').innerHTML = scelta1;
        NomeScelto2=1;
    }
})
//three player
document.getElementById('chose-name1-3').addEventListener('click', function () {
    let scelta1 = document.getElementById('name1-3').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p1-3-name').innerHTML = scelta1;
        NomeScelto13=1;
    }
})
document.getElementById('chose-name2-3').addEventListener('click', function () {
    let scelta1 = document.getElementById('name2-3').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p2-3-name').innerHTML = scelta1;
        NomeScelto23=1;
    }
})
document.getElementById('chose-name3').addEventListener('click', function () {
    let scelta1 = document.getElementById('name3').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p3-name').innerHTML = scelta1;
        NomeScelto3=1;
    }
})
//four player
document.getElementById('chose-name1-4').addEventListener('click', function () {
    let scelta1 = document.getElementById('name1-4').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p1-4-name').innerHTML = scelta1;
        NomeScelto14=1;
    }
})
document.getElementById('chose-name2-4').addEventListener('click', function () {
    let scelta1 = document.getElementById('name2-4').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p2-4-name').innerHTML = scelta1;
        NomeScelto24=1;
    }
})
document.getElementById('chose-name3-4').addEventListener('click', function () {
    let scelta1 = document.getElementById('name3-4').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p3-4-name').innerHTML = scelta1;
        NomeScelto34=1;
    }
})
document.getElementById('chose-name4').addEventListener('click', function () {
    let scelta1 = document.getElementById('name4').value;
    if (scelta1 == '') {
        alert('inserisci nome');
    } else {
        document.getElementById('p4-name').innerHTML = scelta1;
        NomeScelto4=1;
    }
})



//generazione tabella numeri usciti
let NumTable = [];
NumTable[0] = 1;
for (let index = 1; index < 50; index++) {
    NumTable[index] = NumTable[index - 1] + 1;
}

for (let index = 0; index < 50; index++) {
    document.getElementById('num-table').innerHTML += `<div class="cpu-number">${NumTable[index]}</div>`;
}

//controllo inizio partita
document.getElementById('begin').addEventListener('click', function () {
    if(GameSelected==1){
        if(NomeScelto1==1&&CardChose1==1){
            document.getElementById('cpu').style.display = 'block';
            document.getElementById('begin').style.display = 'none';
        }else{
            alert('inserisci nome e conferma la carta');
        }
    }else if(GameSelected==2){
        if(NomeScelto12==1 && NomeScelto2==1&&CardChose12==1&&CardChose2==1){
            document.getElementById('cpu').style.display = 'block';
            document.getElementById('begin').style.display = 'none';
        }else{
            alert('inserisci nome e conferma la carta');
        }
    }else if(GameSelected==3){
        if(NomeScelto13==1&&NomeScelto23==1&&NomeScelto3==1&&CardChose13==1&&CardChose23==1&&CardChose3==1){
            document.getElementById('cpu').style.display = 'block';
            document.getElementById('begin').style.display = 'none';
        }else{
            alert('inserisci nome e conferma la carta');
        }
    }else if(GameSelected==4){
        if(NomeScelto14==1&&NomeScelto24==1&&NomeScelto34==1&&NomeScelto4==1&&CardChose4==1&&CardChose14==1&&CardChose24==1&&CardChose34==1){
            document.getElementById('cpu').style.display = 'block';
            document.getElementById('begin').style.display = 'none';
        }else{
            alert('inserisci nome e conferma la carta');
        }
    }     
})

let winner;
let TableCount = [];
let NewNum = 0;
let status1=0;
let status2=0;
let status3=0;
let status4=0;
let winners=0
//sistema conteggio numeri
document.getElementById('extract').addEventListener('click', function () {
    let compare = document.querySelectorAll('.cpu-number');
    let check1 = document.querySelectorAll('.Number1');
    let check2 = document.querySelectorAll('.Number2');
    let check3 = document.querySelectorAll('.Number3');
    let check4 = document.querySelectorAll('.Number4');  
    let Here = true;
    while (Here) {
        const a = parseInt(Math.random() * (51 - 1) + 1);
        if (TableCount.includes(a) == false) {
            TableCount.push(a);
            document.getElementById('last-number').innerHTML=a;
            Here = false;
            for (let index = 0; index < compare.length; index++) {
                if (a == compare[index].innerHTML) {
                    compare[index].classList.add('checked');    
                }
            }
            for (let index = 0; index < check1.length; index++) {
                if (a == check1[index].innerHTML) {
                    check1[index].classList.add('had1');
                    status1+=1;       
                }
            }
            for (let index = 0; index < check2.length; index++) {
                if (a == check2[index].innerHTML) {
                    check2[index].classList.add('had2');
                    status2+=1;      
                }
            }
            for (let index = 0; index < check3.length; index++) {
                if (a == check3[index].innerHTML) {
                    check3[index].classList.add('had3');
                    status3+=1;      
                }
            }
            for (let index = 0; index < check4.length; index++) {
                if (a == check4[index].innerHTML) {
                    check4[index].classList.add('had4');
                    status4+=1;
                }
            }
        }
    if(status1==10){
        winners+=1;
    }
    if(status2==10){
        winners+=1;
    }
    if(status3==10){
        winners+=1;
    }
    if(status4==10){
        winners+=1;
    }
    }if(status1==10){
        if(GameSelected==1){
            winner=document.getElementById('p1-name').innerHTML;
        }else if(GameSelected==2){
            winner=document.getElementById('p1-2-name').innerHTML;
        }else if(GameSelected==3){
            winner=document.getElementById('p1-3-name').innerHTML;
        }else if(GameSelected==4){
            winner=document.getElementById('p1-4-name').innerHTML;
        }
    }else if(status2==10){
        if(GameSelected==1){
            winner='Cpu';
        }else if(GameSelected==2){
            winner=document.getElementById('p2-name').innerHTML;
        }else if(GameSelected==3){
            winner=document.getElementById('p2-3name').innerHTML;
        }else if(GameSelected==4){
            winner=document.getElementById('p2-4-name').innerHTML;
        }
    }else if(status3==10){
        if(GameSelected==3){
            winner=document.getElementById('p3-name').innerHTML;
        }else if(GameSelected==4){
            winner=document.getElementById('p3-4-name').innerHTML;
        }
    }else if(status4==10){
        if(GameSelected==4){
            winner=document.getElementById('p4-name').innerHTML;
        }
    }
    if(winners>1){
        document.getElementById('player-cards').style.display='none';
        document.getElementById('extract').style.display='none';
        document.getElementById('cpu').style.display='none';
        document.getElementById('winner').style.display='block';
        document.getElementById('who').innerHTML='pareggio';
    }else if(status1==10||status2==10||status3==10||status4==10){
            document.getElementById('player-cards').style.display='none';
            document.getElementById('extract').style.display='none';
            document.getElementById('cpu').style.display='none';
            document.getElementById('winner').style.display='block';
            document.getElementById('who').innerHTML=winner;
            if(winner=='Cpu'){
                document.getElementById('result').innerHTML='Hai Perso!';
            } else{
                document.getElementById('result').innerHTML='Hai Vinto!';}
           
        }
})
    
