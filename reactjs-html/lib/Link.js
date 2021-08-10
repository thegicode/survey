var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// import React from 'react'

var useState = React.useState;

var STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

var Link = function Link(_ref) {
  var page = _ref.page,
      children = _ref.children;

  var _useState = useState(STATUS.NORMAL),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var onMouseEnter = function onMouseEnter() {
    setStatus(STATUS.HOVERED);
  };

  var onMouseLeave = function onMouseLeave() {
    setStatus(STATUS.NORMAL);
  };

  return React.createElement(
    'a',
    {
      href: page || '#',
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    },
    children || status
  );
};

var el = React.createElement;
var domContainer = document.querySelector('#root');
ReactDOM.render(el(Link), domContainer);