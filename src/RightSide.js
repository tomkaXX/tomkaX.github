define(['exports', './Tips.js'], function (exports, _Tips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Tips2 = _interopRequireDefault(_Tips);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var RightSide = function (_React$Component) {
    _inherits(RightSide, _React$Component);

    function RightSide(props) {
      _classCallCheck(this, RightSide);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(RightSide).call(this, props));
    }

    _createClass(RightSide, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        this.setState({
          twitter: []
        });

        this.displayName = '';

        console.log('yo');

        events.addEventListener('changeFocus', function (event) {
          _this2.setState(event.data);
          console.log(event.data);
        });
      }
    }, {
      key: 'getTweets',
      value: function getTweets() {
        var tweets = [];
        for (var tweet of this.state.twitter) {
          if (tweet.text.substring(0, 4) != "RT @") {
            tweets.push(tweet);
          }
        }
        return tweets;
      }
    }, {
      key: 'getAlchemy',
      value: function getAlchemy() {
        var alchemy = [];
        try {
          for (var post of this.state.alchemy[0].result.docs) {
            try {
              post.source.enriched.url.id = post.id;
              alchemy.push(post.source.enriched.url);
            } catch (e) {}
          }
        } catch (e) {}
        return alchemy;
      }
    }, {
      key: 'getGoogle',
      value: function getGoogle() {
        try {
          return this.state.google.items;
        } catch (e) {
          return [];
        }
      }
    }, {
      key: 'onCurrentLocation',
      value: function onCurrentLocation() {
        if (this.state.twitter == null && this.state.currentLocation) {
          return true;
        }

        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement(
          'div',
          { className: 'container-fluid' },
          function () {
            if (!_this3.onCurrentLocation()) {
              return React.createElement(
                'div',
                null,
                React.createElement('br', null),
                React.createElement(
                  'h5',
                  null,
                  'Twitter'
                ),
                React.createElement('hr', null),
                _this3.getTweets().map(function (tweet) {
                  return React.createElement(
                    'div',
                    { className: 'panel panel-default', key: tweet.created + tweet.sceenName },
                    React.createElement(
                      'div',
                      { className: 'panel-body' },
                      React.createElement(
                        'h6',
                        null,
                        React.createElement('img', { src: tweet.userPicture, width: '25px;' }),
                        '  ',
                        tweet.name
                      ),
                      React.createElement('span', { dangerouslySetInnerHTML: { __html: tweet.text.autoLink() } }),
                      function () {
                        console.log(tweet);
                        if (tweet.media) {
                          return React.createElement(
                            'div',
                            null,
                            React.createElement('hr', null),
                            React.createElement('img', { src: tweet.media, style: { "maxWidth": "100%" } })
                          );
                        }
                      }()
                    )
                  );
                }),
                function () {
                  if (_this3.state.twitter.length == 0) {
                    return React.createElement(
                      'p',
                      null,
                      'No tweets found.'
                    );
                  }
                }(),
                React.createElement('br', null),
                React.createElement(
                  'h5',
                  null,
                  'Relevant Articles ',
                  React.createElement(
                    'small',
                    null,
                    '(Powered by Google)'
                  )
                ),
                React.createElement('hr', null),
                _this3.getGoogle().map(function (post) {
                  return React.createElement(
                    'div',
                    { key: post.link, className: 'panel panel-default' },
                    React.createElement(
                      'div',
                      { className: 'panel-body' },
                      React.createElement(
                        'h6',
                        null,
                        React.createElement(
                          'a',
                          { href: post.link },
                          React.createElement('span', { dangerouslySetInnerHTML: { __html: post.htmlTitle } })
                        )
                      ),
                      React.createElement(
                        'p',
                        null,
                        React.createElement('span', { dangerouslySetInnerHTML: { __html: post.htmlSnippet } })
                      ),
                      function () {
                        if (post.pagemap && post.pagemap.cse_thumbnail && post.pagemap.cse_thumbnail[0] && post.pagemap.cse_thumbnail[0].src) {
                          return React.createElement(
                            'div',
                            null,
                            React.createElement('hr', null),
                            React.createElement('img', { src: post.pagemap.cse_thumbnail[0].src, style: { "maxWidth": "100%" } })
                          );
                        }
                      }()
                    )
                  );
                }),
                function () {
                  if (_this3.getGoogle().length == 0) {
                    return React.createElement(
                      'p',
                      null,
                      'No articles found.'
                    );
                  }
                }()
              );
            } else {
              return React.createElement(
                'div',
                null,
                function () {
                  if (_this3.state.current) {
                    return React.createElement(
                      'div',
                      null,
                      React.createElement(
                        'h4',
                        null,
                        'Current Location'
                      ),
                      React.createElement(
                        'p',
                        null,
                        'Using neural networking, we detected the most likely natural event to happen near you. Here are some tips to prepare for such an event.'
                      ),
                      React.createElement('hr', null)
                    );
                  } else {
                    return React.createElement('br', null);
                  }
                }(),
                React.createElement(_Tips2.default, { name: _this3.state.currentLocation })
              );
            }
          }()
        );
      }
    }]);

    return RightSide;
  }(React.Component);

  exports.default = RightSide;
});
//# sourceMappingURL=RightSide.js.map
