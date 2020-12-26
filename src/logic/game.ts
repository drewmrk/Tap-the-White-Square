// Pick a slot
let randomSlot = JSON.stringify(Math.round(Math.floor(Math.random() * 9) + 1))

const game = () => {
  // Hide the play button
  document.getElementById('playButton').style.display = 'none'

  // Finish up the function after 15 seconds
  setTimeout(() => {
    localStorage.setItem('lastGameScore', JSON.stringify(localStorage.getItem('currentScore')))
    setTimeout(() => {
      JSON.parse(localStorage.getItem('currentScore')) > JSON.parse(localStorage.getItem('highScore')) &&
        localStorage.setItem('highScore', localStorage.getItem('currentScore'))
      localStorage.setItem('currentScore', JSON.stringify(0))
      window.location.reload()
    }, 5000 /* 5 seconds */)
  }, 10000 /* 10 seconds */)

  // Add/remove classes, attributes and events
  document.getElementById(randomSlot).classList.add('active')
  document.getElementById(randomSlot).classList.remove('inactive')
  document.getElementById(randomSlot).removeAttribute('disabled')
  document.getElementById(randomSlot).addEventListener('click', () => {
    slotClick()
  })
}

const slotClick = () => {
  // Add/remove classes, attributes and events
  document.getElementById(randomSlot).classList.remove('inactive')
  document.getElementById(randomSlot).classList.remove('active')
  document.getElementById(randomSlot).classList.add('inactive')
  document.getElementById(randomSlot).setAttribute('disabled', 'true')
  randomSlot = JSON.stringify(Math.round(Math.floor(Math.random() * 9) + 1))
  localStorage.setItem('currentScore', JSON.parse(localStorage.getItem('currentScore')) + 1)
  game()
}

export default game
