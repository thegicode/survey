

export default (result, backdrop) => {

    const showResult = (scores) => {
        result.hidden(false, scores)
        backdrop.hidden(false)
        document.body.dataset.scroll = false
    }

    const hideResult = () => {
        result.hidden(true)
        backdrop.hidden(true)
        document.body.dataset.scroll = true
    }

    /** Add events
     * 이벤트를 각각의 해당되는 컴포턴트에 넣고 싶다.
     */
    result.cpnt
       .querySelector('button')
       .addEventListener('click', () => {
           hideResult()
       });

    backdrop.cpnt
       .addEventListener('click', () => {
           hideResult()
       });

    return {
        showResult,
        hideResult
    }
}