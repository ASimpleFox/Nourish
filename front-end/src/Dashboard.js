import React, { Component } from 'react'
import { PROFILE_ROUTE } from './routes';
import { IMAGE_ROUTE } from './routes';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export class Dashboard extends Component {
    state = {
        username: "",
        email: "",
        age: "",
        height: "",
        weight: "",
        gender: "",
        profile: false,
        image: false
    }

    async componentDidMount(props) {
        await this.setState({ username: this.props.location.state.username });
        var apiBaseUrl = "http://localhost:8000/personal";
        var self = this;
        var payload = {
            "username": this.state.username,
        }
        axios.post(apiBaseUrl, payload)
            .then(async (response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log("Create successfull");
                    await this.setState({ email: response.data.email });
                    await this.setState({ age: response.data.age });
                    await this.setState({ height: response.data.height });
                    await this.setState({ weight: response.data.weight });
                    await this.setState({ gender: response.data.gender });
                    console.log(this.state);
                } else if (response.status === 205) {
                    console.log("Created failed");
                    alert("username or email already exists")
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

    goToProfile = () => {
        this.setState({ profile: true });
    }

    goToImage = () => {
        this.setState({ image: true });
    }

    render() {
        if (this.state.profile === true) {
            return (<Redirect to={PROFILE_ROUTE} />);
        }
        if (this.state.image === true) {
            return (<Redirect to={IMAGE_ROUTE} />);
        }
        return (
            <ThemeProvider>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h4">
                                Nourish
                            </Typography>
                            <div style={{ flexGrow: 1 }}>
                            </div>
                            <Button color="inherit" onClick={this.goToProfile}>Profile</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <br />
                <Typography variant="h4">
                    How do I stay healthy?
                </Typography>
                <div>
                    <p> How to stay healthy! </p>
                </div>
                <br />
                <div style={{ height: '70%' }}>
                    <Fab color="primary" variant="extended" aria-label="add" onClick={this.goToImage}>
                        Nutrition Label
                        <AddIcon />
                    </Fab>
                </div>
            </ThemeProvider>
        )  
    }
}

export default Dashboard