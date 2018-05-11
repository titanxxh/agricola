import { Template } from './action/template';

var fs = require('fs');

export const mainActions = [
  'Copse',
  'Grove',
  'ResourceMarket',
  'Hollow',
  'Lessons2',
  'TravelingPlayers',
  'FarmExpansion',
  'MeetingPlace',
  'GrainSeeds',
  'Farmland',
  'Lessons1',
  'DayLaborer',
  'Forest',
  'ClayPit',
  'ReedBank',
  'Fishing',
  'Fencing',
  'GrainUtilization',
  'MajorImprovement',
  'SheepMarket',
  'HouseRedevelopment',
  'WesternQuarry',
  'BasicWishForChildren',
  'PigMarket',
  'VegetableSeeds',
  'EasternQuarry',
  'CattleMarket',
  'UrgentWishForChildren',
  'Cultivation',
  'FarmRedevelopment',
];

function generateAction(title, template) {
  let x = template.replace(/Template/g, title);
  x = x.replace(/Title/g, title);
  x = x.replace(/Detail/g, '');
  fs.writeFile(`./src/action/${title}.js`, x, function(err) {
    if (err) throw err;
    console.log(title, ' Saved!');
  });
  fs.appendFile(`./src/action/builder.js`, `${title}: () => new ${title}(),\n`, function(err) {
    if (err) throw err;
  });
  fs.appendFile(`./src/action/import.js`, `import { ${title} } from './action/${title}';\n`, function(err) {
    if (err) throw err;
  });
}

fs.readFile('./src/action/template.js', function(err, buf) {
  const template = buf.toString();
  fs.writeFile(`./src/action/builder.js`, '', function(err) {
    if (err) throw err;
  });
  fs.writeFile(`./src/action/import.js`, '', function(err) {
    if (err) throw err;
  });
  mainActions.forEach((v, i) => {
    generateAction(v, template);
  });
});
