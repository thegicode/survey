import SurveyForm from './SurveyForm.js';

var Main = function Main(_ref) {
    var showResult = _ref.showResult;

    return React.createElement(
        "main",
        { className: "main" },
        React.createElement(
            "h1",
            null,
            "\uB098\uC758 \uD68C\uBCF5\uD0C4\uB825\uC131 \uC9C0\uC218\uB294?",
            React.createElement("br", null),
            "KRQ-53 \uD14C\uC2A4\uD2B8"
        ),
        React.createElement(
            "div",
            { className: "summary" },
            React.createElement(
                "p",
                null,
                "\uC774 \uD14C\uC2A4\uD2B8\uB294 \"\uD68C\uBCF5\uD0C4\uB825\uC131\"\uC774\uB77C\uB294 \uC88B\uC740 \uCC45\uC744 \uC788\uACE0 \uCC45\uC5D0 \uC788\uB294 \uD68C\uBCF5\uD0C4\uB825\uC131 \uC9C0\uC218 \uD14C\uC2A4\uD2B8\uB97C \uC8FC\uAE30\uC801\uC73C\uB85C \uD558\uAE30 \uC704\uD574 \uB9CC\uB4E4\uC5C8\uB2E4.",
                React.createElement("br", null),
                "\uD14C\uC2A4\uD2B8 \uACB0\uACFC\uC640 \uAD00\uB828\uB41C \uC0C1\uC138\uD55C \uB0B4\uC6A9\uC740 \uCC45\uC744 \uAF2D \uC77D\uC5B4\uBCF4\uAE38 \uBC14\uB780\uB2E4.  "
            ),
            React.createElement(
                "p",
                null,
                "\"\uD68C\uBCF5\uD0C4\uB825\uC131\", \uAE40\uC8FC\uD658 \uC9C0\uC74C, \uC704\uC988\uB364\uD558\uC6B0\uC2A4 "
            )
        ),
        React.createElement(
            "p",
            null,
            "\uAC01 \uBB38\uD56D\uC744 \uC77D\uC740 \uD6C4 \uD574\uB2F9\uD558\uB294 \uD56D\uBAA9\uC5D0 \uCCB4\uD06C\uD574\uC8FC\uC138\uC694."
        ),
        React.createElement(SurveyForm, { showResult: showResult })
    );
};

export default Main;