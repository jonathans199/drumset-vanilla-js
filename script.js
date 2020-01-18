function playAudio(e) {
  const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`)

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // get keycode from event with "key" class

  if (!audioElement) return // stop function if keyCode pressed is not found
  audioElement.currentTime = 0 // reset playing time to 0, so that it plays instantly

  audioElement.play() // play the audio

  key.classList.add('playing') // add the "playing" class
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return // end if Transform property name its not found

  this.classList.remove('playing') // remove the playing class
}

const keys = document.querySelectorAll('.key') //

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playAudio) // play the audio
