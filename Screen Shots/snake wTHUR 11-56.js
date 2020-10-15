/* eslint-disable no-mixed-spaces-and-tabs */

const grid = document.querySelector('.grid')    // Connects JS to the 'grid' element in HTML 
const width = 20                                // The grid size (20 * 20 = 400 cells)
let snakeBody = [90, 91, 92]                    // The snake array and its starting point 
let food = 1                                    // Default starting point of the food
const cells = []                                // The cells array (divs)
const start = document.querySelector('#start')  // Start button
let direction = 'RIGHT'                         // Used to direct the snake once it's going

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
  cells[food].classList.remove('food')        // Food goes on the grid
  food = Math.floor(Math.random() * 400)
  cells[food].classList.add('food')

  document.addEventListener('keypress', (event) => {    // User controls direction of snake
    const key = event.key
    if (key === 'w' && !(snakeBody < width)) {
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

  const snakeMove = setInterval(() => {        // Snake continues to move and follows direction
    snakeBody.forEach((tile, i) => {
      cells[snakeBody[i]].classList.remove('snakeColor') 
      if (direction === 'RIGHT') {
        snakeBody[i] += 1
      } else if (direction === 'LEFT') {
        snakeBody[i] -= 1
      } else if (direction === 'UP') {
        snakeBody[i] -= width                   // This needs changing (whole snake moves)
      } else if (direction === 'DOWN') {
        snakeBody[i] += width
      }
      cells[snakeBody[i]].classList.add('snakeColor')
    })
  }, 1200)

  // Makes the snake grow when it meets the food
  function snakeEats() {
    console.log('hello')
    if (cells[snakeBody].classList.contains('food')) {
      console.log('snake eating')
      snakeBody.unshift(cells.snakeBody)             // Or snakeBody.++ Or snakeBody.unshift()
      cells[food].classList.remove('food')
      food = Math.floor(Math.random() * 400)
      cells[food].classList.add('food')
    }
  }

  // If the snake hits a wall, the game ends
  function endGameWall() {
    if (snakeBody > width) {
       alert('Game Over!')
    } else if (snakeBody > length) {
       alert('Game Over!')
    } else if (snakeBody % width === 0) {
       alert('Game Over!')
    } else if (snakeBody % length === 0) {
       alert('Game Over!')
    }
    clearInterval(interval)
    //gamePlay = confirm('Play Again?')
    //window.location.reload()
    //return
  }
})

// If snake hits itself, game ends
// function endGameHit() {
//  if any part of snake array === any part of snake array
//  clearInterval(interval)
//  then return alert("Game Over!")
//  return
//  and Reset the game
//  window.location.reload()
//}

// Game Loop if required ??
// let play = true
// while (play) {
//   / Always make sure you change the condition in the body!
// play = confirm('Play Again?')
// }