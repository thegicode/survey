import constants from './constants.js'
import main from './main.js'
// import resultAndBackdrop from './resultAndBackdrop.js'
import resultView from './result.js'
import backdropView from './backdrop.js'
import actionsView from './actions.js'


function render(){
    const result = resultView()
    const backdrop = backdropView()
    const actions = actionsView(result, backdrop)
    // actions.showResult([50, 50, 50])

    // const { handleShowResult } =  resultAndBackdrop()

    main(constants, actions)
}

render();







