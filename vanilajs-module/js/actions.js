import body from './body.js'
import backdrop from './backdrop.js'
import result from './result.js'

const showResult = (scores) => {
    result.hidden(false, scores)
    backdrop.hidden(false)
    body.scroll(false)
}

const hideResult = () => {
    result.hidden(true)
    backdrop.hidden(true)
    body.scroll(true)
}

const addEvents = () => {
    result.cpnt
       .querySelector('button')
       .addEventListener('click', () => {
           hideResult()
       });

    backdrop.cpnt
       .addEventListener('click', () => {
           hideResult()
       }); 
}


export default () => {

    addEvents()

    return {
        showResult,
        hideResult
    }
}