import SurveyForm from './SurveyForm.js'

export default function Main({ showResult }) {
    return(
        <main className="main">
            <h1>
                나의 회복탄력성 지수는?<br />
                KRQ-53 테스트
            </h1>

            <div className="summary">
                <p>이 테스트는 "회복탄력성"이라는 좋은 책을 있고 책에 있는 회복탄력성 지수 테스트를 주기적으로 하기 위해 만들었다.<br />
                    테스트 결과와 관련된 상세한 내용은 책을 꼭 읽어보길 바란다.  </p>
                <p>"회복탄력성", 김주환 지음, 위즈덤하우스 </p>
            </div>

            <p>각 문항을 읽은 후 해당하는 항목에 체크해주세요.</p>

            <SurveyForm showResult={showResult} />

        </main>
    )
}

