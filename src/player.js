import * as cs from './constants';
import { farmBoard } from './farmBoard';

export class playerPublic {
  constructor({ farm, resources, improvements, occupations }) {
    this.farm = farm;
    this.resources = resources;
    this.improvements = improvements;
    this.occupations = occupations;
  }
}

export class playerSecret {
  constructor({ minors, occupations }) {
    this.minors = minors;
    this.occupations = occupations;
  }
}

export class player {
  constructor({ id, playerPublic, playerSecret }) {
    this.id = id;
    this.public = playerPublic;
    this.secret = playerSecret;
  }

  hasAvailableMembers() {
    return this.public.farm.workingMembers.length < this.public.farm.members + this.public.farm.guests;
  }

  playMinor(name) {
    const minor = this.secret.minors.get(name);
    this.public.improvements.set(name, minor);
    this.secret.minors.delete(name);
  }

  draftMinor(minor) {
    this.secret.minors.set(minor.name, minor);
  }

  playOccupation(name) {
    const occ = this.secret.occupations.get(name);
    this.public.occupations.set(name, occ);
    this.secret.occupations.delete(name);
  }

  draftOccupation(occ) {
    this.secret.occupations.set(occ.name, occ);
  }
}

export function initPlayer(id, startingFood = 3) {
  return new player({
    id: id,
    color: cs.playerColor[id],
    draftDone: false,
    movesConfirmed: false,
    playerPublic: new playerPublic({
      farm: {
        members: 2,
        newborn: 0,
        guests: 0,
        workingMembers: [],
        totalStables: 4,
        stables: [],
        totalFences: 15,
        fences: [],
        board: new farmBoard(),
      },
      resources: {
        food: startingFood,
        wood: 0,
        clay: 0,
        stone: 0,
        reed: 0,
        grain: 0,
        vegetable: 0,
        sheep: 0,
        boar: 0,
        cattle: 0,
      },
      improvements: new Map(),
      occupations: new Map(),
    }),
    playerSecret: new playerSecret({
      minors: new Map(),
      occupations: new Map(),
    }),
  });
}
