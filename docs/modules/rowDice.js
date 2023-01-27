
const rowDice = (canRow,rowParent) => {
    const rowElems = rowParent.children;
    if(canRow){
       Array.from(rowElems).forEach(rowElem =>{
            rowElem.style.animationName = 'rowing-dice';
       })
    }
}


export default rowDice;
