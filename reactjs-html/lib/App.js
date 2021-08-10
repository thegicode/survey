'use strict';

import Page from './Page.js';

// const e = React.createElement
ReactDOM.render(
// e(Page), 
React.createElement(Page, null), document.querySelector('#root'));