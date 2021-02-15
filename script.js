const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector("#clear-btn");
const resizeButton = document.querySelector("#resize-btn");
const GRID_SIZE = 700;
const GRID_BACKGROUND_COLOR = "rgb(240, 244, 248)";
const inputSize = document.querySelector("#size");
let gridItens = [];

clearButton.addEventListener("click", clearSkecth);

resizeButton.addEventListener("click", () => {
    let size = parseInt(inputSize.value);
    if(size < 1 || size > 100){
        return;
    }
    resizeGrid(size);
});

function clearSkecth(){
    gridItens.forEach((gridItem) => {
        gridItem.style.backgroundColor = GRID_BACKGROUND_COLOR;
    });
}

function createGrid(size = 64){
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
    });
}

function resetGrid(){
    gridItens = [];
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function resizeGrid(size = 64){
    resetGrid();
    createGrid(size);
}

function randomColor(e){
    let a = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let c = Math.ceil(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${a},${b},${c})`;
    return;
}

createGrid();