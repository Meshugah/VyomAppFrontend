import React from 'react';
import './App.css';
import './Components/CreateAccount'
import {Router} from "@reach/router";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/Login";
import Call from "./Components/Call";
import ProtectedRoute from "./Components/ProtectedRoute";


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
