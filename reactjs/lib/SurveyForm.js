var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Surveys from './Surveys.js';

var EXCEPTION_NUMBERS = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30, 34, 35, 36, 40, 41, 42, 51, 52, 53];
var PART_NUMBERS = [18, 36, 53];

/** 각 영역별[PARTS_NUMBERS로 구분] 점수를 합산하여 배열로 리턴 */
var getScores = function getScores(formData, exceptNumbers, partNumbers) {

    var scores = [];
    var sum = 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = formData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];


            var idx = Number(key.slice(1));
            var score = Number(value);

            // 6에서 빼는 항목 계산 
            if (exceptNumbers.includes(idx)) {
                score = 6 - value;
            }

            sum = sum + score;

            // 영역 구분 항목까지 합산 후 배열에 추가
            if (partNumbers.includes(idx)) {
                scores.push(sum);
                sum = 0;
            }
            // obj[key] = score;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    ;

    return scores;
};

/** Form submit Event */
var handleSubmit = function handleSubmit(props) {
    return function (event) {
        event.preventDefault();
        var showResult = props.showResult;

        var formData = new FormData(event.target);
        var scores = getScores(formData, EXCEPTION_NUMBERS, PART_NUMBERS);
        if (!scores) {
            return;
        }
        showResult(scores);
    };
};

export default (function (props) {
    return React.createElement(
        "form",
        { onSubmit: handleSubmit(props) },
        React.createElement(
            "ol",
            null,
            React.createElement(Surveys, null)
        ),
        React.createElement(
            "button",
            { type: "submit", className: "submitButton" },
            "\uC644\uB8CC"
        )
    );
});