import toggleBtn from "./assets/icon.svg";

export class Select {
  constructor(items) {
    this.items = items
    this.curentItem = items[0]
    this.isOpen = false
    this.select = document.querySelector('.select')
    this.dropdown
    this.title

    this.select.onclick = this.toggle.bind(this)
  }

  init() {
    this.select.insertAdjacentHTML('afterbegin', generateTemplate(this.curentItem))
    this.title = this.select.childNodes[0].childNodes[1]
    this.dropdown = document.querySelector('.select__dropdown')
    this.dropdown.innerHTML = itemList(this.items, this.curentItem).join('')
  }

  toggle({ target: { classList, textContent } }) {
    if (classList[0] === "select__item") {
      this.selectItem(textContent)
      this.title.textContent = textContent
    }
    this.isOpen = !this.isOpen
    this.dropdown.style.display = this.isOpen ? "block" : "none"
  }

  selectItem(value) {
    this.curentItem = value
    this.dropdown.innerHTML = itemList(this.items, this.curentItem).join('')
  }
}

function generateTemplate(selectedItem) {
  return `<div class="select__box">
            <span>${selectedItem}</span>
            <img id="close" src="${toggleBtn}" alt="" />
          </div>
          <div class="select__dropdown"></div>
          `
}


function itemList(itemTextArr, curentItem) {
  return itemTextArr.map(item => {
    if (item === curentItem) return;
    return `<div class="select__item"><span>${item}</span></div>`
  })
}