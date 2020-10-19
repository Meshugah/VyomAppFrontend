import React from 'react';
import auth from "./auth";
import Register from "./Register";


class ProtectedRoute extends React.Component {
    render() {
        console.log(auth.isAuthenticated())
        let {as: Comp, ...props} = this.props;
        return auth.isAuthenticated() ? <Comp {...props} /> : <Register/>;
    }
}

export default ProtectedRoute;
