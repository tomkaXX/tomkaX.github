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

  var LeftSide = function (_React$Component) {
    _inherits(LeftSide, _React$Component);

    function LeftSide(props) {
      _classCallCheck(this, LeftSide);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftSide).call(this, props));
    }

    _createClass(LeftSide, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this2 = this;

        this.setState({});

        events.addEventListener('changeFocus', function (event) {
          _this2.setState(event.data);
          console.log(event.data);
          try {
            console.log(_this2.state.watson[0].document_tone.tone_categories[0].tones);
          } catch (e) {}
        });
      }
    }, {
      key: "getNasaImage",
      value: function getNasaImage() {

        try {
          if (this.state.twitter) {
            for (var tweet of this.state.twitter) {
              if (tweet.media) {
                return tweet.media;
              }
            }
          }
        } catch (e) {}

        try {
          if (this.state.google.items) {
            for (var post of this.state.google.items) {
              if (post.pagemap && post.pagemap.cse_thumbnail && post.pagemap.cse_thumbnail[0] && post.pagemap.cse_thumbnail[0].src) {
                return post.pagemap.cse_thumbnail[0].src;
              }
            }
          }
        } catch (e) {}

        try {
          if (this.google) {
            for (var post of this.google) {
              if (post.pagemap && post.pagemap.cse_thumbnail && post.pagemap.cse_thumbnail[0] && post.pagemap.cse_thumbnail[0].src) {
                return post.pagemap.cse_thumbnail[0].src;
              }
            }
          }
        } catch (e) {}

        if (!this.state.coords) {
          return "";
        }

        // var n = Math.pow(2, 4);
        // var lat_rad = this.state.coords.lat / 180 * Math.PI;
        // var xtile = Math.floor(n * ((this.state.coords.long + 180) / 360)
        // var ytile = Math.floor(n * (1 - (Math.log(Math.tan(lat_rad) + 1/Math.cos(lat_rad)) / Math.PI)) / 2);

        // mx, my = self.LatLonToMeters(lat, lng)
        // tx, ty = self.MetersToTile(mx, my, zoom)
        // return self.GoogleTile(tx, ty, zoom)

        var zoom = 5;
        var originShift = 2 * Math.PI * 6378137 / 2.0;
        // var originShift = 0;

        var mx = this.state.coords.long * originShift / 180.0;
        var my = Math.log(Math.tan((90 + this.state.coords.lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
        my = my * originShift / 180.0;

        var res = 2 * Math.PI * 6378137 / (256 * Math.pow(2, zoom));
        var px = (mx + originShift) / res;
        var py = (my + originShift) / res;

        var tx = Math.floor(Math.ceil(px / 256) - 1);
        var ty = Math.floor(Math.ceil(py / 256) - 1);
        ty = Math.pow(2, zoom) - 1 - ty;

        return "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/2016-04-23/GoogleMapsCompatible_Level9/" + zoom + "/" + ty + "/" + tx + ".jpeg";
      }
    }, {
      key: "getWatson",
      value: function getWatson() {
        var tones = {};

        try {
          var _tones = this.state.watson[0].document_tone.tone_categories[0].tones;
          for (var tone of _tones) {
            tones[tone.tone_id] = tone.score;
          }
        } catch (e) {
          return null;
        }

        return tones;
      }
    }, {
      key: "getWeather",
      value: function getWeather() {
        try {
          var obv = this.state.weather.observation;
          console.log(obv);
          console.log(this.state.weather.observation);
          var ret = {
            text: "N/A",
            wind: "N/A",
            temp: "N/A"
          };

          try {
            ret.text = obv.phrase_32char;
          } catch (e) {}
          try {
            ret.wind = obv.wdir;
          } catch (e) {}
          try {
            ret.temp = obv.metric.rh;
          } catch (e) {}

          console.log(ret);
          return ret;
        } catch (e) {
          return null;
        }
      }
    }, {
      key: "onCurrentLocation",
      value: function onCurrentLocation() {
        if (this.state.twitter == null && this.state.currentLocation) {
          return true;
        }

        return false;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return React.createElement(
          "div",
          { className: "container-fluid" },
          function () {
            if (!_this3.onCurrentLocation()) {
              return React.createElement(
                "div",
                null,
                React.createElement("img", { src: "images/based.png", width: "50%", style: { maxWidth: "100px", marginTop: "20px", marginBottom: "20px" } }),
                React.createElement(
                  "p",
                  null,
                  _this3.state.title
                ),
                React.createElement("img", { src: _this3.getNasaImage(), width: "100%" }),
                React.createElement("hr", null),
                React.createElement(
                  "h5",
                  null,
                  "Weather"
                ),
                function () {
                  var weather = _this3.getWeather();
                  console.log(weather);
                  if (weather) {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h6",
                        null,
                        weather.text
                      ),
                      React.createElement(
                        "strong",
                        null,
                        "Wind Direction:"
                      ),
                      " ",
                      weather.wind,
                      React.createElement("br", null),
                      React.createElement(
                        "strong",
                        null,
                        "Temperature:"
                      ),
                      " ",
                      weather.temp
                    );
                  } else {
                    return React.createElement(
                      "p",
                      null,
                      "N/A"
                    );
                  }
                }(),
                React.createElement("hr", null),
                React.createElement(
                  "h5",
                  null,
                  "Mood ",
                  React.createElement(
                    "small",
                    null,
                    "(Powered by Watson)"
                  )
                ),
                function () {
                  var watson = _this3.getWatson();
                  if (watson) {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement(
                          "div",
                          { className: "progress-bar progress-bar-danger", role: "progressbar", "aria-valuenow": Math.floor(watson.anger * 100), "aria-valuemin": "0", "aria-valuemax": "100", style: { minWidth: "2em", width: watson.anger * 100 + "%" } },
                          "Anger ",
                          Math.floor(watson.anger * 100),
                          "%"
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement(
                          "div",
                          { className: "progress-bar progress-bar-info", role: "progressbar", "aria-valuenow": Math.floor(watson.disgust * 100), "aria-valuemin": "0", "aria-valuemax": "100", style: { minWidth: "2em", width: watson.disgust * 100 + "%" } },
                          "Disgust ",
                          Math.floor(watson.disgust * 100),
                          "%"
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement(
                          "div",
                          { className: "progress-bar progress-bar-warning", role: "progressbar", "aria-valuenow": Math.floor(watson.fear * 100), "aria-valuemin": "0", "aria-valuemax": "100", style: { minWidth: "2em", width: watson.fear * 100 + "%" } },
                          "Fear ",
                          Math.floor(watson.fear * 100),
                          "%"
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement(
                          "div",
                          { className: "progress-bar progress-bar-success", role: "progressbar", "aria-valuenow": Math.floor(watson.joy * 100), "aria-valuemin": "0", "aria-valuemax": "100", style: { minWidth: "2em", width: watson.joy * 100 + "%" } },
                          "Joy ",
                          Math.floor(watson.joy * 100),
                          "%"
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "progress" },
                        React.createElement(
                          "div",
                          { className: "progress-bar", role: "progressbar", "aria-valuenow": Math.floor(watson.sadness * 100), "aria-valuemin": "0", "aria-valuemax": "100", style: { minWidth: "2em", width: watson.sadness * 100 + "%" } },
                          "Sadness ",
                          Math.floor(watson.sadness * 100),
                          "%"
                        )
                      )
                    );
                  } else {
                    return React.createElement(
                      "p",
                      null,
                      "N/A"
                    );
                  }
                }(),
                React.createElement("hr", null),
                React.createElement(
                  "p",
                  null,
                  "Made by Aris Koumis and Henry Tran."
                )
              );
            }
          }()
        );
      }
    }]);

    return LeftSide;
  }(React.Component);

  exports.default = LeftSide;
});
//# sourceMappingURL=LeftSide.js.map
