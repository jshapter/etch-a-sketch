let grid = document.getElementById('grid-container');
let square = 16;
let cellArr = [];
let colours = 'black'

function canvas(dim) {
    for (let i = 0; i < dim * dim; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('cell');
        pixel.id = i;
        cellArr.push(i);
        grid.appendChild(pixel);
    }
    console.log(cellArr)
    let setColumns = 'auto '.repeat(square);
    grid.style.gridTemplateColumns = setColumns;
    draw(colours);
}

function draw(colours) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = colours;
        });
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = 'white';
    });
    const btn = document.querySelector('#clear');
    btn.addEventListener('click', () => {
        cell.style.backgroundColor = "white";
    });
    });
}

function x16() {
    for (let x = 0; x < cellArr.length; x++) {
        let delCell = document.getElementById(x);
        delCell.remove();
    }
    square = 16;
    cellArr = []
    document.getElementById("x16").disabled = true;
    document.getElementById("x16").style.borderColor = 'green';
    document.getElementById("x32").disabled = false;
    document.getElementById("x64").disabled = false;
    canvas(square);
}

function x32() {
    for (let j = 0; j < cellArr.length; j++) {
        let delCell = document.getElementById(j);
        delCell.remove();
    }
    square = 32;
    cellArr = []
    document.getElementById("x16").disabled = false;
    document.getElementById("x32").disabled = true;
    document.getElementById("x32").style.borderColor = 'green';
    document.getElementById("x64").disabled = false;
    canvas(square);
}

function x64() {
    for (let j = 0; j < cellArr.length; j++) {
        let delCell = document.getElementById(j);
        delCell.remove();
    }
    square = 64;
    cellArr = []
    document.getElementById("x16").disabled = false;
    document.getElementById("x32").disabled = false;
    document.getElementById("x64").disabled = true;
    document.getElementById("x64").style.borderColor = 'green';
    canvas(square);
}

function colour(clickID) {
    console.log(colours)
    colours = clickID
    console.log(colours)
    draw(colours);
}

document.getElementById("x16").style.borderColor = 'green';
document.getElementById("x16").disabled = true;
canvas(square)