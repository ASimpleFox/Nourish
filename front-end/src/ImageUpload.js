import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { PROFILE_ROUTE } from './routes';
import { HOME_ROUTE } from './routes';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Webcam from "react-webcam";
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'

export class ImageUpload extends Component {
    state = {
        imageSrc: null,
        profile: false,
        home: false,
    }

    goToProfile = () => {
        this.setState({ profile: true });
    }

    goToHome = () => {
        this.setState({ home: true });
    }

    sendToServer = async () => {
        let response = await axios.post("http://localhost:8000/login", {
            imageUrl: "Hello"
        }).catch(error => {
            console.log(JSON.stringify(error));
        })
    }

    WebcamCapture = () => {
        const webcamRef = React.useRef(null);

        const videoConstraints = {
            facingMode: "environment"
        };

        const capture = async () => {
            await this.setState({
                imageSrc: webcamRef.current.getScreenshot()
            }, () => { console.log(this.state.imageSrc); });
            console.log("1");
        }

        return (
        <>
            <div>
                <Webcam
                    style={{ width: "30%", minWidth: 300 }}
                    audio={false}
                    height={"100%"}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={"100%"}
                    videoConstraints={videoConstraints}
                />
                </div>
                <br/>
                <div>
                {this.state.imageSrc === null ?
                    <Button variant="contained" color="primary" onClick={capture}>
                        Capture
                    </Button>
                    :
                    <Button variant="contained" color="primary" onClick={capture}>
                        ReCapture?
                    </Button>
                }
                </div>
                <br />
                </>
        );
    };

    render() {
        if (this.state.profile === true) {
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
                <br/>
                <Typography variant="h5">
                    Take a photo of the nutrition label.
                </Typography>
                <br />
                <div style={{ display: "inline", justifyContent: "center" }}>
                    <div>
                        <this.WebcamCapture />
                    </div>
                    {this.state.imageSrc &&
                        <img
                            style={{
                                border: "10px solid #303f9f",
                                margin: 10
                            }}
                            src={this.state.imageSrc}
                            alt=""
                        />
                    }
                </div>
                <div>
                    <Fab color="secondary" variant="extended" style={{ margin: 10 }} onClick={this.goToHome}>
                        <ArrowBackIcon />
                        Dashboard
                    </Fab>
                    {this.state.imageSrc !== null &&
                        <Fab color="secondary" variant="extended" onClick={this.sendToServer }>
                            Next Step
                            <ArrowForwardIcon />
                        </Fab>
                    }
                </div>
            </ThemeProvider>
        )
    }
}

export default ImageUpload