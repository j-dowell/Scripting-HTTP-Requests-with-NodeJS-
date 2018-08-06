var https = require('https');

module.exports = function getHTML (options, callback) {
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
};