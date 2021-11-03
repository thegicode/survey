import List from './List.js'
import Result from './Result.js'
import Backdrop from './Backdrop.js'

customElements.define('survey-list', List)
customElements.define('result-layer', Result, {extends: 'div'})
customElements.define('backdrop-common', Backdrop, {extends: 'div'})

const _onSubmit = () => {
    const event = new CustomEvent(
        'SHOW_RESULT',
        {
            detail: {}
        }
    )
    document.querySelector('#root').dispatchEvent(event)
}

document
    .querySelector('#form')
    .addEventListener('submit', e => {
        e.preventDefault();
        _onSubmit()
    })