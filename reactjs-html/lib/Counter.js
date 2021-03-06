var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = { count: 0 };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = 'You clicked ' + this.state.count + ' times';
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      document.title = 'You clicked ' + this.state.count + ' times';
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (state) {
        return {
          count: state.count + 1
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'You clicked ',
          this.state.count,
          ' times'
        ),
        React.createElement(
          'button',
          { onClick: this.handleClick },
          'Click me'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var el = React.createElement;
var domContainer = document.querySelector('#root');
ReactDOM.render(el(Counter), domContainer);