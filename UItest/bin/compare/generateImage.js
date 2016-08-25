var gm = require('gm').subClass({imageMagick: true});
module.exports.overlap = function (base_image, composite_image, dist) {
  gm(base_image)
    .composite(composite_image)
    .dissolve('70%')
    .geometry('+0+0')
    .write(dist, function() {
      console.log('generated ' + dist + ' =======================');
    });
};