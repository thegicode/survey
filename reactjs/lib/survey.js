import React from 'react';

function Surveys() {
    // const elements = QUESTION_STRINGS
    // .map( (text, index) => getElement(text, index))

    return React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement(
            "ol",
            { className: "survey" },
            "survey"
        ),
        React.createElement(
            "button",
            { type: "submit", className: "submitButton" },
            "\uC644\uB8CC"
        )
    );
}

export default Surveys;