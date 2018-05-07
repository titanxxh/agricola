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
    return this.public.workingMembers.length < this.public.farm.members + this.public.farm.guests;
  }
}

export function initPlayer(id) {
  return new player({
    id: id,
    playerPublic: new playerPublic({
      farm: {
        members: 2,
        guests: 0,
        workingMembers: [],
        totalStables: 4,
        stables: [],
        totalFences: 15,
        fences: []
      },
      resources: {
        food: 0,
        wood: 0,
        clay: 0,
        stone: 0,
        reed: 0,
        grain: 0,
        vegetable: 0,
        sheep: 0,
        boar: 0,
        cattle: 0
      },
      improvements: [],
      occupations: []
    }),
    playerSecret: new playerSecret({
      minors: [],
      occupations: []
    })
  });
}
