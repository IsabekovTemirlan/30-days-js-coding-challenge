const play = document.getElementById('play'),
  clear = document.getElementById('clear'),
  text = document.getElementById('text')

clear.onclick = () => text.value = ''

play.onclick = () => {
  const msg = new SpeechSynthesisUtterance()
  msg.rate = 0.7
  msg.pitch = 2
  msg.text = text.value
  msg.lang = 'en-US'

  text.value.trim() ? speechSynthesis.speak(msg) : alert('Enter your text please!')
}