const arrows = document.querySelectorAll('#arrow')
const date = new Date()
let seconds = date.getSeconds(), minutes = date.getMinutes(), hours = date.getHours()

const start = (s, m, h) => {
  const secStep = 1, minStep = 6, hourStep = 30 // arrow step
  const setStep = (elms, deg) => elms.forEach((el, i) => el.style.transform = `rotate(${deg[i]}deg)`) // change position of the arrow
  m = m * 6 // stabilize the minutes
  h = h >= 12 ? (h - 12) * 30 : h * 30 // stabilize the hours

  const startHandler = () => {
    setStep(arrows, [s, m, h])

    if (s > 360) { m = m + minStep; s = 0 }
    if (m > 360) { h = h + hourStep; m = 0 }
    if (h > 360) h = 0
    s = s + 6
  }

  setInterval(startHandler, secStep * 1000)
}

start(seconds, minutes, hours)