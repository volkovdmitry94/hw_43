import React, {useEffect} from 'react';
import {changeFinalCompScoresAction, changeFinalPlrScoresAction, newGame} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const End = () => {
    const dispatch = useDispatch();
    const {roundScores, finalScores} = useSelector(state => state);
    const navigate = useNavigate();


    useEffect(() => {
        if (roundScores.computerScores > roundScores.playerScores) {
            dispatch(changeFinalCompScoresAction(finalScores.computerScores + 1))
        } else if (roundScores.computerScores <= roundScores.playerScores) {
            dispatch(changeFinalPlrScoresAction(finalScores.playerScores + 1))
        }
    }, []);

    const again = () => {
        navigate((-1));
        dispatch(newGame());
    }

    return (
        <div>
            <div className="table">
                <div className="redText">
                    {(roundScores.computerScores <= roundScores.playerScores) ? 'Win' : 'Lose'}
                </div>
                <div className="redText smaller">Current round:</div>
                <div className="redText smaller">
                    Computer: {roundScores.computerScores} - Player: {roundScores.playerScores}</div>
                <div className="redText smaller">Round statistics:</div>
                <div className="redText smaller">
                    Computer: {finalScores.computerScores} - Player: {finalScores.playerScores}</div>
                <button
                    onClick={() => again()}
                    className="btn">again?
                </button>
            </div>
        </div>
    );
};

export default End;