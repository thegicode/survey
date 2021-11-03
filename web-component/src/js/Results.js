
const eventEl = document.querySelector('#root')

class Results extends HTMLDivElement {
    // static observedAttributes = ['aria-hidden']

    constructor() {
        super()

        eventEl.addEventListener(
            'SHOW_RESULT',
            e => {
                this.show()
            }
        )
        eventEl.addEventListener(
            'HIDE_RESULT',
            e => {
                this.hide()
            }
        )

        this.querySelector('[data-button="close"]')
            .addEventListener('click', e => {
                const event = new CustomEvent(
                    'HIDE_RESULT',
                    {
                        detail: {}
                    }
                )
                eventEl.dispatchEvent(event)
            })
    }

    show () {
        this.ariaHidden = false
    }

    hide() {
        this.ariaHidden = true
    }

    // connectedCallback() {
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    // }
}

export default Results
