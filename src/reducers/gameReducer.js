import {
    CHANGE_DECK, CHANGE_FINAL_COMP_SCORES, CHANGE_FINAL_PLR_SCORES,
    CHANGE_NAME, CHANGE_ROUND_COMP_SCORES, CHANGE_ROUND_PLR_SCORES,
    NEW_GAME
} from "../actions/userActions";
import DataManager from "../repository/dataManager";

export const gameReducer = (state, action) => {
    let scores;

    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload};
        case CHANGE_DECK:
            return {...state, deck: action.payload};
        case CHANGE_ROUND_COMP_SCORES:
            scores = {...state.roundScores};
            scores.computerScores = action.payload;
            return {...state, roundScores: scores};
        case CHANGE_ROUND_PLR_SCORES:
            scores = {...state.roundScores};
            scores.playerScores = action.payload;
            return {...state, roundScores: scores};
        case CHANGE_FINAL_COMP_SCORES:
            scores = {...state.finalScores};
            scores.computerScores = action.payload;
            return {...state, finalScores: scores};
        case CHANGE_FINAL_PLR_SCORES:
            scores = {...state.finalScores};
            scores.playerScores = action.payload;
            return {...state, finalScores: scores};
        case NEW_GAME:
            scores = {...state.roundScores};
            scores.computerScores = 0;
            scores.playerScores = 0;
            return {...state, deck: DataManager.newGame(), roundScores: scores};
        default:
            return state;
    }
}