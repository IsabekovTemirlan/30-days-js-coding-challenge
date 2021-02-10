const arrows = document.querySelectorAll('#arrow')
const control = document.getElementById('controlBox')
let x, y
x =  (100 / 2) - 10
y = (100 / 2) - 10
control.style.left = x + "%"
control.style.top = y + "%"

document.onkeydown = e => {
  arrows.forEach(arrow => {
    const arrowDir = arrow.className.split(' ')[1]
    if (e.code === arrowDir) {
      if (arrowDir === "ArrowRight") {
        x = x + 2
        arrow.style.borderLeft = '30px solid red'
        control.style.left = x + '%'
      }
      if (arrowDir === "ArrowLeft") {
        x = x - 2
        arrow.style.borderRight = '30px solid red'
        control.style.left = x + '%'
      }
      if (arrowDir === "ArrowUp") {
        y = y - 2
        arrow.style.borderBottom = '30px solid red'
        control.style.top = y + '%'
      }
      if (arrowDir === "ArrowDown") {
        y = y + 2
        arrow.style.borderTop = '30px solid red'
        control.style.top = y + '%'
      }

      document.onkeyup = () => arrows.forEach(arrow => arrow.style = 'none')
    }
  })

  x >= window.outerWidth % 100 + 5 ? x = -18 : null
  y >= window.outerWidth % 100 + 5 ? y = -18 : null
  x <= -19 ? x = window.outerWidth % 100 + 5 : null
  y <= -19 ? y = window.outerWidth % 100 + 5 : null
}