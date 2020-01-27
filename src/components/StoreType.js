import React, { Component } from 'react'
import {    MuiThemeProvider, RadioGroup, CardContent, 
            AppBar, Radio, FormControlLabel, FormControl, 
            Card, Typography } from '@material-ui/core'
import EntireLogo from '../images/EntireLogo.png'
import '../LandingPage.css'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'

export default class StoreType extends Component {
    state = {
        alertDisplay: 'none',
        percentage: 0
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.storeType === ''){
            this.setState({
                alertDisplay: ''
            })
        } 
        else {
            this.props.nextStep()
            this.props.internetLoss()
        }
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 25 })
        }
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
                            from={{  opacity: 0}}
                            to={{  opacity: 1}}>
                            { props => (
                        <div style={props}>
                            <Card className='card'>
                                <CardContent>
                                <h4 className='step'>Step {this.getStep(values.step)} of 4</h4>
                                    
                                <ProgressBar percentage={this.state.percentage} />
                                        <br/>
                                        <br/>
                                    <div style={{background: 'linear-gradient(90deg, rgba(0,73,176,1) 0%, rgba(0,19,119,1) 100%)', borderRadius: '5px', height: '10%'}}>
                                        <h3 style={{ color: 'white', padding: '8px'}}>What type of retail store do you have?</h3>
                                        </div>
                                        <br/>
                                    <FormControl margin="dense">
                                        <RadioGroup onChange={handleChange('storeType')} defaultValue={values.storeType}>
                                            <FormControlLabel  onClick={this.progressStep} value="Ski Shop" control={<Radio color="primary" />} label={<p style={styles.form}>Ski Shop</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="Snowboard Shop" control={<Radio color="primary"/>} label={<p style={styles.form}>Snowboard Shop</p>} />
                                            <FormControlLabel onClick={this.progressStep} value="Ski + Snowboard Shop" control={<Radio color="primary"/>} label={<p style={styles.form}>Ski + Snowboard Shop</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="Outdoor Gear + Wear" control={<Radio color="primary"/>} label={<p style={styles.form}>Outdoor Gear + Wear</p>}/>
                                        </RadioGroup>
                                    </FormControl>
                                    <br/>
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}>continue
                                </button>
                                <div style={{display: `${this.state.alertDisplay}`}}>
                                <Alert severity='error'><AlertTitle>Please select an option</AlertTitle></Alert>
                                </div>
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
const styles= {
    form: {
        fontSize: '2vh'
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }





