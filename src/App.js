import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Start from "./component/Start";
import GameBoard from "./component/GameBoard";
import End from "./component/End";
import Error from "./component/Error";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/game" element={<GameBoard/>}/>
            <Route path="/end" element={<End/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default App;
