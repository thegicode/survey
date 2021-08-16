
const cpnt = document.querySelector('#surveys')

/** Create question element and return  */
const getElement = (text, index) => {
    if (!text) {
        return;
    }
    if (index < 0) {
        return;
    }

    const template = document.querySelector('[data-template=surveys]')
    let element = document.importNode(template.content, true);

    element
        .querySelector('[data-text=question]')
        .textContent = text;

    element
        .querySelectorAll('input[type=radio]')
        .forEach( (el, idx) => {
            el.name = `q${index+1}`;

            // For test
            if(idx === 0) {
                el.checked = true;
            }
        });

    return element;
};


export default (QUESTIONS) => {

    /** fragment에 질문 항목 append 
      * app(cpnt)에 fragment append
      */
    const virtualNode = new DocumentFragment;
    QUESTIONS
        .map( (text, index) => getElement(text, index))
        .forEach( element => {
            virtualNode.appendChild(element)
        });
        
    cpnt.appendChild(virtualNode);
   
}

