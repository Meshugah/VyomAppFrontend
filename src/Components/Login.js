import { Jumbotron ,Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from 'react';
import axios from "axios";
import auth from "../Helpers/auth";
import {navigate} from "@reach/router";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Form className="login-form form-wrapper" onSubmit={(e) => this.login(e)}>
                    <Jumbotron>
                        <h5 className="display-4">Welcome Back!</h5>
                        <p className="lead">We've got a new feature we're excited to share with you. Login to check it out ✨</p>
                    </Jumbotron>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input type="number" id="phoneNumber" placeholder="10 digit number. No extension" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="enterPassword">Password</Label>
                        <Input type="password" id="enterPassword" placeholder="8 character password" required/>
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button className="btn-block" color="success">Login</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

    login(e) {
        e.preventDefault()
        let request = {
            password: document.getElementById('enterPassword').value,
            phoneNumber: document.getElementById('phoneNumber').value
        }
        axios.post('http://localhost:3000/auth/login', request)
            .then(response => {
                // stores jwt
                auth.login(response.data)

                if (auth.isAuthenticated(response.data)) {
                    navigate(`/call`)
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}


export default Login;
