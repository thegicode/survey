
var Result = function Result(props) {
    var scores = props.scores,
        isResultHidden = props.isResultHidden,
        hideResult = props.hideResult;


    var total = 0;
    scores.forEach(function (p) {
        return total = total + p;
    });

    var mailStr = "\uCD1D\uC810: " + total + ", \uC790\uAE30\uC870\uC815\uB2A5\uB825: " + scores[0] + ", \uB300\uC778\uAD00\uACC4\uB2A5\uB825: " + scores[1] + ", \uAE0D\uC815\uC131: " + scores[2];

    return React.createElement(
        "div",
        {
            className: "result",
            "aria-hidden": isResultHidden },
        React.createElement(
            "h2",
            null,
            "\uD14C\uC2A4\uD2B8 \uACB0\uACFC"
        ),
        React.createElement(
            "div",
            { className: "myScore" },
            "\uB098\uC758 \uD68C\uBCF5\uD0C4\uB825\uC131 \uC9C0\uC218 :",
            React.createElement(
                "strong",
                { className: "__score", "data-score": "total" },
                total
            )
        ),
        React.createElement(
            "h3",
            null,
            "\uD68C\uBCF5\uD0C4\uB825\uC131 \uC9C0\uC218 ",
            React.createElement("br", null),
            React.createElement(
                "span",
                null,
                "= 1. \uC790\uAE30\uC870\uC808\uB2A5\uB825 + 2. \uB300\uC778\uAD00\uACC4\uB2A5\uB825 + 3. \uAE0D\uC815\uC131"
            )
        ),
        React.createElement(
            "dl",
            { className: "guides" },
            React.createElement(
                "dt",
                null,
                "220\uC810 \uC774\uC0C1"
            ),
            React.createElement(
                "dd",
                null,
                "\uB2F9\uC2E0\uC740 \uB300\uB2E8\uD788 \uD68C\uBCF5 \uD0C4\uB825\uC131\uC774 \uB192\uC740 \uC0AC\uB78C\uC774\uB2E4. \uC6EC\uB9CC\uD55C \uBD88\uD589\uD55C \uC0AC\uAC74\uC740 \uB2F9\uC2E0\uC744 \uD754\uB4E4\uC5B4\uB193\uC9C0 \uBABB\uD55C\uB2E4. \uC624\uD788\uB824 \uC5ED\uACBD\uC740 \uB2F9\uC2E0\uC744 \uB354 \uB192\uC740 \uACF3\uC73C\uB85C \uC62C\uB824\uB193\uAE30 \uC704\uD55C \uC2A4\uD504\uB9C1\uBCF4\uB4DC\uC774\uB2C8 \uC990\uAC81\uAC8C \uBC1B\uC544\uB4E4\uC77C \uC77C\uC774\uB2E4."
            ),
            React.createElement(
                "dt",
                null,
                "212\uC810 \uC774\uC0C1"
            ),
            React.createElement(
                "dd",
                null,
                "\uC0C1\uC704 20%"
            ),
            React.createElement(
                "dt",
                null,
                "200\uC810 \uC774\uC0C1"
            ),
            React.createElement(
                "dd",
                null,
                "\uC548\uC2EC"
            ),
            React.createElement(
                "dt",
                null,
                "190\uC810 \uC774\uD558(\uD3C9\uADE0 195\uC810)"
            ),
            React.createElement(
                "dd",
                null,
                "\uD68C\uBCF5\uD0C4\uB825\uC131\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uB178\uB825\uD558\uB294 \uAC83\uC774 \uC88B\uB2E4."
            ),
            React.createElement(
                "dt",
                null,
                "180\uC810 \uC774\uD558"
            ),
            React.createElement(
                "dd",
                null,
                "\uB2F9\uC2E0\uC740 \uC0AC\uC18C\uD55C \uBD80\uC815\uC801\uC778 \uC0AC\uAC74\uC5D0\uB3C4 \uC27D\uAC8C \uC601\uD5A5 \uBC1B\uB294 \uB098\uC57D\uD55C \uC874\uC7AC\uB2E4. \uB2F9\uC2E0\uC740 \uB418\uD280\uC5B4 \uC624\uB97C \uD798\uC744 \uBE68\uB9AC \uAE38\uB7EC\uC57C \uD55C\uB2E4."
            ),
            React.createElement(
                "dt",
                null,
                "170\uC810 \uC774\uD558"
            ),
            React.createElement(
                "dd",
                null,
                "\uB2F9\uC2E0\uC740 \uAE68\uC9C0\uAE30 \uC26C\uC6B4 \uC720\uB9AC \uAC19\uC740 \uC874\uC7AC\uB77C \uD560 \uC218 \uC788\uB2E4. \uC791\uC740 \uBD88\uD589\uC5D0\uB3C4 \uC27D\uAC8C \uC0C1\uCC98\uB97C \uC785\uAC8C \uB418\uBA70 \uADF8 \uC0C1\uCC98\uB294 \uCE58\uC720\uD558\uAE30 \uC5B4\uB824\uC6B8 \uAC83\uC774\uB2E4. \uD558\uB8E8\uD558\uB8E8 \uC0B4\uC5BC\uC74C \uC704\uB97C \uAC77\uB294 \uAE30\uBD84\uC73C\uB85C \uC0B4\uC544\uC628 \uB2F9\uC2E0\uC740 \uC9C0\uAE08 \uB2F9\uC7A5 \uD68C\uBCF5\uD0C4\uB825\uC131\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC628 \uD798\uC744 \uAE30\uC6B8\uC5EC\uC57C \uD55C\uB2E4."
            )
        ),
        React.createElement(
            "h3",
            { className: "title" },
            "\uC880 \uB354 \uC0C1\uC138\uD558\uAC8C"
        ),
        React.createElement(
            "section",
            { className: "section" },
            React.createElement(
                "h4",
                null,
                "1. \uC790\uAE30\uC870\uC808\uB2A5\uB825 = \uAC10\uC815\uC870\uC808\uB825 + \uCDA9\uB3D9\uD1B5\uC81C\uB825 + \uC6D0\uC778\uBD84\uC11D\uB825"
            ),
            React.createElement(
                "div",
                { className: "myScore" },
                "\uB098\uC758 \uC790\uAE30\uC870\uC808\uB2A5\uB825 \uC810\uC218 :",
                React.createElement(
                    "strong",
                    { className: "__score" },
                    scores[0]
                )
            ),
            React.createElement(
                "dl",
                { className: "guides" },
                React.createElement(
                    "dt",
                    null,
                    "75\uC810 \uC774\uC0C1(\uC0C1\uC704 7% \uC774\uB0B4)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uC790\uBD80\uC2EC\uC744 \uAC00\uC838\uB3C4 \uC88B\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "70\uC810 \uC774\uC0C1"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uBCC4 \uBB38\uC81C \uC5C6\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "63\uC810 \uC774\uD558(\uD3C9\uADE0 63.5\uC810)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uC790\uAE30\uC870\uC808\uB2A5\uB825\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uB178\uB825\uD558\uB294 \uAC83\uC774 \uC88B\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "55\uC810 \uC774\uD558(\uD558\uC704 20% \uC774\uD558)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uC790\uAE30\uC870\uC808\uB2A5\uB825\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 \uBC18\uB4DC\uC2DC \uB178\uB825\uD574\uC57C \uD55C\uB2E4."
                )
            )
        ),
        React.createElement(
            "section",
            { className: "section" },
            React.createElement(
                "h4",
                null,
                "2. \uB300\uC778\uAD00\uACC4\uB2A5\uB825 = \uC18C\uD1B5\uB2A5\uB825 + \uACF5\uAC10\uB2A5\uB825 + \uC790\uC544\uD655\uC7A5\uB825"
            ),
            React.createElement(
                "div",
                { className: "myScore" },
                "\uB098\uC758 \uB300\uC778\uAD00\uACC4\uB2A5\uB825 \uC810\uC218 :",
                React.createElement(
                    "strong",
                    { className: "__score" },
                    scores[1]
                )
            ),
            React.createElement(
                "dl",
                { className: "guides" },
                React.createElement(
                    "dt",
                    null,
                    "80\uC810 \uC774\uC0C1(\uC0C1\uC704 6% \uC774\uB0B4)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uB300\uC778\uAD00\uACC4\uC640 \uC0AC\uD68C\uC131\uC774 \uC544\uC8FC \uB6F0\uC5B4\uB09C \uD3B8"
                ),
                React.createElement(
                    "dt",
                    null,
                    "74\uC810 \uC774\uC0C1"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uBCC4 \uBB38\uC81C \uC5C6\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "67\uC810 \uC774\uD558(\uD3C9\uADE0 67.8\uC810)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uB300\uC778\uAD00\uACC4\uB2A5\uB825\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uBC18\uB4DC\uC2DC \uB178\uB825\uD574\uC57C \uD55C\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "62\uC810 \uC774\uD558(\uD558\uC704 20% \uC774\uD558)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uB300\uC778\uAD00\uACC4\uB2A5\uB825\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uBC18\uB4DC\uC2DC \uB178\uB825\uD574\uC57C \uD55C\uB2E4."
                )
            )
        ),
        React.createElement(
            "section",
            { className: "section" },
            React.createElement(
                "h4",
                null,
                "3. \uAE0D\uC815\uC131 = \uC790\uC544\uB099\uAD00\uC131 + \uC0DD\uD65C\uB9CC\uC871\uB3C4 + \uAC10\uC0AC\uD558\uAE30"
            ),
            React.createElement(
                "div",
                { className: "myScore" },
                "\uB098\uC758 \uB300\uC778\uAD00\uACC4\uB2A5\uB825 \uC810\uC218 :",
                React.createElement(
                    "strong",
                    { className: "__score" },
                    scores[2]
                )
            ),
            React.createElement(
                "dl",
                { className: "guides" },
                React.createElement(
                    "dt",
                    null,
                    "75\uC810 \uC774\uC0C1(\uC0C1\uC704 6% \uC774\uB0B4)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uB2F9\uC2E0\uC740 \uB300\uB2E8\uD788 \uAE0D\uC815\uC131\uC774 \uB192\uC740 \uC0AC\uB78C"
                ),
                React.createElement(
                    "dt",
                    null,
                    "70\uC810 \uC774\uC0C1"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uBCC4 \uBB38\uC81C \uC5C6\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "63\uC810 \uC774\uD558(\uD3C9\uADE0 63.4\uC810)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uAE0D\uC815\uC131\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uB178\uB825\uD574\uC57C \uD55C\uB2E4."
                ),
                React.createElement(
                    "dt",
                    null,
                    "56\uC810 \uC774\uD558(\uD558\uC704 20% \uC774\uD558)"
                ),
                React.createElement(
                    "dd",
                    null,
                    "\uAE0D\uC815\uC131\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uBC18\uB4DC\uC2DC \uB178\uB825\uD574\uC57C \uD55C\uB2E4."
                )
            )
        ),
        React.createElement(
            "section",
            { className: "section" },
            React.createElement(
                "a",
                {
                    href: "mailto:?subject=\uD68C\uBCF5\uD0C4\uB825\uC131 \uC810\uC218&body=" + mailStr,
                    className: "mailLink"
                },
                "\uACB0\uACFC \uC810\uC218 \uBA54\uC77C\uB85C \uBCF4\uB0B4\uAE30"
            ),
            React.createElement(
                "a",
                {
                    href: "mailto:thegi.code@gmail.com?subject=\uD68C\uBCF5\uD0C4\uB825\uC131 \uC810\uC218&body=" + mailStr,
                    className: "mailLink"
                },
                "\uACB0\uACFC \uC810\uC218 \uAC1C\uBC1C\uC790 \uBA54\uC77C\uB85C \uBCF4\uB0B4\uAE30"
            )
        ),
        React.createElement(
            "button",
            {
                type: "button",
                className: "closeButton",
                onClick: hideResult
            },
            "\uB2EB\uAE30"
        )
    );
};

export default Result;