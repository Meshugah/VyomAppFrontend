import React from 'react';
import './App.css';
import './CreateAccount'
import CreateAccount from "./CreateAccount";
import {Router} from "@reach/router";
import Login from "./Login";
import Call from "./Call";


const App = (props) => {
    return (
        <div>
            <Router>
                <CreateAccount path="/"/>
                <Login path="/login"/>
                <Call path="/call"/>
            </Router>
        </div>
    );
}

export default App;
