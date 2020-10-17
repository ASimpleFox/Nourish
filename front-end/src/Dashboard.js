import React, { Component } from 'react'
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

export class Dashboard extends Component {
    state = {
        step: 0,
        height: "",
    }

    render() {
        const { step } = this.state;
        return (
            <ThemeProvider>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h5">
                                Nourish
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div style={{ height: '70%' }}>
                    <Fab style={{ alignSelf: 'flex-end'}} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
            </ThemeProvider>
        )  
    }
}

export default Dashboard