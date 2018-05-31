import { initPlayer } from '../player';
import { Lessons1 } from './Lessons1';

describe('lessons1 execute', () => {
  it('play first occ', () => {
    let a = new Lessons1();
    let G = { playersInfo: [initPlayer(0, 0)] };
    let p = G.playersInfo[0];
    p.draftOccupation({
      name: 'o1',
      requirement: (G, id) => true,
    });
    a.executeByPlayer(G, 0);
    expect(p.public.farm.workingMembers).toEqual(['Lessons1']);
    expect(a.occupied).toEqual([0]);
    // todo check occ is in public map
  });

  it('play second occ', () => {
    let a = new Lessons1();
    let G = { playersInfo: [initPlayer(0, 1)] };
    let p = G.playersInfo[0];
    p.draftOccupation({
      name: 'o1',
      requirement: (G, id) => true,
    });
    p.draftOccupation({
      name: 'o2',
      requirement: (G, id) => true,
    });
    p.playOccupation('o1');
    a.executeByPlayer(G, 0);
    expect(p.public.farm.workingMembers).toEqual(['Lessons1']);
    expect(a.occupied).toEqual([0]);
    expect(p.public.resources.food).toEqual(0);
    // todo check occ is in public map
  });
});

describe('lessons1 preCheck', () => {
  it('first free occ can be executed', () => {
    let a = new Lessons1();
    let G = { playersInfo: [initPlayer(0)] };
    G.playersInfo[0].public.resources.food = 0;
    expect(a.preCheck(G, 0)).toBe(true);
  });

  it('second occ is not free', () => {
    let a = new Lessons1();
    let G = { playersInfo: [initPlayer(0, 0)] };
    let p = G.playersInfo[0];
    p.draftOccupation({
      name: 'o1',
      requirement: (G, id) => true,
    });
    p.draftOccupation({
      name: 'o2',
      requirement: (G, id) => true,
    });
    p.playOccupation('o1');
    expect(a.preCheck(G, 0)).toBe(false);
    p.public.resources.food = 1;
    expect(a.preCheck(G, 0)).toBe(true);
  });
});
