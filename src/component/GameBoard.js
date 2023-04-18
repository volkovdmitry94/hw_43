import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeDeckAction, changeRoundCompScoresAction, changeRoundPlrScoresAction} from "../actions/userActions";
import {useNavigate} from "react-router-dom";

const GameBoard = () => {
    const dispatch = useDispatch();
    const {name, deck, roundScores} = useSelector(state => state);
    const navigate = useNavigate();

    const countScores = (array) => {
        if (array[0].power > array[1].power) {
            dispatch(changeRoundCompScoresAction(roundScores.computerScores + 1));
        } else if (array[0].power < array[1].power) {
            dispatch(changeRoundPlrScoresAction(roundScores.playerScores + 1));
        }
    }

    useEffect(() => countScores(deck), []);

    const nextCards = () => {
        const newDeck = deck.slice();
        newDeck.splice(0, 2);
        if (newDeck.length > 0) {
            countScores(newDeck);
            dispatch(changeDeckAction(newDeck));
        } else {
            navigate("/end");
        }
    }

    const cardNameFirst = deck[0].cardName;
    const cardNameLast = deck[1].cardName;
    return (
        <div className="table">
            <div className="flexStart">
                <div>COMPUTER</div>
            </div>
            <div className="smaller">Current Move: {27 - (deck.length / 2)}</div>
            <img className="card" src={require(`../imagesCards/${cardNameFirst}.png`)} alt={cardNameFirst}/>
            <div className="redText">{roundScores.computerScores}-{roundScores.playerScores}</div>
            <img className="card" src={require(`../imagesCards/${cardNameLast}.png`)} alt={cardNameLast}/>
            <div className="flexRow">
                <button onClick={() => nextCards()} className="btn">next</button>
                <div>{name}</div>
            </div>
        </div>
    );
};

export default GameBoard;