const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector("#clear-btn");
const GRID_SIZE = 700;
const GRID_BACKGROUND_COLOR = "rgb(230, 228, 228)";
let gridItens = [];

clearButton.addEventListener("click", clearGrid);

function clearGrid(){
    gridItens.forEach((gridItem) => {
        gridItem.style.backgroundColor = GRID_BACKGROUND_COLOR;
    });
}

function resizeGrid(size = 16){
    let gridItemSize = GRID_SIZE/size;
    gridContainer.style["grid-template-columns"]=`repeat(${size}, ${gridItemSize}px)`;
    gridContainer.style["grid-template-rows"]=`repeat(${size}, ${gridItemSize}px)`;
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
        console.log(gridItem.className);
    });
}
function randomColor(e){
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${a},${b},${c})`;
    return;
}
resizeGrid();
