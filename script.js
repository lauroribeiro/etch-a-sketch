const gridContainer = document.querySelector(".grid-container");
let gridItens = [];

function resizeGrid(size = 16){
    gridContainer.style["grid-template-columns"]=`repeat(${size}, auto)`;
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const gridItem = document.createElement("div");
            gridItens.push(gridItem);
        }
    }
    gridItens.forEach((gridItem) => {
        gridItem.className = "grid-item";
        gridItem.addEventListener("mouseover", randomColor);
        gridContainer.appendChild(gridItem);
    });
}
resizeGrid();
function randomColor(e){
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${a},${b},${c})`;
    return;
}
