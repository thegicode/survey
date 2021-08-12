
export default function Surveys({ questions }) {

    const Labels = ({ nameIndex }) => {
        const strArr = [
            '전혀 그렇지 않다',
            '그렇지 않다',
            '보통이다',
            '어느 정도 그렇다',
            '매우 그렇다'
        ]
        const nIdx = `q${nameIndex + 1}`
        const labels = strArr.map( (text, index) => {
            const isChecked = index === 2 ? true : false // For test
            return(
                <label key={index}>
                    <input type="radio" name={nIdx} value={index+1} defaultChecked={isChecked} />
                    <span>{text}</span>
                </label>
            )
        })
        return labels
    }

    const getElement = (text, index) => {
        if (!text) {
            return
        }
        if (index < 0) {
            return
        }
        return(
            <li className="survey" key={index}>
                <p className="question">{text}</p>
                <div className="inputs">
                    <Labels nameIndex={index} />
                </div>
            </li>
        )
    }

    const surveys = questions
        .map( (text, index) => getElement(text, index))

    return surveys
}

