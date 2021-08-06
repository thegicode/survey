'use strict';

import SurveyForm from './SurveyForm.js';

// const e = React.createElement
ReactDOM.render(
// e(SurveyForm), 
React.createElement(SurveyForm, { showResult: showResult }), document.querySelector('#serveys'));

var backdropEl = document.querySelector('#backdrop');
var resultEl = document.querySelector('#result');

/** 검정색 투명 레이어
  * 클릭 시 결과 화면 hide 
  */
backdropEl.addEventListener('click', hideResult);

/** 결과 컴포넌트
  * 닫기 버튼 클릭 시 결과 화면 hide
  */
resultEl.querySelector('button').addEventListener('click', hideResult);

/** 결과 점수 표시 후 레이어 보이기 */
function showResult(scores) {
    if (scores.length < 3) {
        return;
    }

    var total = 0;
    scores.forEach(function (p) {
        return total = total + p;
    });

    handleResultEl_(total, scores);

    document.body.dataset.scroll = false;
    backdropEl.dataset.hidden = false;
    resultEl.dataset.hidden = false;
}

/** 점수 초기화 & 결과 레이어 숨기기 */
function hideResult() {
    resultEl.querySelector('[data-href=mail]').href = '';
    resultEl.querySelector('[data-href=mail-dev]').href = '';
    document.body.dataset.scroll = true;
    backdropEl.dataset.hidden = true;
    resultEl.dataset.hidden = true;
}

function handleResultEl_(total, scores) {
    resultEl.querySelector('[data-score=total]').textContent = total;

    resultEl.querySelector('[data-score=p1]').textContent = scores[0];

    resultEl.querySelector('[data-score=p2]').textContent = scores[1];

    resultEl.querySelector('[data-score=p3]').textContent = scores[2];

    // 메일 내용에 회복탄력성 점수 입력
    var mailStr = '\uCD1D\uC810: ' + total + ', \uC790\uAE30\uC870\uC815\uB2A5\uB825: ' + scores[0] + ', \uB300\uC778\uAD00\uACC4\uB2A5\uB825: ' + scores[1] + ', \uAE0D\uC815\uC131: ' + scores[2];
    resultEl.querySelector('[data-href=mail]').href = 'mailto:?subject=\uD68C\uBCF5\uD0C4\uB825\uC131 \uC810\uC218&body=' + mailStr;

    resultEl.querySelector('[data-href=mail-dev]').href = 'mailto:thegi.code@gmail.com?subject=\uD68C\uBCF5\uD0C4\uB825\uC131 \uC810\uC218&body=' + mailStr;
}