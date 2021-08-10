
const useState = React.useState;

import Main from './Main.js'
import Backdrop from './Backdrop.js'
import Result from './Result.js'


export default (props) => {

    const [scores, setScores] = useState([]);
    const [isBackdropHidden, setBackdropHidden] = useState(true);
    const [isResultHidden, setResultHidden] = useState(true);


    const showResult = (scores) => {
        if(scores.length < 3) {
            return;
        }

        setScores(scores)

        document.body.dataset.scroll = false;
        setBackdropHidden(false)
        setResultHidden(false)
    }


    function hideResult(){
        document.body.dataset.scroll = true;
        setBackdropHidden(true)
        setResultHidden(true)
    }

    return(
        <React.Fragment>
            <Main showResult={showResult} />  
            <Backdrop 
                isBackdropHidden={isBackdropHidden} 
                hideResult={hideResult} />      
            <Result 
                scores={scores} 
                isResultHidden={isResultHidden}
                hideResult={hideResult} />      
        </React.Fragment>
    )
}

