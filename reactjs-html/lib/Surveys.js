
export default function Surveys(_ref) {
    var questions = _ref.questions;


    var Labels = function Labels(_ref2) {
        var nameIndex = _ref2.nameIndex;

        var strArr = ['전혀 그렇지 않다', '그렇지 않다', '보통이다', '어느 정도 그렇다', '매우 그렇다'];
        var nIdx = 'q' + (nameIndex + 1);
        var labels = strArr.map(function (text, index) {
            var isChecked = index === 2 ? true : false; // For test
            return React.createElement(
                'label',
                { key: index },
                React.createElement('input', { type: 'radio', name: nIdx, value: index + 1, defaultChecked: isChecked }),
                React.createElement(
                    'span',
                    null,
                    text
                )
            );
        });
        return labels;
    };

    var getElement = function getElement(text, index) {
        if (!text) {
            return;
        }
        if (index < 0) {
            return;
        }
        return React.createElement(
            'li',
            { className: 'survey', key: index },
            React.createElement(
                'p',
                { className: 'question' },
                text
            ),
            React.createElement(
                'div',
                { className: 'inputs' },
                React.createElement(Labels, { nameIndex: index })
            )
        );
    };

    var surveys = questions.map(function (text, index) {
        return getElement(text, index);
    });

    return surveys;
}