const QUESTION_STRINGS = [
    '나는 어려운 일이 닥쳤을 때 감정을 통제할 수 있다',
    '내가 무슨 생각을 하면, 그 생각이 내 기분에 어떤 영향을 미칠지 잘 알아 챈다',
    '이슈가 되는 문제를 가족이나 친구들과 토론할 때 내 감정을 잘 통제할 수 있다',
    '집중해야 할 중요한 일이 생기면 신바람이 나기 보다는 더 스트레스를 받는 편이다',
    '나는 내 감정에 잘 휘말린다',
    '때때로 내 감정적인 문제 때문에 학교나 집에서 공부하거나 일 할 때 집중하 기 힘들다',
    '당장 해야 할 일이 있으면 나는 어떠한 유혹이나 방해도 잘 이겨내고 할 일을 한다',
    '아무리 당황스럽고 어려운 상황이 닥쳐도, 나는 내가 어떤 생각을 하고 있는 지 스스로 잘 안다',
    '누군가가 나에게 화를 낼 경우 나는 우선 그 사람의 의견을 잘 듣는다',
    '일이 생각대로 잘 안 풀리면 쉽게 포기하는 편이다',
    '평소 경제적인 소비나 지출 규모에 대해 별다른 계획 없이 지낸다',
    '미리 계획을 세우기보다는 즉흥적으로 일을 처리하는 편이다',
    '문제가 생기면 여러 가지 가능한 해결 방안에 대해 먼저 생각한 후에 해결 하려고 노력한다',
    '어려운 일이 생기면 그 원인이 무엇인지 신중하게 생각한 후에 그 문제를 해결하려고 노력한다',
    '나는 대부분의 상황에서 문제의 원인을 잘 알고 있다고 믿는다',
    '나는 사건이나 상황을 잘 파악하지 못한다는 이야기를 종종 듣는다',
    '문제가 생기면 나는 성급하게 결론을 내린다는 이야기를 종종 듣는다',
    '어려운 일이 생기면, 그 원인을 완전히 이해하지 못했다 하더라도 일단 빨리 해결하는 것이 좋다고 생각한다',
    '나는 분위기나 대화 상대에 따라 대화를 잘 이끌어 갈 수 있다',
    '나는 재치 있는 농담을 잘 한다',
    '나는 내가 표현하고자 하는 바에 대한 적절한 문구나 단어를 잘 찾아낸다',
    '나는 윗사람과 대화하는 것이 부담스럽다',
    '나는 대화중에 다른 생각을 하느라 대화 내용을 놓칠 때가 종종 있다',
    '나는 대화를 할 때 하고 싶은 말을 다하지 못 하고 주저할 때가 종종 있다',
    '사람들의 얼굴표정을 보면 어떤 감정인지 알 수 있다',
    '슬퍼하거나 화를 내거나 당황하는 사람을 보면 그들이 어떤 생각을 하는지 잘 알 수 있다',
    '동료가 화를 낼 경우 나는 그 이유를 꽤 잘 아는 편이다',
    '나는 사람들의 행동방식을 때로 이해하기 힘들다',
    '친한 친구나 애인 혹은 배우자로부터 “당신은 나를 이해 못해”라는 말을 종 종 듣는다',
    '동료와 친구들은 내가 자기 말을 잘 듣지 않는다고 한다',
    '나는 내 주변 사람들로부터 사랑과 관심을 받고 있다',
    '나는 내 친구들을 정말로 좋아한다',
    '내 주변 사람들은 내 기분을 잘 이해한다',
    '서로 도움을 주고받는 친구가 별로 없는 편이다',
    '나와 정기적으로 만나는 사람들은 대부분 나를 싫어하게 된다',
    '서로 마음을 터놓고 얘기할 수 있는 친구가 거의 없다',
    '열심히 일하면 언제나 보답이 있으리라고 생각한다',
    '맞든 아니든, “아무리 어려운 문제라도 나는 해결할 수 있다”고 일단 믿는 것이 좋다고 생각한다',
    '어려운 상황이 닥쳐도 나는 모든 일이 다 잘 해결될 거라고 확신한다',
    '어떤 일을 마치면 주변 사람들이 부정적인 평가를 할까봐 걱정한다',
    '나에게 일어나는 대부분의 문제들은 나로서는 어쩔 수 없는 상황에 의해 발 생한다고 믿는다',
    '누가 나의 미래에 대해 물어보면, 성공한 나의 모습을 상상하기 힘들다',
    '내 삶은 내가 생각하는 이상적인 삶에 가깝다',
    '내 인생의 여러 가지 조건들은 만족스럽다',
    '나는 내 삶에 만족한다',
    '나는 내 삶에서 중요하다고 생각한 것들은 다 갖고 있다',
    '나는 다시 태어나도 나의 현재 삶을 다시 살고 싶다',
    '나는 다양한 종류의 많은 사람들에게 고마움을 느낀다',
    '내가 고맙게 여기는 것들을 모두 적는다면, 아주 긴 목록이 될 것이다',
    '나이가 들어갈수록 내 삶의 일부가 된 사람, 사건, 생활에 감사하는 마음이 더 커져간다',
    '나는 감사해야 할 것이 별로 없다',
    '세상을 둘러볼 때, 내가 고마워 할 것은 별로 없다',
    '사람이나 일에 대한 고마움을 한참 시간이 지난 후에야 겨우 느낀다',
];
const EXCEPTION_NUMBERS = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30, 34, 35, 36, 40, 41, 42, 51, 52, 53];
const PART_NUMBERS = [18, 36, 53]

