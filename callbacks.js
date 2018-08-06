function getHTML(options, callback) {
  var https = require('https');
  var str = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      str += data;
    });

    response.on('end', function() {
      return callback(str);
    });

  });

}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);