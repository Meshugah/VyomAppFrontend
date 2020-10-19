import React from 'react';
import './App.css';
import './CreateAccount'
import {Router} from "@reach/router";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Call from "./Call";
import ProtectedRoute from "./ProtectedRoute";


const App = () => {
    return (
        <div>
            <Router>
                <CreateAccount path="/"/>
                <Login path="/login"/>
                <ProtectedRoute as={Call} path="/call"/>
            </Router>
        </div>
    );
}

export default App;
