import React, { Component } from 'react'
import { PROFILE_ROUTE } from './routes';
import { HOME_ROUTE } from './routes';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';

export class Profile extends Component {
    state = {
        profile: false,
        home: false,
        age: "",
        height: "",
        weight: "",
        bmi: "",
        gender: ""
    }

    goToProfile = () => {
        this.setState({ profile: true });
    }

    goToHome = () => {
        this.setState({ home: true });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        if (this.state.profile === true) {
            this.setState({ profile: false });
            return (<Redirect to={PROFILE_ROUTE} />);
        }
        if (this.state.home === true) {
            return (<Redirect to={HOME_ROUTE} />);
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
                <div>
                    <Typography variant="h5">
                        Update your health information here.
                    </Typography>
                </div>
                <br />
                <div>
                    <ul>
                        <li>
                            <TextField required id="standard-required" label="Required" defaultValue="Age" />
                        </li>
                        <li>
                            <TextField required id="standard-required" label="Required" defaultValue="Height" />
                        </li>
                        <li>
                            <TextField required id="standard-required" label="Required" defaultValue="Weight" />
                        </li>
                        <li>
                            <TextField required id="standard-required" label="Required" defaultValue="Body Mass Index" />
                        </li>
                        <li>
                            <TextField required id="standard-required" label="Required" defaultValue="Gender" />
                        </li>
                    </ul>
                </div>
                <div style={{ height: '70%' }}>
                    <Fab color="secondary" variant="extended" style={{ margin: 10 }} onClick={this.goToHome}>
                        <ArrowBackIcon />
                        Dashboard
                    </Fab>
                </div>
            </ThemeProvider>
        )
    }
}

export default Profile