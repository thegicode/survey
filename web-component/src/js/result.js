

const resultEl = document.querySelector('#result')
const backdropEl = document.querySelector('#backdrop')

const showResult = () => {
    backdropEl.ariaHidden = false
    resultEl.ariaHidden = false
}

const hideResult = () => {
    backdropEl.ariaHidden = true
    resultEl.ariaHidden = true
}

const addEvents = () => {
    resultEl.querySelector('[data-button="close"]')
        .addEventListener('click', () => {
            hideResult()
        })
    backdropEl.addEventListener('click', () => {
        hideResult()
    })
}

export default () => {

    addEvents()

    return {
        showResult
    }
}