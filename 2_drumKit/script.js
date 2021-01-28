const keys = ['a','s','d','f','g','h','j','k','l']
const box = document.querySelector('.wrapper')

keys.forEach( (key) => {
  const $el = `<div id="key${key}" class="key-box"><h1>${key}</h1></div>`
  box.insertAdjacentHTML('beforebegin', $el)
})

document.onkeyup = e => {
  keys.forEach(key => {
    if (key === e.key) {
      const pressedEl = document.getElementById('key' + key)
      pressedEl.classList.add('onpress')
      pressedEl.classList.remove('down')
      const interval = setInterval(() => {
        pressedEl.classList.remove('onpress')
        pressedEl.style.border = "2px solid white"
        clearInterval(interval)
      }, 1600)
    }
  })
}

document.onkeydown = e => {
  keys.forEach(key => {
    if (key === e.key) {
      const pressedEl = document.getElementById('key' + key)
      pressedEl.style.border = "2px solid red"
      pressedEl.classList.add('down')
    }
  })
}