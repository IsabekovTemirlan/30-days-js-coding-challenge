const handlers = document.getElementsByTagName('input'), img = document.getElementById('img');

[...handlers].forEach((h, idx) => {
  const update = ({ target: { value } }) => document.documentElement.style.setProperty(`--${h.id}`, idx === handlers.length - 1 ? value + '' : value + 'px')
  h.onchange = update
  h.onmousemove = update
})