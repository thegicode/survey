
export default function Backdrop(props) {
    const { 
        isBackdropHidden,
        hideResult
    } = props

    return(
        <div 
            className="backdrop" 
            aria-hidden={isBackdropHidden}
            onClick={hideResult}
            >
        </div>
    )
}

