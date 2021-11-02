import List from './js/List.js'
import result from './js/result.js'

customElements.define('survey-list', List)

const { showResult } = result()

document
    .querySelector('#form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        showResult()
    })