var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var useState = React.useState;
var useEffect = React.useEffect;

import Main from './Main.js';
import Backdrop from './Backdrop.js';
import Result from './Result.js';

export default function Page(props) {
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        scores = _useState2[0],
        setScores = _useState2[1];

    var _useState3 = useState(true),
        _useState4 = _slicedToArray(_useState3, 2),
        isBackdropHidden = _useState4[0],
        setBackdropHidden = _useState4[1];

    var _useState5 = useState(true),
        _useState6 = _slicedToArray(_useState5, 2),
        isResultHidden = _useState6[0],
        setResultHidden = _useState6[1];

    var _useState7 = useState(true),
        _useState8 = _slicedToArray(_useState7, 2),
        isBodyScroll = _useState8[0],
        setBodyScroll = _useState8[1];

    useEffect(function () {
        document.body.dataset.scroll = isBodyScroll;
    });

    var showResult = function showResult(scores) {
        if (scores.length < 3) {
            return;
        }

        setScores(scores);

        setBackdropHidden(false);
        setResultHidden(false);
        setBodyScroll(false);
    };

    function hideResult() {
        setBackdropHidden(true);
        setResultHidden(true);
        setBodyScroll(true);
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Main, { showResult: showResult }),
        React.createElement(Backdrop, {
            isBackdropHidden: isBackdropHidden,
            hideResult: hideResult }),
        React.createElement(Result, {
            scores: scores,
            isResultHidden: isResultHidden,
            hideResult: hideResult })
    );
}