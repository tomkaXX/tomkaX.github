define(['exports', './Beacon.js', './Loaders.js'], function (exports, _Beacon, _Loaders) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Beacon2 = _interopRequireDefault(_Beacon);

  var Loaders = _interopRequireWildcard(_Loaders);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

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

  var CurrentLocation = function (_THREE$Object3D) {
    _inherits(CurrentLocation, _THREE$Object3D);

    function CurrentLocation(data) {
      _classCallCheck(this, CurrentLocation);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentLocation).call(this));

      _this.data = data;

      var currLocationEle = document.createElement("div");

      var currLocationTitle = document.createElement("span");
      currLocationTitle.textContent = "Current Location";
      currLocationEle.appendChild(currLocationTitle);

      currLocationEle.className = "popupDisplay tweet";
      currLocationEle.style.top = "0px";
      currLocationEle.style.left = "0px";
      _this.currLocationEle = currLocationEle;

      canvasWrapper.appendChild(currLocationEle);

      _this.currLocationEle.addEventListener('click', function (e) {
        _this.onClick();
      });

      var beacon = new _Beacon2.default();
      _this.add(beacon);
      beacon.rotation.x = -Math.PI / 2;
      beacon.position.z = -2.5;
      _this.beacon = beacon;
      _this.beacon.mesh.material.map = Loaders.Texture("images/current_location.png");

      var updateListener = function () {
        _this.update();
      };

      global.events.addEventListener('update', updateListener);

      _this.addEventListener('removed', function () {
        _this.destroy();
        global.events.removeEventListener('update', updateListener);
      });
      return _this;
    }

    _createClass(CurrentLocation, [{
      key: 'onClick',
      value: function onClick() {
        // leftSide.className = "";
        rightSide.className = "";
        biggieSmalls.className = "";
        // leftSide.scrollTop = 0;
        rightSide.scrollTop = 0;
        biggieSmalls.scrollTop = 0;

        var cat = earth.categoryFromLatLong(this.data.lat, this.data.long);

        events.dispatchEvent({ type: 'changeFocus', data: { twitter: null, currentLocation: cat, current: true } });
      }
    }, {
      key: 'startHover',
      value: function startHover() {}
    }, {
      key: 'stopHover',
      value: function stopHover() {}
    }, {
      key: 'destroy',
      value: function destroy() {}
    }, {
      key: 'update',
      value: function update() {
        this.lookAt(new THREE.Vector3(0, 0, 0));

        var pos3D = this.localToWorld(new THREE.Vector3(0, 0, 0));

        var pos = calc3Dto2D(pos3D);
        // console.log(pos);
        this.currLocationEle.style.left = Math.floor((pos.x + 1) / 2 * window.innerWidth) + 'px';
        this.currLocationEle.style.top = Math.floor(window.innerHeight - Math.floor((pos.y + 1) / 2 * window.innerHeight)) + 'px';
        // this.tweetEle.style.opacity

        if (!this.currLocationEle.overrideOpacity) {
          var dist = camera.position.length() / 2;
          var opacity = (dist - camera.position.distanceTo(pos3D)) / dist;
          if (opacity < 0) {
            opacity = 0;
            this.currLocationEle.style.display = 'none';
          } else {
            this.currLocationEle.style.display = 'inline-block';
          }

          if (opacity > 1) {
            opacity = 1;
          }

          this.currLocationEle.style.opacity = opacity;
        }

        if (this.currLocationEle.style.opacity <= 0) {
          this.currLocationEle.style.opacity = 0;
          this.currLocationEle.style.display = 'none';
        } else {
          if (this.hovering) {
            this.currLocationEle.style.display = 'inline-block';
          }
        }
      }
    }]);

    return CurrentLocation;
  }(THREE.Object3D);

  exports.default = CurrentLocation;
});
//# sourceMappingURL=CurrentLocation.js.map
