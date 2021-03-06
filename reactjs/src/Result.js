
export default function Result(props) {
    
    const { 
        scores, 
        isResultHidden,
        hideResult
    } = props

    let total = 0;
    scores.forEach( p =>  total = total + p);

    const mailStr = 
            `총점: ${total}, 자기조정능력: ${scores[0]}, 대인관계능력: ${scores[1]}, 긍정성: ${scores[2]}`

    return(
        <div 
            className="result"  
            aria-hidden={isResultHidden} >

            <h2>테스트 결과</h2>

            <div className="myScore">
                나의 회복탄력성 지수 :
                <strong className="__score" data-score="total">{total}</strong>
            </div>
            <h3>회복탄력성 지수 <br/> 
                <span>= 1. 자기조절능력 + 2. 대인관계능력 + 3. 긍정성</span>
            </h3>
            <dl className="guides">
                <dt>220점 이상</dt>
                <dd>당신은 대단히 회복 탄력성이 높은 사람이다. 웬만한 불행한 사건은 당신을 흔들어놓지 못한다. 
                    오히려 역경은 당신을 더 높은 곳으로 올려놓기 위한 스프링보드이니 즐겁게 받아들일 일이다.</dd>
                <dt>212점 이상</dt>
                <dd>상위 20%</dd>
                <dt>200점 이상</dt>
                <dd>안심</dd>
                <dt>190점 이하(평균 195점)</dt>
                <dd>회복탄력성을 높이기 위해 노력하는 것이 좋다.</dd>
                <dt>180점 이하</dt>
                <dd>당신은 사소한 부정적인 사건에도 쉽게 영향 받는 나약한 존재다. 당신은 되튀어 오를 힘을 빨리 길러야 한다.</dd>
                <dt>170점 이하</dt>
                <dd >당신은 깨지기 쉬운 유리 같은 존재라 할 수 있다. 작은 불행에도 쉽게 상처를 입게 되며 그 상처는 치유하기 어려울 것이다. 
                    하루하루 살얼음 위를 걷는 기분으로 살아온 당신은 지금 당장 회복탄력성을 높이기 위해 온 힘을 기울여야 한다.
                </dd>
            </dl>

            <h3 className="title">좀 더 상세하게</h3>
            <section className="section">
                <h4>1. 자기조절능력 = 감정조절력 + 충동통제력 + 원인분석력</h4>
                <div className="myScore">
                    나의 자기조절능력 점수 : 
                    <strong className="__score">{scores[0]}</strong>
                </div>
                <dl className="guides">
                    <dt>75점 이상(상위 7% 이내)</dt>
                    <dd>자부심을 가져도 좋다.</dd>
                    <dt>70점 이상</dt>
                    <dd>별 문제 없다.</dd>
                    <dt>63점 이하(평균 63.5점)</dt>
                    <dd>자기조절능력을 높이기 위해 노력하는 것이 좋다.</dd>
                    <dt>55점 이하(하위 20% 이하)</dt>
                    <dd>자기조절능력을 향상시키기 위해 반드시 노력해야 한다.</dd>
                </dl>
            </section>

            <section className="section">
                <h4>2. 대인관계능력 = 소통능력 + 공감능력 + 자아확장력</h4>
                <div className="myScore">
                    나의 대인관계능력 점수 : 
                    <strong className="__score">{scores[1]}</strong>
                </div>
                <dl className="guides">
                    <dt>80점 이상(상위 6% 이내)</dt>
                    <dd>대인관계와 사회성이 아주 뛰어난 편</dd>
                    <dt>74점 이상</dt>
                    <dd>별 문제 없다.</dd>
                    <dt>67점 이하(평균 67.8점)</dt>
                    <dd>대인관계능력을 높이기 위해 반드시 노력해야 한다.</dd>
                    <dt>62점 이하(하위 20% 이하)</dt>
                    <dd>대인관계능력을 높이기 위해 반드시 노력해야 한다.</dd>
                </dl>
            </section>

            <section className="section">
                <h4>3. 긍정성 = 자아낙관성 + 생활만족도 + 감사하기</h4>
                <div className="myScore">
                    나의 대인관계능력 점수 : 
                    <strong className="__score">{scores[2]}</strong>
                </div>
                <dl className="guides">
                    <dt>75점 이상(상위 6% 이내)</dt>
                    <dd>당신은 대단히 긍정성이 높은 사람</dd>
                    <dt>70점 이상</dt>
                    <dd>별 문제 없다.</dd>
                    <dt>63점 이하(평균 63.4점)</dt>
                    <dd>긍정성을 높이기 위해 노력해야 한다.</dd>
                    <dt>56점 이하(하위 20% 이하)</dt>
                    <dd>긍정성을 높이기 위해 반드시 노력해야 한다.</dd>
                </dl>
            </section>

            <section className="section">
                <a 
                    href={`mailto:?subject=회복탄력성 점수&body=${mailStr}`}
                    className="mailLink">
                    결과 점수 메일로 보내기
                </a>
                <a 
                    href={`mailto:thegi.code@gmail.com?subject=회복탄력성 점수&body=${mailStr}`}
                    className="mailLink">
                    결과 점수 개발자 메일로 보내기
                </a>
            </section>

            <button 
                type="button" 
                className="closeButton" 
                onClick={hideResult}>
                닫기
            </button>
        </div>
    )
}


