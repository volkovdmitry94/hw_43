import {createStore} from "redux";
import {gameReducer} from "../reducers/gameReducer";
import DataManager from "../repository/dataManager";

const initialState = {
    name: 'Player',
    deck: DataManager.newGame(),
    roundScores: {
        computerScores: 0,
        playerScores: 0
    },
    finalScores: {
        computerScores: 0,
        playerScores: 0
    }
}

export const store = createStore(gameReducer, initialState);

