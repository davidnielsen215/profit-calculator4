import React, { Component } from 'react'
import {    MuiThemeProvider,
            RadioGroup, 
            CardContent, 
            AppBar, 
            Button, 
            Radio, 
            FormControlLabel, 
            FormControl, 
            Typography, 
            Card ,
        } from '@material-ui/core'
import EntireLogo from '../images/EntireLogo.png'
import '../LandingPage.css'



export class StoreType extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

    render() {
        const { values, handleChange } = this.props 
        return (
            <div className="background">
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position='static' style={{backgroundColor: '#151856' }}>
                        <Typography variant="h4" style={{paddingTop: '2%', paddingBottom: '2%', padding: "2%"}}>
                            What type of retail store do you have?
                        </Typography>
                    </AppBar>
                    
                    <br></br>
                    <br></br>
                <Card className='card'>
                    <CardContent>
                    <h4>Step {this.getStep(values.step)} of 5</h4>
                    <br/>
                    {/* <div className="progress"> */}
                    {/* <ProgressBar animated now={20}/> */}
                    {/* </div> */}
                    <br/>
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('storeType')} defaultValue={values.storeType}>
                        <FormControlLabel value="Ski Shop" control={<Radio color="primary"/>} label="Ski Shop" />
                        <FormControlLabel value="Snowboard Shop" control={<Radio color="primary"/>} label="Snowboard Shop" />
                        <FormControlLabel value="Ski + Snowboard Shop" control={<Radio color="primary"/>} label="Ski + Snowboard Shop" />
                        <FormControlLabel value="Outdoor Gear + Wear" control={<Radio color="primary"/>} label="Outdoor Gear + Wear" />
                    </RadioGroup>
                    </FormControl>
                    {/* <br/> */}
                    <br/>
                    <Button 
                        style={styles.button}
                        onClick={this.continue}
                        >continue</Button>
                    </CardContent>
                </Card>
                
                </React.Fragment>
            </MuiThemeProvider>
            <br/>
            <img className='entirelogo' src={EntireLogo} alt=""/>
            </div>
        )
    }
}

const styles = {
    button: {
        color: 'white',
        minWidth: '60%',
        margin: 25,
        backgroundColor: '#151856'
    },
    card: {
        minWidth: '45%', 
        display: 'inline-block', 
        boxShadow: '6px 6px'
    }
}

export default StoreType
