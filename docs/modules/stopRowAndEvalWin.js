

const stopRowAndEvalWin = (diceCon,title,diceArr) => {
    const rowingDices = diceCon.children;
    setTimeout(() => Array.from(rowingDices).forEach(rowingDice => {
        evalWin(title,diceArr,diceCon)
    }), 1000);

}

const evalWin = (t,diceArr,diceCon) => {
    const dice = diceCon.children;
    const random = ()=> Math.floor( Math.random() * (diceArr.length - 1))
    let ply1 = random();
    let ply2 = random();

    if (ply1 > ply2) {
        t.textContent = 'Player 1 wins!'
        rowingDice.style.animationName = '';
        dice[0].src = diceArr[ply1];
        dice[1].src = diceArr[ply2];
    }
    else if (ply2 > ply1) {
        t.textContent = 'Player 2 wins!'
        rowingDice.style.animationName = '';
        dice[0].src = diceArr[ply1];
        dice[1].src = diceArr[ply2];
    }
    else{
        t.textContent = "It's a tie!"
        rowingDice.style.animationName = '';
        dice[0].src = diceArr[ply1];
        dice[1].src = diceArr[ply2];

    }
}

export default stopRowAndEvalWin