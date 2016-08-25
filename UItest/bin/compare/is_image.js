var readChunk = require('read-chunk');
var fileType = require('file-type');

module.exports = function (file) {
  var buffer = readChunk.sync(file, 0, 262);
  var tmp = fileType(buffer);
  if (tmp && tmp.mime.match(/image/)) {
    return true;
  } else {
    return false;
  }
};