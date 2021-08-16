
const cpnt = document.querySelector('#backdrop')

const hidden = (is) => {
    if (typeof is !== 'boolean') {
        return
    }
    cpnt.setAttribute('aria-hidden', is)
}

// const addEvents = () => {
//     cpnt
//         .addEventListener('click', () => {
//             hidden(true)
//         });
// }


// export default {
//     hidden
// }

export default () => {

    // addEvents()

    return {
        cpnt,
        hidden
    }
}