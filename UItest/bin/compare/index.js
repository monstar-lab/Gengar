var async = require('async');
var fs = require('fs-extra');
var junk = require('junk');
var path = require('path');
var moment = require('moment');
var generateImage =  require('./generateImage');
var sleep =  require('../util/sleep');
var dir_root = './result';
var dir_dest = 'compare'
var dir_date = moment().format('MM_DD');
var dir_screentshot = path.join(dir_root, dir_date);
var dir_design = path.join(dir_root, '00_design');
var data_compares = {};
/**
 * 拡張の削除を行う
 */
var remove_ext = function(file) {
  var extname = path.extname(file);
  return file.replace(extname,''); 
}
async.waterfall([
  /**
   * screenshotのデレクトリー構造を取得する
   */
  function(next) { 
    fs.readdir(dir_screentshot, function(err, files) {
      files = files.filter(junk.not); // 不可視ファイルの削除
      async.each(files, function(file, next) {
        var dir_file = path.join(dir_screentshot, file);
        fs.readdir(dir_file, function(err, screenshots) {
          screenshots = screenshots.filter(junk.not);
          screenshots = screenshots.filter(function(file){ //dir_destを配列から削除
                          return file != dir_dest
                        }).map(function(file) {
                          return path.join(dir_file, file); //pathを追加
                        });
          data_compares[file] = screenshots;
          next();
        })
      }, function() {
        next();
      })
    });
  },
  /**
   * screenshotのディレクトリー構造と、dir_designの画像を比較し、dir_design内に存在しないデータを取り除く
   */
  function(next) { 
    fs.readdir(dir_design, function(err, files) {
      files = files.filter(junk.not); // 不可視ファイルの削除
      var data = {};
      async.each(files, function(file, next) {
        for (var data_compare in data_compares) {
          if(remove_ext(file) === data_compare) {
            data[file] = data_compares[data_compare]
          }
        }
        next();
      }, function() {
        next(null, data);
      })
    });
  },
  /**
   * 画像の生成を行う
   */
  function(screenshots, next) {
    for (var page_name in screenshots) {
      screenshots[page_name].forEach(function(screenshot) {
        var base_image = path.join(dir_design, page_name);
        var _dest = path.join(dir_root, dir_date, remove_ext(page_name), dir_dest);
        fs.mkdirsSync(_dest)
        _dest = path.join(_dest,path.basename(screenshot));
        generateImage.overlap(base_image, screenshot, _dest);
        sleep(1000);
      })
    }
    next();
  }
], function() {
  return console.log('complite all compare task ==========================');
});
