
var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

app.use(express.static('public'));
app.use(express.static('bower_components'));
app.use(express.static('build'));
app.use(express.static('node_modules/react/dist'));
app.use(express.static('node_modules/react-dom/dist'));
app.use(express.static('node_modules/convnetjs/build'));
app.use(express.static('./'));

app.get('/map/:x/:y', function(req, res) {

  http.get('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/2016-04-23/GoogleMapsCompatible_Level9/1/' + req.params.x + '/' + req.params.y + '.jpeg', function(_res) {
    res.writeHead(_res.statusCode, _res.headers);

    var data = '';
    var chunks = [];

    // _res.setEncoding('utf8');
    _res.on('data', (chunk) => {
      res.write(chunk);
      chunks.push(chunk);
    });
    _res.on('end', () => {
      if (!fs.existsSync('public/map/' + req.params.x)) {
        fs.mkdirSync('public/map/' + req.params.x);
      }
      fs.writeFileSync('public/map/' + req.params.x + '/' + req.params.y + '.jpeg', Buffer.concat(chunks));
      res.write(Buffer.concat(chunks));
      res.end();
    })
  }).on('error', function(e) {
    res.send("none");
  });

});

app.listen(3000);

console.log("Up and running at 3000!");
