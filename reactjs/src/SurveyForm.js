import Surveys from './Surveys.js'

const SurveyForm = ({ showResult }) => {

    /** 각 영역별[PARTS_NUMBERS로 구분] 점수를 합산하여 배열로 리턴 */
    const getScores = (formData) => {

        const EXCEPTION_NUMBERS = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 28, 29, 30, 34, 35, 36, 40, 41, 42, 51, 52, 53]
        const PART_NUMBERS = [18, 36, 53]

        let scores = [];
        let sum = 0;

        for (const [key, value] of formData) {

            const idx = Number(key.slice(1));
            let score = Number(value);

           
            // 6에서 빼는 항목 계산 
            if (EXCEPTION_NUMBERS.includes(idx)) {
                score = 6 - value;
            }

            sum = sum + score;

            // 영역 구분 항목까지 합산 후 배열에 추가
            if (PART_NUMBERS.includes(idx)) {   
                scores.push(sum);
                sum = 0;
            }
            // obj[key] = score;

        };

        return scores;
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const scores = getScores(formData)
        if (!scores) {
            return
        }
        showResult(scores)
    }

    return(
        <form onSubmit={handleSubmit}>
            <ol>
                <Surveys />
            </ol>
            <button type="submit" className="submitButton">완료</button>
        </form>
    )
}

export default SurveyForm

