setWidth = ({ style }, value) => style.width = value + "%"
onclick = ({ path }) => path[1].style.width === '100%' ? setWidth(path[1], 25) : setWidth(path[1], 100)

// works the same
// document.onclick = ({ path }) => path[1].style.width === '100%' ? path[1].style.width = '25%' : path[1].style.width = "100%"