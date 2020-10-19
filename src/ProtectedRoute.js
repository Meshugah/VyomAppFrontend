import React from 'react';
import auth from "./auth";
import CreateAccount from "./CreateAccount";


class ProtectedRoute extends React.Component {
    render() {
        console.log(auth.isAuthenticated())
        let {as: Comp, ...props} = this.props;
        return auth.isAuthenticated() ? <Comp {...props} /> : <CreateAccount redirectedHere={true}/>;
    }
}

export default ProtectedRoute;
