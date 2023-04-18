export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_DECK = 'CHANGE_DECK';
export const CHANGE_ROUND_COMP_SCORES = 'CHANGE_ROUND_COMP_SCORES';
export const CHANGE_ROUND_PLR_SCORES = 'CHANGE_ROUND_PLR_SCORES';
export const CHANGE_FINAL_COMP_SCORES = 'CHANGE_FINAL_COMP_SCORES';
export const CHANGE_FINAL_PLR_SCORES = 'CHANGE_FINAL_PLR_SCORES';
export const NEW_GAME = 'NEW_GAME';

export const changeNameAction = (name) => ({
    type: CHANGE_NAME,
    payload: name
});

export const changeDeckAction = (deck) => ({
    type: CHANGE_DECK,
    payload: deck
});

export const changeRoundCompScoresAction = (score) => ({
    type: CHANGE_ROUND_COMP_SCORES,
    payload: score
});

export const changeRoundPlrScoresAction = (score) => ({
    type: CHANGE_ROUND_PLR_SCORES,
    payload: score
});

export const changeFinalCompScoresAction = (score) => ({
    type: CHANGE_FINAL_COMP_SCORES,
    payload: score
});

export const changeFinalPlrScoresAction = (score) => ({
    type: CHANGE_FINAL_PLR_SCORES,
    payload: score
});

export const newGame = () => ({
    type: NEW_GAME
});