import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, AppBar,
        FormControlLabel, Radio, FormControl, TextField, Card, CardContent } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import EntireLogo from '../images/EntireLogo.png'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'


export default class LastYear extends Component {
    state = {
        alertDisplay: 'none',
        textShow: 'none', 
        percentage: 75
    }
    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.lastYear === ''){
            this.setState({
                alertDisplay: ''
            })
        } else {
            this.props.nextStep()
            this.props.setResult()
        }
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    getStep = (x) => {
        const returnedStep = x -1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 100 })
        }
    }

    setText = e =>{
        e.preventDefault()
        this.setState({
            textShow: ''
        })
        this.progressStep()
    }

    NumberFormatCustom1(props) {
        const { inputRef, onChange, ...other } = props;
      
        return (
          <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
              onChange({
                target: {
                  value: values.value + '%',
                },
              });
            }}
            isNumericString
            suffix="%"
            />
        );
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
                        <Card className="card">
                            <CardContent>
                                <h4 className='step'>Step {this.getStep(values.step)} of 4</h4>
                                    
                                <ProgressBar percentage={this.state.percentage} />
                                    <br/>
                                    <br/>
                                <div style={{background: 'linear-gradient(90deg, rgba(0,73,176,1) 0%, rgba(0,19,119,1) 100%)', borderRadius: '5px', height: '10%'}}>
                                    <h3 style={{ color: 'white', padding: '4px'}}>What (%) of your sales were last year’s product?</h3>
                                </div>
                                    <br/>
                                <FormControl component="fieldset" >
                                    <RadioGroup onChange={handleChange('lastYear')} defaultValue={values.lastYear}>
                                        <FormControlLabel onClick={this.progressStep} value="15%" control={<Radio color="primary"/>} label="10% - 20%" />
                                        <FormControlLabel onClick={this.progressStep}value="25.5%" control={<Radio color="primary"/>} label="21% - 30%" />
                                        <FormControlLabel onClick={this.progressStep} value="35.5%" control={<Radio color="primary"/>} label="31% - 40%" />
                                        <FormControlLabel onClick={this.progressStep} value="45.5%" control={<Radio color="primary"/>} label="41% - 50%" />  
                                        <FormControlLabel onClick={this.setText} control={<Radio color="primary"/>} label="Other" />                      
                                    </RadioGroup>
                                </FormControl>
                                    <br/>
                                <div style={{ display: `${this.state.textShow}`}}>
                                <TextField
                                    label="(%) Enter Percentage"
                                    className="other"
                                    onChange={handleChange('lastYear')}
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: this.NumberFormatCustom1,
                                    }}
                                />
                                </div>
                                    <br/>
                                <button 
                                    className='previousButton'
                                    onClick={this.back}
                                >   previous
                                </button>
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}
                                >   calculate results
                                </button>
                                <div style={{display: `${this.state.alertDisplay}`}}>
                                <Alert severity='error'><AlertTitle>Please select an option</AlertTitle></Alert>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    )}
                </Spring>
                </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
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



