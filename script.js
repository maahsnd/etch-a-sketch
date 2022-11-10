const gridContainer = document.querySelector('.gridContainer');
let gridSize;

function updateGrid(){
    do {
        gridSize = prompt("State grid side length", 16);
    } while (gridSize > 100 && gridSize < 5); 
    return(setGridTemplate(gridSize))
}

function setGridTemplate(gridSize = 16) {

    let templateString= '';

    for (i = 0; i < gridSize; i++){
        templateString += '1fr ';
    }

    templateString = "grid-template-columns: " + templateString + ";";
    gridContainer.style.cssText = templateString;

    makeGrid(gridSize);

    function makeGrid(gridSize = 16){

        for (i = 0; i < (gridSize * gridSize); i++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'theDiv'+i);
            div.setAttribute('class', 'gridDiv');
            div.style.cssText = 'border: 1px black solid; aspect-ratio: 1;';
            div.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'purple';
                e.stopPropagation();
            });
            gridContainer.appendChild(div);
        }
    }
}

setGridTemplate(gridSize);