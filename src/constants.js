import { Copse } from './action/copse';
import { Dummy } from './action/dummy';

export const maxBoardLength = 9;
export const maxBoardHeight = 6;
export const mainActionTitle = [
  ['Copse', 'Farm Expansion', 'Round1', 'Round2', 'Round5', 'Round8', 'Round10', 'Round12', 'Round14'],
  ['Grove', 'Meeting Place', '', '', '', '', '', '', ''],
  ['Resource Market', 'Grain Seeds', 'Forest', 'Round3', 'Round6', 'Round9', 'Round11', 'Round13', ''],
  ['Hollow', 'Farmland', 'Clay Pit', '', '', '', '', '', ''],
  ['Lessons2', 'Lessons1', 'Reed Bank', 'Round4', 'Round7', '', '', '', ''],
  ['Traveling Players', 'Day Laborer', 'Fishing', '', '', '', '', '', '']
];
export const playerColor = ['red', 'yellow', 'blue', 'purple'];
export const defaultPlayerNum = 4;
export const maxRound = 14;

export const mainActions = {
  Copse: () => new Copse(),
  Grove: () => new Dummy(),
  'Resource Market': () => new Dummy(),
  Hollow: () => new Dummy(),
  Lessons2: () => new Dummy(),
  'Traveling Players': () => new Dummy(),
  'Farm Expansion': () => new Dummy(),
  'Meeting Place': () => new Dummy(),
  'Grain Seeds': () => new Dummy(),
  Farmland: () => new Dummy(),
  Lessons1: () => new Dummy(),
  'Day Laborer': () => new Dummy(),
  Forest: () => new Dummy(),
  'Clay Pit': () => new Dummy(),
  'Reed Bank': () => new Dummy(),
  Fishing: () => new Dummy()
};

export const stageActions = [
  {
    Fencing: () => new Dummy(),
    'Grain Utilization': () => new Dummy(),
    'Major Improvement': () => new Dummy(),
    'Sheep Market': () => new Dummy()
  },
  {
    'House Redevelopment': () => new Dummy(),
    'Western Quarry': () => new Dummy(),
    'Basic Wish for Children': () => new Dummy()
  },
  {
    'Pig Market': () => new Dummy(),
    'Vegetable Seeds': () => new Dummy()
  },
  {
    'Eastern Quarry': () => new Dummy(),
    'Cattle Market': () => new Dummy()
  },
  {
    'Urgent Wish for Children': () => new Dummy(),
    Cultivation: () => new Dummy()
  },
  {
    'Farm Redevelopment': () => new Dummy()
  }
];
