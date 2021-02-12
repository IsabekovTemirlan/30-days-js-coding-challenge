export class Select {
  constructor(items) {
    this.items = items
    this.selectedItem = items[0]
    this.isOpen = false
    this.select = document.querySelector('.select')
    this.select.insertAdjacentHTML('afterbegin', [generateTemplate(this.selectedItem), generateItemsContainer()].join(''))
    this.listItems = generateItems(items, this.selectedItem)

    this.close = document.querySelector('#close')
    this.close.onclick = this.open.bind(this)
  }

  init() {    
    this.itemsContainer = document.querySelector('.select__dropdown')
    this.itemsContainer.insertAdjacentHTML('beforeend', this.listItems.join(''))
  }

  open() {
    this.isOpen = !this.isOpen
    this.itemsContainer.style.display = this.isOpen ? 'none' : 'block'
  }

  close() {}

  selectById(id) {}

  destroy() {}
}

function generateTemplate(selectedItem) {
  return `<div class="select__box">
            <span>${selectedItem}</span>
            <svg id="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgb(255, 255, 255);transform:-ms-filter;"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><path d="M12 13.586L7.707 9.293 6.293 10.707 12 16.414 17.707 10.707 16.293 9.293z"></path></svg>
          </div>`
}

function generateItemsContainer() {
  return `<div class="select__dropdown"></div>`
}

function generateItems(itemTextArr, curentItem) {
  return itemTextArr.map( item => {
    if (item === curentItem) return;
    return `<div class="select__item enter"><span>${item}</span></div>`
  })
}