import constants from './constants.js'
import main from './main.js'
import resultAndBackdrop from './resultAndBackdrop.js'

const { handleShowResult } =  resultAndBackdrop()

function render(){
    main(constants, handleShowResult)
}

render();



