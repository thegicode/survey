
const useState = React.useState;
const useEffect = React.useEffect;

import Main from './Main.js'
import Backdrop from './Backdrop.js'
import Result from './Result.js'

const Page = (props) => {

    const [scores, setScores] = useState([]);
    const [isBackdropHidden, setBackdropHidden] = useState(true);
    const [isResultHidden, setResultHidden] = useState(true);
    const [isBodyScroll, setBodyScroll] = useState(true);

    useEffect( () => {
        document.body.dataset.scroll = isBodyScroll;
    })

    const showResult = (scores) => {
        if(scores.length < 3) {
            return;
        }

        setScores(scores)

        setBackdropHidden(false)
        setResultHidden(false)
        setBodyScroll(false)
    }

    function hideResult(){
        setBackdropHidden(true)
        setResultHidden(true)
        setBodyScroll(true)
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

export default Page  


