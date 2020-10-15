/* eslint-disable no-mixed-spaces-and-tabs */

const grid = document.querySelector('.grid')    // Connects JS to the 'grid' element in HTML 
const width = 20                                // The grid size (20 * 20)
const snakeHead = [90]                          // The snake head object 
const snakeBody = [91, 92, 93]                  // The snake body array and its starting point 
let food = 1                                    // The starting point of the food
const cells = []                                // The cells array (divs)
const start = document.querySelector('#start')  // Start button


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
  cells[food].classList.remove('food')
  food = Math.floor(Math.random() * 400)
  cells[food].classList.add('food')

  console.log(snakeBody)                  // Returns 'Object'. Can remove this Console Log
  
  cells[snakeHead].classList.add('snakeColor')
  snakeBody.unshift(snakeHead)            // Snake head is connected to snake body

  snakeBody.forEach((tile) => {
    cells[tile].classList.remove('snakeColor')
  })
  snakeBody.forEach((tile, i) => {
    snakeBody[i] -= 1
  })
  snakeBody.forEach((tile) => {
    cells[tile].classList.add('snakeColor')
  })

  // THIS IS WHERE NEED TO USE STRING FOR DIRECTION

  const snakeMove = setInterval(() => {
    snakeBody.forEach((tile) => {
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
    snakeBody.forEach((tile, i) => {
      snakeBody[i] += 1
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')
    })
  //      }
  //    })
  //    clearInterval(snakeMove)
  }, 800)
})

const getHead = function() {
  return head
}

const move = function (nextCell) {
  const cellClass = nextCell.cellClass
  const tail = snakeBody.pop()
  tail.cellClass = cells[tile].classList.remove('snakeColor')
  head = nextCell
  head.cellClass = cells[tile].classList.add('snakeColor')
  snakeBody.unshift(head)
  snakeBody.forEach(function(part) {
    part.cellClass = cells[tile].classList.add('snakeColor')
  })
  return cellClass
}

const getNextCell = function(snakeHead, cells) {
  let row = snakeHead.row
  let column = snakeHead.column
  direction = getFirstDirection()
  if (direction === DIRECTION.RIGHT) {
    column++
  } else if (direction === DIRECTION.LEFT) {
    column--
  } else if (direction === DIRECTION.UP) {
    row--
  } else if (direction === DIRECTION.DOWN) {
    row++
  }

  let nextCell
  if (row > -1 && row < cells.getRowCount() && 
    column > -1 && column < cells.getColumnCount() ) {
    nextCell = board.cells[row][column]
  }
  directions.shift()
  return nextCell
  
  const addDirection = function (newDirection) {
    directions.push(newDirection)
  }

  const getFirstDirection = function() {
    let result = direction
    if (directions.length > 0) {
      result = directions[0]
    }
    return result
  }

  const getLastDirection = function() {
    let result = direction
    if (directions.length > 0) {
      result = directions[directions.length - 1]
    }
    return result
  }

  const exceededMaxDirections = function() {
    return directions.length > 3
  }

  return {
    exceededMaxDirections: exceededMaxDirections,
    getLastDirection: getLastDirection,
    addDirection: addDirection,
    update: update
  }

}


function listenForInput(game) {
  let firstTime = true

  const movingVertically = function() {
    return !game.exceededMaxDirections() &&
	    game.getLastDirection() !== DIRECTION.RIGHT &&
	    game.getLastDirection() !== DIRECTION.LEFT
  }

  const movingHorizontally = function() {
    return !game.exceededMaxDirections() && 
		  game.getLastDirection() !== DIRECTION.UP &&
	    game.getLastDirection() !== DIRECTION.DOWN
  }

  const changeDirection = function (event) {
    if (firstTime) {
      game.addDirection(DIRECTION.UP)
      firstTime = false
    } else {
      const LEFT_ARROW = 37
      const RIGHT_ARROW = 39
      const UP_ARROW = 38
      const DOWN_ARROW = 40
      if (event.keyCode == LEFT_ARROW && movingVertically()) {
        	game.addDirection( DIRECTION.LEFT)
      } else if (event.keyCode == RIGHT_ARROW && movingVertically()) {
        	game.addDirection( DIRECTION.RIGHT)
      } else if (event.keyCode == UP_ARROW && movingHorizontally()) {
        	game.addDirection( DIRECTION.UP)
      } else if (event.keyCode == DOWN_ARROW && movingHorizontally()) {
        game.addDirection( DIRECTION.DOWN)
      }
    }
  }

  document.onkeydown = null
  document.addEventListener('keydown', changeDirection) 
}








// Player controls for the snake (W, S, A and D)
document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && !(snakeBody < width)){
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] -= width
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  } else if (key === 's' && !(snakeBody > (width ** 2) - width - 1)) {
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] += width
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  } else if (key === 'a' && !(snakeBody % width === 0)) {
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] -= 1
    })
    snakeBody.forEach((tile) => {
      cells[tile].classList.add('snakeColor')})
  } else if (key === 'd' && !(snakeBody % width === width - 1)) {
    snakeBody.forEach((tile, i) => {
      cells[tile].classList.remove('snakeColor')
    })
    snakeBody.forEach((tile, i) => { 
      snakeBody[i] += 1
    })
    snakeBody.forEach((tile) => {
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

