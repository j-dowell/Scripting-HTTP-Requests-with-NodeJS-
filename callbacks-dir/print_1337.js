var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  var chars = {'a':'4','e':'3','o':'0','l':'1','s':'5','t':'7'};
  var extra = {'ck':'x'};
  var er = {'3r' : '0r'};
  var you = {'y0u':'j00'};

  output = html.replace(/[aeolst]/g, m => chars[m]);
  output = output.replace(/(ck)/g, m => extra[m]);
  output = output.replace(/(3r)/g, m => er[m]);
  output = output.replace(/(y0u)/g, m => you[m]);

console.log(output);

}

getHTML(requestOptions, print1337);


