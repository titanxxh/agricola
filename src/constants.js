import { Copse } from './action/copse';
import { Dummy } from './action/dummy';

export const maxBoardLength = 9;
export const maxBoardHeight = 6;
export const mainActionTitle = [
  ['Copse', 'FarmExpansion', 'Round1', 'Round2', 'Round5', 'Round8', 'Round10', 'Round12', 'Round14'],
  ['Grove', 'MeetingPlace', '', '', '', '', '', '', ''],
  ['ResourceMarket', 'GrainSeeds', 'Forest', 'Round3', 'Round6', 'Round9', 'Round11', 'Round13', ''],
  ['Hollow', 'Farmland', 'ClayPit', '', '', '', '', '', ''],
  ['Lessons2', 'Lessons1', 'ReedBank', 'Round4', 'Round7', '', '', '', ''],
  ['TravelingPlayers', 'DayLaborer', 'Fishing', '', '', '', '', '', ''],
];
export const playerColor = ['red', 'yellow', 'blue', 'purple'];
export const defaultPlayerNum = 4;
export const maxRound = 14;

export const mainActions = {
  Copse: () => new Copse(),
  Grove: () => new Dummy(),
  ResourceMarket: () => new Dummy(),
  Hollow: () => new Dummy(),
  Lessons2: () => new Dummy(),
  TravelingPlayers: () => new Dummy(),
  FarmExpansion: () => new Dummy(),
  MeetingPlace: () => new Dummy(),
  GrainSeeds: () => new Dummy(),
  Farmland: () => new Dummy(),
  Lessons1: () => new Dummy(),
  DayLaborer: () => new Dummy(),
  Forest: () => new Dummy(),
  ClayPit: () => new Dummy(),
  ReedBank: () => new Dummy(),
  Fishing: () => new Dummy(),
  Fencing: () => new Dummy(),
  GrainUtilization: () => new Dummy(),
  MajorImprovement: () => new Dummy(),
  SheepMarket: () => new Dummy(),
  HouseRedevelopment: () => new Dummy(),
  WesternQuarry: () => new Dummy(),
  BasicWishForChildren: () => new Dummy(),
  PigMarket: () => new Dummy(),
  VegetableSeeds: () => new Dummy(),
  EasternQuarry: () => new Dummy(),
  CattleMarket: () => new Dummy(),
  UrgentWishForChildren: () => new Dummy(),
  Cultivation: () => new Dummy(),
  FarmRedevelopment: () => new Dummy(),
};

export const stageActions = [
  ['Fencing', 'GrainUtilization', 'MajorImprovement', 'SheepMarket'],
  ['HouseRedevelopment', 'WesternQuarry', 'BasicWishForChildren'],
  ['PigMarket', 'VegetableSeeds'],
  ['EasternQuarry', 'CattleMarket'],
  ['UrgentWishForChildren', 'Cultivation'],
  ['FarmRedevelopment'],
];

export const shuffleArray = (arr, rand) =>
  arr
    .map(a => [rand(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

export const getShuffledStageActions = rand =>
  stageActions.map(a => shuffleArray(a, rand)).reduce((acc, x) => acc.concat(x), []);
