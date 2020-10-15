
const grid = document.querySelector('.grid')  // Connects JS to the 'grid' element in HTML 
const width = 20                              // The grid size (will be 20 * 20)
let snake = [90]                             // The snake array and its starting point 
let food = 1                                  // The starting point of the food
const cells = []                              // The cells array (divs)
const start = document.querySelector('#start')

// Create the grid and push it to an array of cells
for (let i = 0; i < width ** 2; i++) {
const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  //div.innerHTML = i
  cells.push(div)
}

// Click the Start button to begin the game. Food
// appears in a random square
start.addEventListener('click', () => {
  cells[food].classList.remove('food')
  food = Math.floor(Math.random() * 400)
  cells[food].classList.add('food')
  snake -= 1
  cells[snake].classList.add('snake')
})

// Click the Start button to begin the game. The
// snake begins to move
start.addEventListener('click', () => {
  const snakeMove = setInterval(() => {
    cells[snake].classList.remove('snake')
    cells[snake].classList.add('snake')    //REMOVE THIS LINE
//    document.addEventListener('keypress', (event) => {
//      const keyTwo = event.key
//     if (keyTwo === 'w') {
//        snake -= width
//        cells[snake].classList.add('snake')
//    } else if (keyTwo === 's') {
//        snake += width
//        cells[snake].classList.add('snake')
//      } else if (keyTwo === 'a') {
//        snake -= 1
//        cells[snake].classList.add('snake')
//      } else if (keyTwo === 'd') {
//        snake += 1
//        cells[snake].classList.add('snake')
//      } else {
//        snake += 1
//      }
//      clearInterval(snakeMove)
    }, 800)
  })
//})

// Player controls for the snake (W, S, A and D)
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

// Making the snake grow when it meets the food
//function snakeLength(cells[snake] === cells[food]) {
//  snake.push(cells.snake)
//  cells[food].classList.remove('food')
//  food = Math.floor(Math.random() * 400)
//  cells[food].classList.add('food')
//  console.log(snake.Length)
//}

// If the snake hits a wall, game ends
//function endGameWall() {
//  if (snake > width) {
//    return alert("Game Over!")
//  } else if (snake > length) {
//    return alert("Game Over!")
//  } else if (snake % width === 0) {
//    return alert("Game Over!")
//  } else if (snake % width === 0) {
//    return alert("Game Over!")
//  }
//  // Reset the game
//}

// If snake hits itself, game ends
//function endGameHit() {
  // if any part of snake array === any part of snake array
  // then return alert("Game Over!")
  // and Reset the game
//}




