import {Badge, Button, Col, Form, FormGroup, Input, Label, Row, Alert} from "reactstrap";
import React from 'react';
import {Link, navigate} from "@reach/router"
import axios from "axios";
import auth from "../Helpers/auth";


class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.register.bind(this);
        this.state = {
            visible: true
        }
    }


    render() {
        return (
            <div className="wrapper">
                <Form className="login-form form-wrapper text-center" onSubmit={(e) => this.register(e)}>
                    <Row className="mb-3">
                        <Col className="text-center">
                            <h1>Vyom<Badge color="success">Web</Badge></h1>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="text" id="Name" placeholder="Enter your full name" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" id="Password" placeholder="8 character password" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="PhoneNumber">Phone Number</Label>
                        <Input type="number" id="PhoneNumber" placeholder="10 digit number. No extension" required/>
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button className="btn-block" color="success">Create Account</Button>
                        </Col>
                    </Row>
                    <Button color="link"><Link to="/login">Already have an account?</Link></Button>
                </Form>
            </div>
        )
    }

    toggle = () => this.setState({visible: !this.state.visible})

    register(e) {
        e.preventDefault()
        let request = {
            name: document.getElementById('Name').value,
            password: document.getElementById('Password').value,
            phoneNumber: document.getElementById('PhoneNumber').value
        }
        axios.post('http://localhost:3000/auth/register', request)
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

export default CreateAccount;
