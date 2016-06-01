define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BottomSide = function (_React$Component) {
    _inherits(BottomSide, _React$Component);

    function BottomSide(props) {
      _classCallCheck(this, BottomSide);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BottomSide).call(this, props));

      _this.displayName = '';
      return _this;
    }

    _createClass(BottomSide, [{
      key: "componentWillMount",
      value: function componentWillMount() {

        this.setState({
          current: "standard"
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "btn-group" },
            React.createElement(
              "a",
              { className: "btn " + this.is('standard'), onClick: function () {
                  return _this2.clickStandard();
                } },
              "Standard"
            ),
            React.createElement(
              "a",
              { className: "btn " + this.is('satellite'), onClick: function () {
                  return _this2.clickSatellite();
                } },
              "Satellite"
            ),
            React.createElement(
              "a",
              { className: "btn " + this.is('neural'), onClick: function () {
                  return _this2.clickNeural();
                } },
              "Neural Net"
            )
          ),
          React.createElement(
            "div",
            { style: { 'display': 'inlineBlock', 'float': 'right' } },
            "Powered by EONET"
          )
        );
      }
    }, {
      key: "is",
      value: function is(type) {
        if (type == this.state.current) {
          return 'btn-primary';
        } else {
          return 'btn-default';
        }
      }
    }, {
      key: "clickStandard",
      value: function clickStandard() {
        earth.current = "standard";
        this.setState({
          current: "standard"
        });
      }
    }, {
      key: "clickSatellite",
      value: function clickSatellite() {
        earth.current = "satellite";
        this.setState({
          current: "satellite"
        });
      }
    }, {
      key: "clickNeural",
      value: function clickNeural() {
        earth.current = "neural";
        this.setState({
          current: "neural"
        });
      }
    }]);

    return BottomSide;
  }(React.Component);

  exports.default = BottomSide;
});
//# sourceMappingURL=BottomSide.js.map
