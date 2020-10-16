import React from 'react';
import './App.css';
import './CreateAccount'
import CreateAccount from "./CreateAccount";
import {Router} from "@reach/router";
import Login from "./Login";


const App = (props) => {
    return (
        <div>
            <Router>
                <CreateAccount path="/"/>
                <Login path="/login"/>
            </Router>
        </div>
    );
}

export default App;
