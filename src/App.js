import React from 'react';
import './App.css';
import './CreateAccount'
import {Router} from "@reach/router";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Call from "./Call";


const App = (props) => {
    return (
        <div>
            <Router>
                <CreateAccount path="/"/>
                <Login path="/login"/>
                {/*todo need to add protected routes*/}
                <Call path="/call"/>
            </Router>
        </div>
    );
}

export default App;
