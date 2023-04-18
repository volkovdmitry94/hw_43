import React from 'react';
import {useDispatch} from "react-redux";
import {changeNameAction} from "../actions/userActions";
import {useNavigate} from "react-router-dom";

const Start = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changeUserName = (event) => {
        event.preventDefault();
        const name = event.target.nameInput.value;
        dispatch(changeNameAction(name));
        navigate("/game");
    }

    return (
        <div onSubmit={changeUserName} className="table">
            <div className="startHeader">Ready for WAR</div>
            <form className="formName">
                <input className="nameInput" name="nameInput" type="text"
                       minLength="3" maxLength="15" placeholder="Enter your name"/>
                <button className="btn" type="submit">start</button>
            </form>
        </div>
    );
};

export default Start;
