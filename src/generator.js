import * as cs from './constants';
var fs = require('fs');

function generateAction(title, template) {
  let x = template.replace(/Dummy/gi, title);
  x = x.replace(/Title/gi, title);
  x = x.replace(/Detail/gi, '');
  fs.writeFile(`./src/action/${title}.js`, x, function(err) {
    if (err) throw err;
    console.log(title, ' Saved!');
  });
}

fs.readFile('./src/action/dummy.js', function(err, buf) {
  const template = buf.toString();
  Object.keys(cs.mainActions).forEach((v, i) => {
    generateAction(v, template);
  });
});
