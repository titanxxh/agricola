import {Game} from 'boardgame.io/core';
import {initPlayer} from "./player";

export const maxBoardLength = 9;
export const maxBoardHeight = 6;
export const mainActionTitle = [
    ["Copse", "Farm Expansion", "Round1", "Round2", "Round5", "Round8", "Round10", "Round12", "Round14"],
    ["Grove", "Meeting Place", "", "", "", "", "", "", ""],
    ["Resource Market", "Grain Seeds", "Forest", "Round3", "Round6", "Round9", "Round11", "Round13", ""],
    ["Hollow", "Farmland", "Clay Pit", "", "", "", "", "", ""],
    ["Lessons2", "Lessons1", "Reed Bank", "Round4", "Round7", "", "", "", ""],
    ["Traveling Players", "Day Laborer", "Fishing", "", "", "", "", "", ""],
];
export const playerColor = ["red", "yellow", "blue", "purple"];
export const defaultPlayerNum = 4;

const isValidActionCellId = function (id) {
    return mainActionTitle[Math.floor(id / maxBoardLength)][id % maxBoardLength] !== ""
};

export const isActionCellUnoccupied = function (cells, id) {
    return cells[id].occupied === -1 && isValidActionCellId(id)
};

export const Agricola = Game({
    setup: () => {
        let g = {
            actionCells: Array.from({length: maxBoardLength * maxBoardHeight}, () => ({
                occupied: -1
            })),
            players: Array.from({length: defaultPlayerNum}, (i) => initPlayer(i))
        };
        return g
    },

    moves: {
        clickCell(G, ctx, id) {
            if (isActionCellUnoccupied(G.actionCells, id)) {
                const actionCells = [...G.actionCells];
                actionCells[id].occupied = ctx.currentPlayer;
                return {...G, actionCells};
            }
            alert("invalid click");
        }
    },

    flow: {},

    playerView: (G, ctx, playerID) => {
        let r = { ...G };

        if (r.secret !== undefined) {
            delete r.secret;
        }

        for (let i = 0; i < defaultPlayerNum; i++) {
            if (i != playerID) {
                delete r.players[i].secret
            }
        }

        return r;
    },
});