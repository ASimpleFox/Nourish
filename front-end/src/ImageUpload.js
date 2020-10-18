import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Webcam from "react-webcam";
import Fab from '@material-ui/core/Fab';

export class ImageUpload extends Component {
    state = {
        imageSrc: null,
        step: 0,
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
                <Fab variant="extended">
                    Next Step
                </Fab>
            </ThemeProvider>
        )
    }
}

export default ImageUpload