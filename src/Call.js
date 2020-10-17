import {
    Button,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import React from 'react';
import axios from "axios";
import auth from "./auth";
import {navigate} from "@reach/router";

class Call extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.startCall = this.startCall.bind(this);
        this.timeDropDownChange = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            selectedTime: 0,
            value: 0,
            loading: false,
            loadPage: 1
        }
    }

    toggle = () => this.setState({dropdownOpen: !this.state.dropdownOpen})

    render() {
        if (this.state.loadPage === 1 && !this.state.loading) {
            return (
                <div className="wrapper">
                    <Form className="login-form form-wrapper" onSubmit={(e) => this.startCall(e)}>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="Name">Name</Label>
                                    <Input type="text" id="Name" placeholder="Enter your full name"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="PhoneNumber">Phone Number</Label>
                                    <Input type="number" id="PhoneNumber" placeholder="Call recipient's 10 digit number. No extension"
                                           required/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="phoneDropdown">Call Duration</Label>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="phoneDropdown">
                                        <DropdownToggle caret>
                                            {this.state.selectedTime === 0 ? "Time" : this.state.selectedTime + " minutes"}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Call Duration</DropdownItem>
                                            <DropdownItem>
                                                <div onClick={() => this.setState({selectedTime: 5})}>5</div>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <div onClick={() => this.setState({selectedTime: 10})}>10</div>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <div onClick={() => this.setState({selectedTime: 15})}>15</div>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="success">Call</Button>
                    </Form>
                </div>
            )
        }
    }

    startCall(e) {
        e.preventDefault()
        this.setState({loading: true})
        let request = {
            name: document.getElementById('Name').value,
            phoneNumber: document.getElementById('PhoneNumber').value,
            callDuration: this.state.selectedTime,
        }
        // axios.post('http://localhost:3000/auth/register', request)
        //     .then(response => {
        //         // stores jwt
        //         auth.login(response.data)
        //
        //         if (auth.isAuthenticated(response.data)) {
        //             navigate(`/call`)
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
}


export default Call;
