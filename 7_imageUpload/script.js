function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes == 0) return '0 Byte'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}

function shortName(str) {
  const split = str.split('.')
  let filename = split[0]
  if (str.length > 6) { filename = filename.substring(0, 6); }
  return `${filename}...${filename[filename.length - 1]}.${split[1]}`
}

function element(tag, classes = [], content) {
  const node = document.createElement(tag)
  classes.length ? node.classList.add(...classes) : null
  content ? node.textContent = content : null
  return node
}

const rewriteInfo = el => {
  el.style.bottom = 0
  el.innerHTML = '<div class="preview-info-progress"></div>'
}

const $ = selector => document.querySelector(selector)

class Upload {
  constructor(selector, options = {}) {
    this.options = options
    this.files = []
    this.input = $(selector)
    this.preview = $(".preview")
    this.open = $("#open")
    this.upload = $('#upload')

    if (this.options.multi) { this.input.setAttribute('multiple', true) }
    if (Array.isArray(this.options.formats)) { this.input.setAttribute('accept', this.options.formats.join(',')) }

    this.open.onclick = () => this.openHandler()
    this.preview.onclick = e => this.removeHandler(e)
    this.input.onchange = e => this.changleHandler(e)
    this.upload.onclick = e => this.uploadHandler(e)
  }

  openHandler() { this.input.click() }

  changleHandler(e) {
    if (!e.target.files.length) { return }
    this.files = [...e.target.files]
    this.preview.innerHTML = ''
    this.upload.style.display = 'inline'

    this.files.forEach(file => {
      if (!file.type.match('image')) { return }

      const reader = new FileReader()

      reader.onload = (e) => {
        const src = e.target.result

        this.preview.insertAdjacentHTML('afterbegin', `
          <div class="preview-image">
            <div class="preview-remove" data-name="${file.name}">&times;</div>
            <img src="${src}" alt="${file.name}"/>
            <div class="preview-info"><span>${shortName(file.name)}</span> ${bytesToSize(file.size)}</div>
          </div>
        `)
      }

      reader.readAsDataURL(file)
    })
  }

  removeHandler(e) {
    if (!e.target.dataset) { return }

    const { name } = e.target.dataset
    this.files = this.files.filter(file => file.name !== name)
    !this.files.length ? this.upload.style.display = 'none' : null

    const block = this.preview.querySelector(`[data-name="${name}"]`).closest('.preview-image')

    block.classList.add('removing')
    setTimeout(() => block.remove(), 300)
  }

  uploadHandler() {
    this.preview.querySelectorAll('.preview-remove').forEach( e => e.remove())
    const previewInfo = this.preview.querySelectorAll('.preview-info')
    previewInfo.forEach(rewriteInfo)

    this.preview.querySelectorAll('.preview-info-progress').forEach(el => setInterval(() => el.style.width = "100%", 1000))
    this.files = []
    
    setInterval(() => {
      this.preview.innerHTML = ''
      this.upload.style.display = 'none'
    }, 3000)
  }
}


new Upload('#file', {
  multi: true,
  formats: ['.jpg', '.jpeg', '.png']
});