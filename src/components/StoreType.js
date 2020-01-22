import React, { Component } from 'react'
import {    MuiThemeProvider, RadioGroup, CardContent, 
            AppBar, Button, Radio, FormControlLabel, FormControl, 
            Card } from '@material-ui/core'
import EntireLogo from '../images/EntireLogo.png'
import '../LandingPage.css'
import { Spring } from 'react-spring/renderprops'

export default class StoreType extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
        this.props.internetLoss()
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
                        <AppBar position='static' style={{backgroundColor: 'white' }}>
                            <div>
                            <img className='entirelogo' src={EntireLogo} alt=""/>
                            </div>
                        </AppBar>
                        <br/>
                        <br/>
                        <Spring 
                            from={{  marginTop: '1500px'}}
                            to={{  marginTop: '0px'}}>
                            { props => (
                        <div style={props}>
                            <Card className='card'>
                                <CardContent>
                                        <h4>Step {this.getStep(values.step)} of 4</h4>
                                        <br/>
                                        <div style={{background: 'linear-gradient(90deg, rgba(0,73,176,1) 0%, rgba(0,19,119,1) 100%)', borderRadius: '5px', height: '4vh'}}>
                                        <h3 style={{ color: 'white', padding: '4px'}}>What Type of Retail Store do you have?</h3>
                                        </div>
                                        <br/>
                                    <FormControl component="fieldset" >
                                        <RadioGroup onChange={handleChange('storeType')} defaultValue={values.storeType}>
                                            <FormControlLabel value="Ski Shop" control={<Radio color="primary"/>} label="Ski Shop" />
                                            <FormControlLabel value="Snowboard Shop" control={<Radio color="primary"/>} label="Snowboard Shop" />
                                            <FormControlLabel value="Ski + Snowboard Shop" control={<Radio color="primary"/>} label="Ski + Snowboard Shop" />
                                            <FormControlLabel value="Outdoor Gear + Wear" control={<Radio color="primary"/>} label="Outdoor Gear + Wear" />
                                        </RadioGroup>
                                    </FormControl>
                                    <br/>
                                <Button 
                                    style={styles.button}
                                    onClick={this.continue}>continue
                                </Button>
                                </CardContent>
                            </Card>
                            <br/>
                            
                        </div>
                        )}
                        </Spring>
                        

                    </React.Fragment>
                </MuiThemeProvider>
                <br/>
                
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




