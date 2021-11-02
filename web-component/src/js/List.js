import { QUESTIONS }  from './CONSTANTS.js'

const TEMPLATE = `<ol id="surveys" class="surveys"></ol>`

class List extends HTMLElement {
    constructor() {
        super()

        this._getElement = this._getElement.bind(this)
    }

    _getElement(text, index) {
        const node = this.itemTemplate
            .content
            .firstElementChild
            .cloneNode(true) 
        node.dataset.index = index
        node.querySelector('[data-text="question"]')
            .textContent = text
        node.querySelectorAll('input[type="radio"]')
            .forEach( (el, idx) => {
                el.name = `q${index+1}`

                // for test
                if (idx === 0) {
                    el.checked = true
                }
            })
        return node
    }
    
    _updateList() {
        QUESTIONS
            .map(this._getElement)
            .forEach( el => {
                this.list.appendChild(el)
            })
    }

    connectedCallback() {
        this.innerHTML = TEMPLATE
        this.itemTemplate = document
            .querySelector('[data-template="surveys"]')

        this.list = this.querySelector('#surveys')

        this._updateList()
    }
}

export default List
