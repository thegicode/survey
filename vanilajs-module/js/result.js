
export default () => {
    const cpnt = document.querySelector('#result')

    const show = scores => {
        if(scores.length < 3) {
            return;
        }

        let total = 0;
        scores.forEach( p =>  total = total + p);

        cpnt
            .querySelector('[data-score=total]')
            .textContent = total;

        for(let i=0 ; i < 3 ; i++) {
            cpnt
                .querySelector(`[data-score=p${i+1}]`)
                .textContent = scores[`${i}`];
        }

        // 메일 내용에 회복탄력성 점수 입력
        const mailStr = `총점: ${total}, 자기조정능력: ${scores[0]}, 대인관계능력: ${scores[1]}, 긍정성: ${scores[2]}`
        cpnt
            .querySelector('[data-href=mail]')
            .href=`mailto:?subject=회복탄력성 점수&body=${mailStr}`

        cpnt
            .querySelector('[data-href=mail-dev]')
            .href=`mailto:thegi.code@gmail.com?subject=회복탄력성 점수&body=${mailStr}`;

        // bodyEl.dataset.scroll = false;
        // backdrop.hidden(false);
        cpnt.setAttribute('aria-hidden', false);
    }

    const hide = () => {
        cpnt
            .querySelector('[data-href=mail]')
            .href = '';
        cpnt
            .querySelector('[data-href=mail-dev]')
            .href = '';
        // bodyEl.dataset.scroll = true;
        // backdrop.hidden(true);
        cpnt.setAttribute('aria-hidden', true);
    }

    /** 결과 점수 표시 후 레이어 보이기 */
    const hidden = (is, scores) => {
        if (is === true) {
            hide()
        } else {
            show(scores)
        }
    }

    /** 닫기 버튼 클릭 시 결과 화면 hide  */
    // const addEvents = () => {
    //    cpnt
    //        .querySelector('button')
    //        .addEventListener('click', () => {
    //            // hidden(true)
    //        });
    // }

    // addEvents()

    return {
        cpnt,
        hidden
    }
}
