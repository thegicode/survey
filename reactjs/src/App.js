import React, {useState, useEffect} from 'react';

import Main from './Main.js'
import Backdrop from './Backdrop.js'
import Result from './Result.js'

import './App.css';

function App() {
    
    const [scores, setScores] = useState([]);
    const [isBackdropHidden, setBackdropHidden] = useState(true);
    const [isResultHidden, setResultHidden] = useState(true);
    const [isBodyScroll, setBodyScroll] = useState(true);

    useEffect( () => {
        document.body.dataset.scroll = isBodyScroll;
    }, [isBodyScroll])

    const showResult = (scores) => {
        if(scores.length < 3) {
            return;
        }

        setScores(scores)

        setBodyScroll(false)
        setBackdropHidden(false)
        setResultHidden(false)
    }

    function hideResult(){
        setBodyScroll(true)
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

export default App;
