import rowDice from "./modules/rowDice.js";
import stopRowAndEvalWin from "./modules/stopRowAndEvalWin.js";

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

const click = () => {
    rowDice(diceIsRowing,diceCon);
    stopRowAndEvalWin(diceCon,headText,dices,diceCon);  
};

btn.addEventListener("click",click);

const oneDecPLace = val =>{ 
    let str = val.toString();
    let oneDecPlc = str.slice(0,3);
    return parseFloat(oneDecPlc);
}
