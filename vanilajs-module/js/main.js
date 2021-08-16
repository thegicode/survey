
import surveys from './surveys.js'

/** 각 영역별[PARTS_NUMBERS로 구분] 점수를 합산하여 배열로 리턴 */
const getScores = (formData, exceptNumbers, partNumbers) => {

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

/** 유효성 검사 함수
  * 모든 항목 체크 확인 : return true
  * 체크안되어 있으면 focus 이동 : return false
  */
const validates = (formEl, length) => {
    for (let i=1 ; i <= length ; i++) {
        const name = `q${i}`;
        const radioNodes = formEl[name];
        if (!radioNodes.value) {
            formEl.querySelector(`[name=${name}]`).focus()
            alert(`${i}번을 체크해주세요.`);
            return false;
        }
    }
    return true;
}

const handleSubmit = (constants, actions) => (event) => {

    event.preventDefault();

    const { QUESTIONS, EXCEPTION_NUMBERS, PART_NUMBERS } = constants

    const formEl = event.target

    if (!validates(formEl, QUESTIONS.length)) {
        return false;
    }

    const formData = new FormData(formEl);
    const scores = getScores(formData, EXCEPTION_NUMBERS, PART_NUMBERS);
    // let obj = {};

    if(!scores){
        return
    }

    actions.showResult(scores)
}


export default (constants, actions) => {

    const { QUESTIONS } = constants

    // 설문항목 만들기
    surveys(QUESTIONS)

    // Form submit event
    document
        .querySelector('#form')
        .addEventListener('submit', 
            handleSubmit(constants, actions))

}


