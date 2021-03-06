import React from 'react';
import auth from "../Helpers/auth";
import CreateAccount from "./CreateAccount";


class ProtectedRoute extends React.Component {
    render() {
        let {as: Comp, ...props} = this.props;
        return auth.isAuthenticated() ? <Comp {...props} /> : <CreateAccount redirectedHere={true}/>;
    }
}

export default ProtectedRoute;
