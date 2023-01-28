
const dices = [
    './dice/dice0.jpg',
    './dice/dice1.jpg',
    './dice/dice2.jpg',
    './dice/dice3.jpg',
    './dice/dice4.jpg',
    './dice/dice5.jpg'
];

let diceIsRowing = true;

const headText = document.querySelector('h1');

const diceCon = document.querySelector('.dice-con');

const btn = document.querySelector('.play-btn');




const rowDice = (canRow,rowParent) => {
    const rowElems = rowParent.children;
    if(canRow){
        Array.from(rowElems).forEach(rowElem =>{
            rowElem.style.animationName = 'rowing-dice';
        })
    }
}

const stopRowAndEvalWin = (diceCon,title,diceArr) => {
    const rowingDices = diceCon.children;
    setTimeout(() => Array.from(rowingDices).forEach(rowingDice => {
        evalWin(title,diceArr,diceCon,rowingDice)
    }), 1000);

}

const evalWin = (t,diceArr,diceCon,rowingDice) => {
    const dice = diceCon.children;
    const random = ()=> Math.floor( Math.random() * (diceArr.length - 1))
    let ply1 = random();
    let ply2 = random();

    if (ply1 > ply2) {
        dice[0].src = diceArr[ply1];
        dice[1].src = diceArr[ply2];
        rowingDice.style.animationName = '';
        t.textContent = 'Player 1 wins!'
    }
    else if (ply2 > ply1) {
        dice[0].src = diceArr[ply1];
        dice[1].src = diceArr[ply2];
        t.textContent = 'Player 2 wins!'
        rowingDice.style.animationName = '';
    }
    else{
        dice[0].src = diceArr[ply1];
        dice[1].src = diceArr[ply2];
        t.textContent = "It's a tie!"
        rowingDice.style.animationName = '';

    }
}

const click = () => {
    rowDice(diceIsRowing,diceCon);
    stopRowAndEvalWin(diceCon,headText,dices,diceCon);  
};

btn.addEventListener("click",click);
