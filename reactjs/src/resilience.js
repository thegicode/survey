'use strict';

import SurveyForm from './SurveyForm.js'

// const e = React.createElement
ReactDOM.render(
    // e(SurveyForm), 
    <SurveyForm showResult={showResult} />,
    document.querySelector('#serveys')
)



const backdropEl = document.querySelector('#backdrop')
const resultEl = document.querySelector('#result')

/** 검정색 투명 레이어
  * 클릭 시 결과 화면 hide 
  */
backdropEl
    .addEventListener('click', hideResult);

/** 결과 컴포넌트
  * 닫기 버튼 클릭 시 결과 화면 hide
  */
resultEl
    .querySelector('button')
    .addEventListener('click', hideResult);



/** 결과 점수 표시 후 레이어 보이기 */
function showResult(scores) {
    if(scores.length < 3) {
        return;
    }

    let total = 0;
    scores.forEach( p =>  total = total + p);

    handleResultEl_(total, scores)
   
    document.body.dataset.scroll = false;
    backdropEl.dataset.hidden = false;
    resultEl.dataset.hidden = false;
}



/** 점수 초기화 & 결과 레이어 숨기기 */
function hideResult(){
    resultEl
        .querySelector('[data-href=mail]')
        .href = '';
    resultEl
        .querySelector('[data-href=mail-dev]')
        .href = '';
    document.body.dataset.scroll = true;
    backdropEl.dataset.hidden = true;
    resultEl.dataset.hidden = true;
}


function handleResultEl_(total, scores) {
    resultEl
        .querySelector('[data-score=total]')
        .textContent = total;

    resultEl
        .querySelector('[data-score=p1]')
        .textContent = scores[0];

    resultEl
        .querySelector('[data-score=p2]')
        .textContent = scores[1];

    resultEl
        .querySelector('[data-score=p3]')
        .textContent = scores[2];


    // 메일 내용에 회복탄력성 점수 입력
    const mailStr = `총점: ${total}, 자기조정능력: ${scores[0]}, 대인관계능력: ${scores[1]}, 긍정성: ${scores[2]}`
    resultEl
        .querySelector('[data-href=mail]')
        .href=`mailto:?subject=회복탄력성 점수&body=${mailStr}`

    resultEl
        .querySelector('[data-href=mail-dev]')
        .href=`mailto:thegi.code@gmail.com?subject=회복탄력성 점수&body=${mailStr}`;
}


