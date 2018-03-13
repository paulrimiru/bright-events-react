import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col} from 'react-flexgrid';

export default class Register extends Component {
    
    render() {
        const mainStyle = {
            width : '75%'
        }

        const divStyle = {
            margin : 12,
            marginTop : 18
        } 
        return (
            <MuiThemeProvider style={mainStyle}>
                <Row center="xs">
                    <Col xs="8">
                        <form>
                            <Row middle="xs">
                                <Col xs="6">
                                    <TextField 
                                        floatingLabelText="Username"
                                        refs="usernameField"
                                        name="username"
                                        style={divStyle}/>
                                </Col>
                            </Row>
                            <Row middle="xs">
                                <Col xs="6">
                                    <TextField 
                                        floatingLabelText="Email"
                                        refs="emailField"
                                        name="email"
                                        style={divStyle}/>
                                </Col>
                            </Row>
                            <Row middle="xs">
                                <Col xs="6">
                                    <TextField
                                        floatingLabelText="Password"
                                        refs="passwordField"
                                        name="password"
                                        style={divStyle}/>
                                </Col>
                            </Row>
                            <Row center="xs">
                                <Col xs="4">
                                    <RaisedButton name="submit" 
                                        onClick={this.clickHandler} 
                                        primary={true} 
                                        label="Register"
                                        style={divStyle}/>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </MuiThemeProvider>
        )
    }
}