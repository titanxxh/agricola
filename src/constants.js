import { Copse } from './action/Copse';
import { Grove } from './action/Grove';
import { ResourceMarket } from './action/ResourceMarket';
import { Hollow } from './action/Hollow';
import { Lessons2 } from './action/Lessons2';
import { TravelingPlayers } from './action/TravelingPlayers';
import { FarmExpansion } from './action/FarmExpansion';
import { MeetingPlace } from './action/MeetingPlace';
import { GrainSeeds } from './action/GrainSeeds';
import { Farmland } from './action/Farmland';
import { Lessons1 } from './action/Lessons1';
import { DayLaborer } from './action/DayLaborer';
import { Forest } from './action/Forest';
import { ClayPit } from './action/ClayPit';
import { ReedBank } from './action/ReedBank';
import { Fishing } from './action/Fishing';
import { Fencing } from './action/Fencing';
import { GrainUtilization } from './action/GrainUtilization';
import { MajorImprovement } from './action/MajorImprovement';
import { SheepMarket } from './action/SheepMarket';
import { HouseRedevelopment } from './action/HouseRedevelopment';
import { WesternQuarry } from './action/WesternQuarry';
import { BasicWishForChildren } from './action/BasicWishForChildren';
import { PigMarket } from './action/PigMarket';
import { VegetableSeeds } from './action/VegetableSeeds';
import { EasternQuarry } from './action/EasternQuarry';
import { CattleMarket } from './action/CattleMarket';
import { UrgentWishForChildren } from './action/UrgentWishForChildren';
import { Cultivation } from './action/Cultivation';
import { FarmRedevelopment } from './action/FarmRedevelopment';

export const maxBoardLength = 5;
export const maxBoardHeight = 6;
export const mainActionTitle = [
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
  'Round1',
  'Round2',
  'Round3',
  'Round4',
  'Round5',
  'Round6',
  'Round7',
  'Round8',
  'Round9',
  'Round10',
  'Round11',
  'Round12',
  'Round13',
  'Round14',
];
export const playerColor = ['red', 'yellow', 'blue', 'purple'];
export const defaultPlayerNum = 4;
export const maxRound = 14;

export const mainActions = {
  Copse: () => new Copse(),
  Grove: () => new Grove(),
  ResourceMarket: () => new ResourceMarket(),
  Hollow: () => new Hollow(),
  Lessons2: () => new Lessons2(),
  TravelingPlayers: () => new TravelingPlayers(),
  FarmExpansion: () => new FarmExpansion(),
  MeetingPlace: () => new MeetingPlace(),
  GrainSeeds: () => new GrainSeeds(),
  Farmland: () => new Farmland(),
  Lessons1: () => new Lessons1(),
  DayLaborer: () => new DayLaborer(),
  Forest: () => new Forest(),
  ClayPit: () => new ClayPit(),
  ReedBank: () => new ReedBank(),
  Fishing: () => new Fishing(),
  Fencing: ({ round }) => new Fencing({ round }),
  GrainUtilization: ({ round }) => new GrainUtilization({ round }),
  MajorImprovement: ({ round }) => new MajorImprovement({ round }),
  SheepMarket: ({ round }) => new SheepMarket({ round }),
  HouseRedevelopment: ({ round }) => new HouseRedevelopment({ round }),
  WesternQuarry: ({ round }) => new WesternQuarry({ round }),
  BasicWishForChildren: ({ round }) => new BasicWishForChildren({ round }),
  PigMarket: ({ round }) => new PigMarket({ round }),
  VegetableSeeds: ({ round }) => new VegetableSeeds({ round }),
  EasternQuarry: ({ round }) => new EasternQuarry({ round }),
  CattleMarket: ({ round }) => new CattleMarket({ round }),
  UrgentWishForChildren: ({ round }) => new UrgentWishForChildren({ round }),
  Cultivation: ({ round }) => new Cultivation({ round }),
  FarmRedevelopment: ({ round }) => new FarmRedevelopment({ round }),
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
