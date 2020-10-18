import {
    Alert,
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
    Row,
    Spinner
} from "reactstrap";
import React from 'react';
import axios from "axios";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import './App.css'


class Call extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropDown = this.toggleDropdown.bind(this);
        this.startCall = this.startCall.bind(this);
        this.timeDropDownChange = this.toggle.bind(this);
        this.state = {
            visible: false,
            dropdownOpen: false,
            selectedTime: 0,
            value: 0,
            loading: false,
            loadPage: 1,
            alertVisible: true
        }
    }

    toggle = () => this.setState({visible: !this.state.visible})
    toggleDropdown = () => this.setState({dropdownOpen: !this.state.dropdownOpen})
    toggleAlert = () => this.setState({alertVisible: !this.state.alertVisible})

    callInfo = () => {
        return (
            <div>
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
                            <Input type="number" id="PhoneNumber"
                                   placeholder="Call recipient's 10 digit number. No extension"
                                   required/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="phoneDropdown">Call Duration</Label>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} id="phoneDropdown">
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
            </div>
        )
    }

    // todo extract component so that it can be passed a prop, loadPage, and will render either the timer or the entry form.
    render() {
        if (this.state.loadPage === 1) {
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
                                    <Input type="number" id="PhoneNumber"
                                           placeholder="Call recipient's 10 digit number. No extension"
                                           required/>
                                </FormGroup>
                            </Col>

                            <Col md={4}>
                                <FormGroup>
                                    <Label for="phoneDropdown">Call Duration</Label>
                                    <Dropdown isOpen={this.state.visible} toggle={this.toggle} id="phoneDropdown">
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
                        <Row>
                            <Col>
                                <Button className="btn-block" color="success" disabled={this.state.selectedTime === 0}>{!this.state.loading ? "Call" :
                                    <Spinner style={{width: '1rem', height: '1rem'}}/>}
                                </Button>
                            </Col>
                        </Row>

                    </Form>
                </div>
            )
        } else {
            return (
                <div className="wrapper">
                    <Form className="login-form form-wrapper">
                        <Row className="mb-3">
                            <Col md={{size: 6, offset: 4}}>
                                <CountdownCircleTimer
                                    isPlaying
                                    duration={this.state.selectedTime * 60}
                                    colors="#3ba546">
                                    {
                                        ({
                                             remainingTime
                                         }) => {
                                            const minutes = Math.floor(remainingTime / 60)
                                            const seconds = remainingTime % 60

                                            return (
                                                <div className="timer">
                                                    <div className="text">Session</div>
                                                    <div className="value">{`${minutes}:${seconds}`}</div>
                                                    <div className="text">Time</div>
                                                </div>
                                            );
                                        }
                                    }
                                </CountdownCircleTimer>
                            </Col>
                        </Row>
                        <Row>
                            <Alert color="success" isOpen={this.state.alertVisible} toggle={this.toggleAlert}>
                                <h4 className="alert-heading">Well done!</h4>
                                <p>
                                    You're taking the first steps to your well being and we just wanted to say we're
                                    happy for you!
                                </p>
                            </Alert>
                        </Row>
                    </Form>
                </div>
            )
        }
    }

    startCall(e) {
        e.preventDefault()

        this.setState({loading: true})
        this.setState({loadPage: 2})
        let request = {
            name: document.getElementById('Name').value,
            phoneNumber: document.getElementById('PhoneNumber').value,
            callDuration: this.state.selectedTime,
        }
        setTimeout(function(){
        axios.post('http://localhost:3000/users/call', request)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
        }, 500);
    }

    renderTime = ({remainingTime}) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };
}


export default Call;
