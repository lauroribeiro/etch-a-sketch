const gridContainer = document.querySelector(".grid-container");
let gridItens = [];

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const gridItem = document.createElement("div");
        gridItens.push(gridItem);
    }
}
gridItens.forEach((gridItem) => {
    gridItem.className = "grid-item";
    gridItem.addEventListener("mouseover", 
        (e) => e.target.style.backgroundColor = "pink");
    gridContainer.appendChild(gridItem);
});

