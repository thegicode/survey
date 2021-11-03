import {EVENT_OBJ, EVENTS } from './EVENTS.js'

const { SHOW_RESULT, HIDE_RESULT } = EVENTS

class Results extends HTMLDivElement {
    // static observedAttributes = ['aria-hidden']

    constructor() {
        super()

        EVENT_OBJ.addEventListener(
            SHOW_RESULT,
            e => {
                this.show()
            }
        )
        EVENT_OBJ.addEventListener(
            HIDE_RESULT,
            e => {
                this.hide()
            }
        )

        this.querySelector('[data-button="close"]')
            .addEventListener('click', e => {
                const event = new CustomEvent(
                    HIDE_RESULT,
                    {
                        detail: {}
                    }
                )
                EVENT_OBJ.dispatchEvent(event)
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
