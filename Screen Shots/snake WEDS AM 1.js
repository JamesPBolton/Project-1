/* eslint-disable no-mixed-spaces-and-tabs */

const grid = document.querySelector('.grid')    // Connects JS to the 'grid' element in HTML 
const width = 20                                // The grid size (20 * 20)
const snakeHead = [90]                          // The snake head object 
const snakeBody = [91, 92, 93]                  // The snake body array and its starting point 
let food = 1                                    // The starting point of the food
const cells = []                                // The cells array (divs)
const start = document.querySelector('#start')  // Start button
let direction = {                               // Direction of the snake
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  UP: 'UP',
  DOWN: 'DOWN',
}

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
// The snake begins to move - with the snakeHead joined to the snakeBody 
start.addEventListener('click', () => {
  cells[food].classList.remove('food')    // Food goes on the grid
  food = Math.floor(Math.random() * 400)
  cells[food].classList.add('food')
  
  cells[snakeHead].classList.add('snakeColor')
  snakeBody.unshift(snakeHead)            // Snake head is connected to snake body

  snakeBody.forEach((tile) => {           // Snake body goes on the grid
    cells[tile].classList.remove('snakeColor')
  })
  snakeBody.forEach((tile, i) => {
    snakeBody[i].direction.RIGHT
  })
  snakeBody.forEach((tile) => {
    cells[tile].classList.add('snakeColor')
  })

  const snakeMove = setInterval(() => {     // Snake moves 
    snakeBody.forEach((tile) => {
      cells[tile].classList.remove('snakeColor')
    })
      snakeBody.forEach((tile, i) => {
              //document.addEventListener('keypress', (event) => {
              //  const keyTwo = event.key
              //  if (keyTwo === 'w') {
              //    cells[tile].classList.remove('snakeColor')
              //    snakeBody -= width
              //    cells[snake].classList.add('snakeColor')
              //  } else if (keyTwo === 's') {
              //    cells[tile].classList.remove('snakeColor')
              //    snakeBody += width
              //    cells[snake].classList.add('snakeColor')
              //  } else if (keyTwo === 'a') {
              //    cells[tile].classList.remove('snakeColor')
              //    snakeBody -= 1
              //    cells[snake].classList.add('snakeColor')
              //  } else if (keyTwo === 'd') {
              //    cells[tile].classList.remove('snakeColor')
              //    snakeBody += 1
              //    cells[snake].classList.add('snakeColor')
              //  } 
              //})
          snakeBody.direction
          snakeBody.forEach((tile) => {
          cells[tile].classList.add('snakeColor')
          })
      }, 800)
  })
})    // End of game initialisation from Start button

// Player controls for the snake (W, S, A and D)
document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && !(snakeBody < width)){
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] -= width
      direction = 'UP'
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')
    })
  } else if (key === 's' && !(snakeBody > (width ** 2) - width - 1)) {
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] += width
      direction = 'DOWN'
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')
    })
  } else if (key === 'a' && !(snakeBody % width === 0)) {
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] -= 1
      direction = 'LEFT'
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')
    })
  } else if (key === 'd' && !(snakeBody % width === width - 1)) {
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] += 1
      direction = 'RIGHT'
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')
    })
  }
})

// Making the snake grow when it meets the food
function snakeLength() {
  if (cells.matches('.snakeColor', '.food')) {
    snakeBody.push(cells.snakeBody)
    cells[food].classList.remove('food')
    food = Math.floor(Math.random() * 400)
    cells[food].classList.add('food')
    console.log(snakeBody.Length)
  }
}

// If the snake hits a wall, game ends
//function endGameWall() {
//  if (snakeBody > width) {
//    return alert('Game Over!')
//  } else if (snakeBody > length) {
//    return alert('Game Over!')
//  } else if (snakeBody % width === 0) {
//    return alert('Game Over!')
//  } else if (snakeBody % length === 0) {
//    return alert('Game Over!')
//  }
// clearInterval(interval)
//  gamePlay = confirm('Play Again?')
//  window.location.reload()
//  return
//}

// If snake hits itself, game ends
// function endGameHit() {
//  if any part of snake array === any part of snake array
//  clearInterval(interval)
//  then return alert("Game Over!")
//  return
//  and Reset the game
//  window.location.reload()

// Game Loop if req'd.
// let play = true
// while (play) {
//   / Always make sure you change the condition in the body!!!
// play = confirm('Do you want to keep playing?')
// }