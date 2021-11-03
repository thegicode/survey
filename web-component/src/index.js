import List from './js/List.js'
import Result from './js/Result.js'
import Backdrop from './js/Backdrop.js'
import {EVENT_OBJ, EVENTS } from './js/EVENTS.js'

const { SHOW_RESULT } = EVENTS

customElements.define('survey-list', List)
customElements.define('result-layer', Result, {extends: 'div'})
customElements.define('backdrop-layer', Backdrop, {extends: 'div'})

const _onSubmit = () => {
    const event = new CustomEvent(
        SHOW_RESULT,
        {
            detail: {}
        }
    )
    EVENT_OBJ.dispatchEvent(event)
}

document
    .querySelector('#form')
    .addEventListener('submit', e => {
        e.preventDefault();
        _onSubmit()
    })
