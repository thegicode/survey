
export default function resultAndBackdrop() {

    const bodyEl = document.body
    const backdropEl = document.querySelector('#backdrop')
    const resultEl = document.querySelector('#result')

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


        // 메일 내용에 회복탄력성 점수 입력
        const mailStr = `총점: ${total}, 자기조정능력: ${scores[0]}, 대인관계능력: ${scores[1]}, 긍정성: ${scores[2]}`
        resultEl
            .querySelector('[data-href=mail]')
            .href=`mailto:?subject=회복탄력성 점수&body=${mailStr}`

        resultEl
            .querySelector('[data-href=mail-dev]')
            .href=`mailto:thegi.code@gmail.com?subject=회복탄력성 점수&body=${mailStr}`;

        bodyEl.dataset.scroll = false;
        backdropEl.setAttribute('aria-hidden', false);
        resultEl.setAttribute('aria-hidden', false);

    }

    /** 점수 초기화 & 결과 레이어 숨기기 */
    function hideResult(){
        resultEl
            .querySelector('[data-href=mail]')
            .href = '';
        resultEl
            .querySelector('[data-href=mail-dev]')
            .href = '';
        bodyEl.dataset.scroll = true;
        backdropEl.setAttribute('aria-hidden', true);
        resultEl.setAttribute('aria-hidden', true);
    }

    /** 점수 초기화 & 결과 레이어 숨기기 */
    function handleShowResult(is, scores) {
        if (is === true) {
            showResult(scores)
        } else {
            hideResult()
        }
    }

    function addEvents() {
       // 검정색 투명 레이어, 클릭 시 결과 화면 hide 
       backdropEl
           .addEventListener('click', () => {
               handleShowResult(false)
           });

       // 결과 컴포넌트, 닫기 버튼 클릭 시 결과 화면 hide
       resultEl
           .querySelector('button')
           .addEventListener('click', () => {
               handleShowResult(false)
           });
    }

    addEvents()

    return {
        handleShowResult
    }
}
