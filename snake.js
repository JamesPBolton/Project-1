
const grid = document.querySelector('.grid')  // Connects JS to the 'grid' element in HTML 
const width = 20 		                          // The grid
let snake = 22 			                          // The starting point of the snake 
const cells = [] 		                          // The snake array

// Create the grid and push it to an array of cells

for (let i = 0; i < width ** 2; i++) {
const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  //div.innerHTML = i
  cells.push(div)
}

cells[snake].classList.remove('snake')
snake -= 1
cells[snake].classList.add('snake')

document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && !(snake < width)) {
    cells[snake].classList.remove('snake')
    snake -= width
    cells[snake].classList.add('snake')
  } else if (key === 's' && !(snake > (width ** 2) - width - 1)) {
    cells[snake].classList.remove('snake')
    snake += width
    cells[snake].classList.add('snake')
  } else if (key === 'a' && !(snake % width === 0)) {
    cells[snake].classList.remove('snake')
    snake -= 1
    cells[snake].classList.add('snake')
  } else if (key === 'd' && !(snake % width === width - 1)) {
    cells[snake].classList.remove('snake')
    snake += 1
    cells[snake].classList.add('snake')
  }
})














