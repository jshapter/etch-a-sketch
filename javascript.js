const grid = document.getElementById('grid-container');
let pixels = [];


for (let i = 0; i < 256; i++) {
    let pixel = document.createElement('div');
    pixels.push(pixel);
    pixel.classList.add('cell');
    pixel.id = i;
    grid.appendChild(pixel);
}

let setColumns = 'auto '.repeat(Math.sqrt(pixels.length));
grid.style.gridTemplateColumns = setColumns;

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = "black";
    });
});