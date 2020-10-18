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

export class Dashboard extends Component {
    state = {
        profile: false,
        image: false,
        height: "",
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