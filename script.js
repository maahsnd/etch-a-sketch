const gridContainer = document.querySelector('.gridContainer');

for (i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'theDiv'+i);
    div.setAttribute('class', 'gridDiv');
    console.log(div.getAttribute('id'));
    div.style.cssText = 'border: 1px black solid; aspect-ratio: 1;';
    div.addEventListener('mouseover', (e) => {
        //console.log(e);
        e.target.style.backgroundColor = 'purple';
        e.stopPropagation();
    });
    gridContainer.appendChild(div);
}