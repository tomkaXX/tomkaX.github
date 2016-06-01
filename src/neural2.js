define(['./src/Loaders.js', './src/NeuralComputation.js', './src/ImageLoader_Overwrite.js'], function (_Loaders, _NeuralComputation) {
  'use strict';

  var Loaders = _interopRequireWildcard(_Loaders);

  var _NeuralComputation2 = _interopRequireDefault(_NeuralComputation);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  Promise.all([Loaders.CacheJSON('events.json'), Loaders.CacheJSON('sections.json'), Loaders.CacheJSON('bigNeuralNet.json')]).then(function () {

    var sections = Loaders.getJSON('sections.json');
    var data = Loaders.getJSON('events.json');
    var bigNeuralNet = Loaders.getJSON('bigNeuralNet.json');

    var computation = new _NeuralComputation2.default(convnetjs, data, sections);

    var canvas = document.getElementById("neural");

    computation.loadJson(bigNeuralNet.out);
    computation.draw(canvas);

    // setInterval(function() {
    //   computation.train();
    //   computation.draw(canvas);
    // }, 10);
  });
});
//# sourceMappingURL=neural2.js.map
