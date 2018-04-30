//Sample User

var user = {};

user.profile ={};
  user.profile.factionName = "User's Name";
  user.profile.background = 'Background String'
    //Military, Bandit, Rogue, Criminal
user.squad  = [];

  //Sample Squad Member

  squadMember = {};
    squadMember.name = 'Soldier Name'
    squadMember.description = 'Soldier Description'
    squadMember.weapon = 'Gun Name';
    squadMember.status = 'Health Status';
    squadMember.traits = [];
      trait = 'String Trait'
    squadMember.stats = {};
    squadMember.stats.kills = [];
    squadMember.isLeader = 'Flag for whoever is currently leading';

user.resources = {};
  user.resources.money = 'Integer Count of Money';
  user.resources.items = [];
    item = {};
      item.type = 'Gun/Loot/Vehicle'
      item.name = 'Descriptor of the Item'

user.base = {};
  user.base.campDescription = 'Rnd generated description';
  user.base.population = 'Count including squadMembers';

user.world
  user.world.factions = [];
    faction = {};
      faction.name
      faction.population
      faction.wealth
      faction.outposts = [];
      faction.villages
