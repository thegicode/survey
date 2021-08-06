import Surveys from './Surveys.js'

const EXCEPTION_NUMBERS = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30, 34, 35, 36, 40, 41, 42, 51, 52, 53]
const PART_NUMBERS = [18, 36, 53]


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

/** Form submit Event */
const handleSubmit = props => event => {
    event.preventDefault()
    const { showResult } = props
    const formData = new FormData(event.target)
    const scores = getScores(
            formData, 
            EXCEPTION_NUMBERS, 
            PART_NUMBERS)
    if (!scores) {
        return
    }
    showResult(scores)
}


export default (props) => {
    return(
        <form onSubmit={handleSubmit(props)}>
            <ol>
                <Surveys />
            </ol>
            <button type="submit" className="submitButton">완료</button>
        </form>
    )
}