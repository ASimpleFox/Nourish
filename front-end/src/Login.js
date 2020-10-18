import React, { Component } from 'react'
import { PROFILE_ROUTE } from './routes';
import { IMAGE_ROUTE } from './routes';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

export class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:8000/login";
        var self = this;
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl, payload)
            .then(function (response) {
                console.log(response);
                if (response.data.status === 200) {
                    console.log("Login successfull");
                }
                else if (response.data.status === 400) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
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
                    Login
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
                    {
                        this.state.username === "" && this.state.password === "" ?
                            <Fab label="Submit" color="secondary" variant="extended" onClick={(event) => this.handleClick(event)} disabled>
                                Login
                            </Fab>
                            :
                            <Fab label="Submit" color="secondary" variant="extended" onClick={(event) => this.handleClick(event)} >
                                Login
                            </Fab>
                    }
                    
                </div>
            </ThemeProvider>
        )
    }
}

export default Login