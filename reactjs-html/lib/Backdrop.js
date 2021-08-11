
var Backdrop = function Backdrop(props) {
    var isBackdropHidden = props.isBackdropHidden,
        hideResult = props.hideResult;


    return React.createElement("div", {
        className: "backdrop",
        "aria-hidden": isBackdropHidden,
        onClick: hideResult
    });
};

export default Backdrop;