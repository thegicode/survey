import constants from './constants.js'
import main from './main.js'
// import resultAndBackdrop from './resultAndBackdrop.js'
import actionsFactory from './actions.js'

function render(){

    const actions = actionsFactory()

    // actions.showResult([50, 50, 50])

    // const { handleShowResult } =  resultAndBackdrop()

    main(constants, actions)
}

render();