const backdropEl = document.querySelector('#backdrop');
const resultEl = document.querySelector('#result');



/** init */
controlSurvey();



/** Main Control */
function controlSurvey(){
    viewSurvey(QUESTION_STRINGS);
    addEvents(QUESTION_STRINGS, EXCEPTION_NUMBERS, PART_NUMBERS);
}



/** fragment에 질문 항목 append 
  * app(surveyEl)에 fragment append
  */
function viewSurvey(qustionStrings) {
    const surveyEl = document.querySelector('#survey');
    const virtualNode = new DocumentFragment;
    // const virtualNode = surveyEl.cloneNode(true);

    qustionStrings
        .map( (text, index) => getElement(text, index))
        .forEach( element => {
            virtualNode.appendChild(element)
            // virtualNode.appendChild(element)
        });
    surveyEl.appendChild(virtualNode);
    // surveyEl.replaceWith(virtualNode);
}



/** Make Element and return element */
function getElement(text, index){
    if (!text) {
        return;
    }

    if (index < 0) {
        return;
    }

    const element = 
        document.querySelector('[data-template=surveys]')
            .content
            .firstElementChild
            .cloneNode(true);

    element
        .querySelector('[data-text=question]')
        .textContent = text;

    element
        .querySelectorAll('input[type=radio]')
        .forEach( (el, idx) => {
            el.name = `q${index+1}`;

            // For test
            if(idx === 3) {
                el.checked = true;
            }

        });

    return element;
};



/** 모든 이벤트는 여기에 */
function addEvents(questionStrings, exceptNumbers, partNumbers) {

    /** Form Submit Event
      * Check validate가 true 이면
      * Form data 받은 다음 
      * getScore 함수로 배열로 점수를 받음
      * Show result
      */
    document
        .querySelector('#form')
        .addEventListener('submit', function(event) {
            event.preventDefault();

            if (!validates(this, questionStrings.length)) {
                return false;
            }

            const formData = new FormData(this);
            const scores = getScores(formData, exceptNumbers, partNumbers);
            // let obj = {};

            if(!scores){
                return
            }

            showResult(scores);

        });

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
};




/** 유효성 검사 함수
  * 모든 항목 체크 확인 : return true
  * 체크안되어 있으면 focus 이동 : return false
  */
function validates(formEl, length) {
    for (let i=1 ; i <= length ; i++) {
        const name = `q${i}`;
        const radioNodes = formEl[name];
        if (!radioNodes.value) {
            formEl.querySelector(`[name=${name}]`).focus()
            alert(`${name}번을 체크해주세요.`);
            return false;
        }
    }
    return true;
}



/** 각 영역별[PARTS_NUMBERS로 구분] 점수를 합산하여 배열로 리턴 */
function getScores(formData, exceptNumbers, partNumbers){

    let scores = [];
    let sum = 0;

    for (const [key, value] of formData) {


        const idx = Number(key.slice(1));
        let score = Number(value);

       
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

    };

    return scores;
}



/** 결과 점수 표시 후 레이어 보이기 */
function showResult(scores){
    console.log(scores);

    if(scores.length < 3) {
        return;
    }

    let total = 0;
    scores.forEach( p =>  total = total + p);

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

    document.body.dataset.scroll = false;
    backdropEl.dataset.hidden = false;
    resultEl.dataset.hidden = false;
}



/** 점수 초기화 & 결과 레이어 숨기기 */
function hideResult(){
    document.body.dataset.scroll = true;
    backdropEl.dataset.hidden = true;
    resultEl.dataset.hidden = true;
}


