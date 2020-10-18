import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { LOGIN_ROUTE } from './routes';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

export class Register extends Component {
    state = {
        login: false,
        username: "",
        password: "",
        email: "",
        age: "",
        height: "",
        weight: "",
        gender: ""
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    completed() {
        return this.state.email !== "" && this.state.password !== "" && this.state.username !== "";
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:8000/credential";
        var self = this;
        var payload = {
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email,
            "age": this.state.age,
            "height": this.state.height,
            "weight": this.state.weight,
            "gender": this.state.gender
        }
        axios.post(apiBaseUrl, payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("Login successfull");
                    this.setState({ login: true });
                } else if (response.status === 205) {
                    console.log("Login failed");
                    alert("username or passwords already exists")
                }
                else if (response.status === 400) {
                    console.log("Username password not exist");
                    alert("Username password not exist")
                }
                else {
                    console.log("Server Error");
                    alert("Server error");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (this.state.home === true) {
            return (<Redirect to={LOGIN_ROUTE} />);
        }
        return (
            <ThemeProvider>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h4">
                                Nourish
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <br />
                <Typography variant="h4">
                    Create New Account
                </Typography>
                <br />
                <div style={{ height: '70%' }}>
                    <TextField
                        variant="outlined"
                        label="Username"
                        onChange={this.handleChange('username')}
                    />
                    <br />
                    <br />
                    <TextField
                        type="password"
                        variant="outlined"
                        label="Password"
                        onChange={this.handleChange('password')}
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        label="Email"
                        onChange={this.handleChange('email')}
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        label="Age"
                        onChange={this.handleChange('age')}
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        label="Height"
                        onChange={this.handleChange('height')}
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        label="Weight"
                        onChange={this.handleChange('weight')}
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        label="Gender"
                        onChange={this.handleChange('gender')}
                    />
                    <br />
                    <br />
                    {
                        this.completed() ?
                            <Fab label="Submit" color="secondary" variant="extended" onClick={(event) => this.handleClick(event)} >
                                Register
                            </Fab>
                            :
                            <Fab label="Submit" color="secondary" variant="extended" onClick={(event) => this.handleClick(event)} disabled>
                                Register
                            </Fab>
                    }

                </div>
            </ThemeProvider>
        )
    }
}

export default Register