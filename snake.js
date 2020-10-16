
const grid = document.querySelector('.grid')    // Connects JS to the 'grid' element in HTML 
const width = 20                                // The grid size (20 * 20 = 400 cells)
let snakeBody = [90, 91, 92]                    // The snake array and its starting point 
let food = 1                                    // Default starting point of the food
const cells = []                                // The cells array (divs)
const start = document.querySelector('#start')  // Start button
let direction = 'RIGHT'                         // Used to direct the snake once it's going
let points = 0                                  // Points

// Create the grid and push it to an array of cells
for (let i = 0; i < width ** 2; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  grid.appendChild(cell)
  //div.innerHTML = i
  cells.push(cell)
}

// Stops arrow keys moving the screen
var arrow_keys_handler = function (e) {
  switch (e.keyCode) {
    case 37: case 39: case 38: case 40:
      e.preventDefault(); break
    default: break
  }
}
window.addEventListener('keydown', arrow_keys_handler, false)

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') direction = 'LEFT'
  else if (event.key === 'ArrowRight') direction = 'RIGHT'
  else if (event.key === 'ArrowUp') direction = 'UP'
  else if (event.key === 'ArrowDown') direction = 'DOWN'
})

function nextSnakeHead() {
  let snakeHead = snakeBody[0]
  if (direction === 'LEFT') snakeHead -= 1
  else if (direction === 'RIGHT') snakeHead += 1
  else if (direction === 'UP') snakeHead -= width
  else if (direction === 'DOWN') snakeHead += width
  return snakeHead
}

// Click the Start button to begin the game. 
start.addEventListener('click', () => {

  // Food appears on grid
  randomFood()

  // Snake appears on the grid
  snakeBody.forEach((part) => {
    cells[part].classList.add('snakeColor')
  })

  // Snake continues to move and it follows the set direction
  const snakeMove = setInterval(() => {

    // Ensure snake hasn't hit a wall
    // checkForWall()

    snakeBody.forEach((part) => {
      cells[part].classList.remove('snakeColor')
    })

    // Movement: snake body follows snake head
    const snakeHead = nextSnakeHead()
    snakeBody.unshift(snakeHead)
    if (snakeHead === food) {
      cells[food].classList.remove('food')
      points += 100
      randomFood()
    } else {
      snakeBody.pop()
    }
    snakeBody.forEach((part) => {
      cells[part].classList.add('snakeColor')
    })
  }, 350)
})

// Generates food in a random place
function randomFood() {
  cells[food].classList.remove('food')
  food = Math.floor(Math.random() * 400)
  cells[food].classList.add('food')
}

// If the snake hits a wall, the game ends
function checkForWall() {
  const snakeHead = snakeBody[0]
  if (cells[snakeHead] === width) {
    alert('Game Over!')
  } else if (cells[snakeHead] === length) {
    alert('Game Over!')
  } else if (cells[snakeHead] % width === 0) {
    alert('Game Over!')
  } else if (cells[snakeHead] % length === 0) {
    alert('Game Over!')
  }
  clearInterval(interval)
}

