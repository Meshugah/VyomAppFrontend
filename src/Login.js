import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import React from 'react';

const Login = () => {
    return(
        <div className="wrapper">
            <Form className="login-form form-wrapper">
                <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="number" id="phoneNumber" placeholder="10 digit number. No extension"/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" id="examplePassword" placeholder="8 character password"/>
                </FormGroup>
                <Button className="create-account-button" color="success">Login</Button>
            </Form>
        </div>
    )
}


export default Login;
