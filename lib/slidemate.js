var fs = require('fs');
var path = require('path');

var ejs = require('ejs');
var ncp = require('ncp').ncp;
var markdown = require('marked').parse;

exports.getSlides = function (content) {
  var spliter = /(^#{2}[^#][\s\S]*?)(?=^#{2}[^#]|\0)/igm;
  var matched;
  var results = [];
  while ((matched = spliter.exec(content))) {
    if (matched) {
      results.push(matched[1]);
    }
  }
  return results.map(function (trunk) {
    return markdown(trunk);
  });
};

exports.getTitle = function (content) {
  var titleReg = /(.*)\r?\n(\=+)/gm;
  var matched;
  var title;
  while ((matched = titleReg.exec(content))) {
    if (matched) {
      title = matched[1];
    }
  }
  return title;
};

exports.process = function (file, output) {
  var template = fs.readFileSync(path.join(__dirname, '../template/index.html'), 'utf-8');
  var content = fs.readFileSync(file, 'utf-8');
  var slides = exports.getSlides(content);
  var ret = {slides: slides};
  ret.title = exports.getTitle(content);
  fs.writeFileSync(path.join(output, 'index.html'), ejs.render(template, ret));
  // copy styles
  ncp(path.join(__dirname, '../template/reveal.js'), path.join(output, 'reveal.js'), function () {});
};
