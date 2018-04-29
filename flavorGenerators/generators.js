function generateFaction() {

var faction = ['Camp ~INTEGER~', 'Camp ~MODIFIER~ ~NAME~',
"The ~NAME~", "The ~MODIFIER~ ~NAME~"];

//Select Random faction
var roll = getRandomInt(faction.length);
var selectedFaction = faction[roll];

//Parse faction searching for Integer, Modifier, or Name

if(selectedFaction.indexOf('~INTEGER~') != -1){
	selectedFaction = selectedFaction.replace('~INTEGER~',getRandomInt(500));

}

if(selectedFaction.indexOf('~MODIFIER~') != -1){
	selectedFaction = selectedFaction.replace('~MODIFIER~',modifier[getRandomInt(modifier.length)]);
}

if(selectedFaction.indexOf('~NAME~') != -1){
  selectedFaction = selectedFaction.replace('~NAME~',name[getRandomInt(name.length)]);
}

return selectedFaction

}




var modifier = ['Big','Small','South','North','East','West','Shadow','Sun', 'Moon',
'Wet','Dry','Fire','Dark','Bright','Black','Red','White','Honor','Night','Day'];

var name = ['Shield','Bat','Wolf','Gun','Blade','Legion','Dog','Market','Divine','Warriors','Group'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


module.exports.generateFaction = generateFaction;
