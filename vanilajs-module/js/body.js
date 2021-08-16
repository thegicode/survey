
const cpnt = document.body

const scroll = (is) => {
    if (typeof is !== 'boolean') {
        return
    }
    cpnt.setAttribute('data-scroll', is)
}

export default {
    scroll
}

// export default () => {
//     return {
//         scroll
//     }
// }