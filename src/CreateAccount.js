import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import React from 'react';
import axios from 'axios';
import auth from "./auth";
import {Link} from "@reach/router";


const CreateAccount = () => {
    const login = (e) => {
        e.preventDefault()
        let request = {
            name: document.getElementById('Name').value,
            password: document.getElementById('Password').value,
            phoneNumber: document.getElementById('PhoneNumber').value
        }
        axios.post('http://localhost:3000/auth/login', request)
            .then(response => {
                // stores jwt
                auth.login(response.data)

                if (auth.isAuthenticated(response.data)) {
                    let path = `/createsurvey`;
                    history.push(path);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className="wrapper">
            <Form className="login-form form-wrapper" onSubmit={(e) => login(e, props)}>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="text" id="Name" placeholder="Enter your full name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" id="Password" placeholder="8 character password"/>
                </FormGroup>
                <FormGroup>
                    <Label for="PhoneNumber">Phone Number</Label>
                    <Input type="number" id="PhoneNumber" placeholder="10 digit number. No extension"/>
                </FormGroup>
                <Button className="create-account-button" color="success">Create Account</Button>
                <Button color="link"><Link to="/login">Already have an account?</Link></Button>
            </Form>
        </div>
    )
}





export default CreateAccount;
