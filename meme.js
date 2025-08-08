 const cardsArray =[
    {
        name:'Facebook',
        icon:'<i class="fa-brands fa-facebook"></i>'
    },
    {
        name:'Instagram',
        icon:'<i class="fa-brands fa-instagram"></i>'
    },
    {
        name:'Whatsapp',
        icon:'<i class="fa-brands fa-whatsapp"></i>'
    },
    {
        name:'Google',
        icon:'<i class="fa-brands fa-google"></i>'
    },
    {
        name:'Skype',
        icon:'<i class="fa-brands fa-skype"></i>'
    },
    {
        name:'Tik tok',
        icon:'<i class="fa-brands fa-tiktok"></i>'
    },
    {
        name:'Facebook',
        icon:'<i class="fa-brands fa-facebook"></i>'
    },
    {
        name:'Instagram',
        icon:'<i class="fa-brands fa-instagram"></i>'
    },
    {
        name:'Whatsapp',
        icon:'<i class="fa-brands fa-whatsapp"></i>'
    },
    {
        name:'Google',
        icon:'<i class="fa-brands fa-google"></i>'
    },
    {
        name:'Skype',
        icon:'<i class="fa-brands fa-skype"></i>'
    },
    {
        name:'Tik tok',
        icon:'<i class="fa-brands fa-tiktok"></i>'
    }
];

let flippedcard=[];
let matchedcount=0;

shufflecard();
const gameboard = document.getElementById('gameboard')
displaycard();

function shufflecard(){
    for(i=cardsArray.length-1;i>=0;i--){
        const randIndex= Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]]=[cardsArray[randIndex],cardsArray[i]]
    }
}
function displaycard(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameboard.append(card);
        card.addEventListener('click',flipcard);
    })
}
function flipcard(){
    if(flippedcard.length<2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    flippedcard.push(this);
    this.classList.remove('cardback');
    this.innerHTML = cardsArray[cardId].icon;
    if(flippedcard.length==2){
        setTimeout(checkmatch,1000);
    }
}
}

function checkmatch(){
    const card1Id = flippedcard[0].getAttribute('id');
    const card2Id = flippedcard[1].getAttribute('id');
    if(cardsArray[card1Id].name === cardsArray[card2Id].name){
        flippedcard[0].style.border='none';
        flippedcard[0].style.backgroundcolor ='none';
        flippedcard[0].innerHTML = '';
        flippedcard[0].classList.remove('active');
        flippedcard[1].style.border='none';
        flippedcard[1].style.backgroundcolor ='purple';
        flippedcard[1].innerHTML = '';
        flippedcard[1].classList.remove('active');
        matchedcount++;
        checkgameover();
    }
    else{
        flippedcard[0].innerHTML = '';
        flippedcard[0].classList.add('cardback');
        flippedcard[1].innerHTML = '';
        flippedcard[1].classList.add('cardback');
    }
    flippedcard = [];
}
function checkgameover(){
    if(matchedcount== cardsArray.length/2){
        while(gameboard.firstChild){
            gameboard.removeChild(gameboard.firstChild)
        }
        gameboard.innerHtml='Congratulations';
        gameboard.innerHTML='YOU WON';
        gameboard.classList.remove('game');
        gameboard.classList.add('won');
    }
}
