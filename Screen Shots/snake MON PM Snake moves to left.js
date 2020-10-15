
const grid = document.querySelector('.grid')  // Connects JS to the 'grid' element in HTML 
const width = 20                              // The grid size (will be 20 * 20)
let snake = [90, 91, 92]                      // The snake array and its starting point 
let food = 1                                  // The starting point of the food
const cells = []                              // The cells array (divs)
const start = document.querySelector('#start')

//const snakeHead = snake.shift()              // The first part of the snake array

// Create the grid and push it to an array of cells
for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  //div.innerHTML = i
  cells.push(div)
}

// Click the Start button to begin the game. 
// Food appears in a random square
// The snake begins to move
start.addEventListener('click', () => {
  cells[food].classList.remove('food')
  food = Math.floor(Math.random() * 400)
  cells[food].classList.add('food')
  console.log(snake)    // Can remove this Console Log
  snake.forEach((tile) => {
    cells[tile].classList.remove('snakeColor')
  })
  snake.forEach((tile, i) => {
    snake[i] -= 1
  })
  snake.forEach((tile) => {
    cells[tile].classList.add('snakeColor')
  })
  
  const snakeMove = setInterval(() => {
    snake.forEach((tile) => {
  //    document.addEventListener('keypress', (event) => {
  //      const keyTwo = event.key
  //      if (keyTwo === 'w') {
  //        cells[tile].classList.remove('snakeColor')
  //        snake -= width
  //        cells[snake].classList.add('snakeColor')
  //      } else if (keyTwo === 's') {
  //        cells[tile].classList.remove('snakeColor')
  //        snake += width
  //        cells[snake].classList.add('snakeColor')
  //      } else if (keyTwo === 'a') {
  //        cells[tile].classList.remove('snakeColor')
  //        snake -= 1
  //        cells[snake].classList.add('snakeColor')
  //      } else if (keyTwo === 'd') {
  //        cells[tile].classList.remove('snakeColor')
  //        snake += 1
  //        cells[snake].classList.add('snakeColor')
  //      } else {
      cells[tile].classList.remove('snakeColor')
    })
    snake.forEach((tile, i) => {
      snake[i] -= 1
    })
    snake.forEach((tile) => {
      cells[tile].classList.add('snakeColor')
    })
  //      }
  //    })
  //    clearInterval(snakeMove)
  }, 500)
})

// Player controls for the snake (W, S, A and D)
document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && !(snake < width)){
    snake.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snake.forEach((tile, i) => { 
      snake[i] -= width
    })
    snake.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  } else if (key === 's' && !(snake > (width ** 2) - width - 1)) {
    snake.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snake.forEach((tile, i) => { 
      snake[i] += width
    })
    snake.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  } else if (key === 'a' && !(snake % width === 0)) {
    snake.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snake.forEach((tile, i) => { 
      snake[i] -= 1
    })
    snake.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  } else if (key === 'd' && !(snake % width === width - 1)) {
    snake.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snake.forEach((tile, i) => { 
      snake[i] += 1
    })
    snake.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  }
})



// Making the snake grow when it meets the food
// function snakeLength() {
//  if ([cells]snakeColor === [cells]food) {
//    return
//    snake.push(cells.snake)
//    cells[food].classList.remove('food')
//    food = Math.floor(Math.random() * 400)
//    cells[food].classList.add('food')
//    console.log(snake.Length)
//  }
// }

// If the snake hits a wall, game ends
//function endGameWall() {
//  if (snake > width) {
//    return alert('Game Over!')
//  } else if (snake > length) {
//    return alert('Game Over!')
//  } else if (snake % width === 0) {
//    return alert('Game Over!')
//  } else if (snake % length === 0) {
//    return alert('Game Over!')
//  }
//  gamePlay = confirm('Play Again?')
//  window.location.reload()
//}

// If snake hits itself, game ends
//function endGameHit() {
// if any part of snake array === any part of snake array
// then return alert("Game Over!")
// and Reset the game
//window.location.reload()
//}

