const endpoint = './c.json';
const input = document.getElementById('input')
const output = document.getElementById('output')

let DATA = []
let result = []

const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  DATA = data
}

const searchHandler = e => {
  output.replaceChildren("")
  const value = e.target.value
  result = DATA.filter( d => d.city.toLowerCase()[0] === value.toLowerCase()[0])
  value.split('').forEach((v, i) => result = DATA.filter( d => d.city.toLowerCase().includes(value.toLowerCase())))
  
  value && result.forEach((e) => output.insertAdjacentHTML('beforeend', `<li>${e.city} &nbsp; &nbsp; &nbsp; <em>${e.population}</em></li>`))
}

getData(endpoint)
input.oninput = searchHandler
