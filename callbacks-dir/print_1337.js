var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  function findReplacement(character) {
    switch(character) {
      case 'a':
        return '4';
      case 'e':
        return '3';
      case 'o':
        return '0';
      case 'l':
        return '1';
      case 's':
        return '5';
      case 't':
        return '7';
      default:
        return character;
      }
}

var output = "";

html.split('').forEach(function(item) {
  output += findReplacement(item);
});

console.log(output);

}

getHTML(requestOptions, print1337);

