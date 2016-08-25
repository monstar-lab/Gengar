var BrowserStack = require("browserstack");
var async = require('async');
var _ = require("lodash");
var moment = require('moment');
var fs = require('fs-extra');
var setting = require('../config/setting');
var sleep =  require('../util/sleep');
var download =  require('../util/download');
var sites = setting.sites;
var options = setting.options;
var browserStackCredentials = setting.browserStackCredentials;
var screenshotClient = BrowserStack.createScreenshotClient(browserStackCredentials);
var test_number = 0;

var test = function(sites) {
  var site = sites[test_number];
  async.waterfall([
    function(next) { //getBrowsers
      screenshotClient.getBrowsers(function(error, browsers) {
        console.log('getBrowsers')
        if (error) throw new Error(error);
        next()
      });
    },
    function(next) { //generateScreenshots
      console.log('generateScreenshots')
      options.url = site.url;
      screenshotClient.generateScreenshots(options, function(error, job) {
        if (error) throw new Error(error);
        next(null, job)
      });
    },
    function(job, next) { //getJob
      console.log('getJob')
      var all_done = false;
      var count = 0;
      var getJob = setInterval(function() {
        screenshotClient.getJob(job.job_id, function(error, job) {
          if (error) throw new Error(error);
          all_done = _.every(job.screenshots, { state : 'done'});
          if(all_done) {
            clearInterval(getJob);
            next(null, job.screenshots);
          }
        });
      }, 3000);
    },
    function(screenshots, next) { //downloadImage
      async.each(screenshots, function(screenshot, next) {
        var dir_root = './result'
        var date = moment().format('MM_DD');
        var dir_exp = dir_root + '/' + date + '/' + site.name + '/';
        fs.mkdirsSync(dir_exp);
        var image_name = screenshot.image_url.match(".+/(.+?)([\?#;].*)?$")[1]
        download(screenshot.image_url, dir_exp + image_name, function() {
          console.log('complite    ============= ' + image_name + ' =============');
          next();
        })
      }, function() {
        next();
      })
    }
  ], function() { //complete one test case
    test_number ++;
    if(sites[test_number]) { // check if there are more test case or not
      test(sites);
    } else {
      return console.log('complite all screenshot task ==========================');
    }
  });
}
test(sites);
