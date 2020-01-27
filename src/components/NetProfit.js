import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, AppBar, FormControlLabel, 
    Radio, FormControl, TextField, Card, CardContent } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import EntireLogo from '../images/EntireLogo.png'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'


export default class NetProfit extends Component {
    state = {
        alertDisplay: 'none',
        textShow: 'none',
        percentage: 50
    }
    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.netProfit === ''){
            this.setState({
                alertDisplay: ''
            })
        } else {
            this.props.nextStep()
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
            this.setState({ percentage: 75 })
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
                    from={{  opacity: 0}}
                    to={{  opacity: 1}}
                    >
                    { props => (
                    <div style={props}>
                        <Card className='card'>
                            <CardContent>
                                <h4 className='step'>Step {this.getStep(values.step)} of 4</h4>
                                    
                                <ProgressBar percentage={this.state.percentage} />
                                    <br/>
                                    <br/>
                                <div style={{background: 'linear-gradient(90deg, rgba(0,73,176,1) 0%, rgba(0,19,119,1) 100%)', borderRadius: '5px', height: '10%'}}>
                                    <h3 style={{ color: 'white', padding: '8px'}}>What was your net profit (%) from previous year?</h3>
                                </div>
                                    <br/>
                                <FormControl component="fieldset" >
                                    <RadioGroup onChange={handleChange('netProfit')} defaultValue={values.netProfit}>
                                        <FormControlLabel onClick={this.progressStep} value="1.95%" control={<Radio color="primary"/>} label={<p style={styles.form}>0.0% - 3.9%</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="5.45%" control={<Radio color="primary"/>} label={<p style={styles.form}>4.0% - 6.9%</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="8.45%" control={<Radio color="primary"/>} label={<p style={styles.form}>7.0% - 9.9%</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="11.45%" control={<Radio color="primary"/>} label={<p style={styles.form}>10.0% - 12.9%</p>}/>
                                        <FormControlLabel onClick={this.progressStep} value="14.45%" control={<Radio color="primary"/>} label={<p style={styles.form}>13.0% - 15.9%</p>}/> 
                                        <FormControlLabel onClick={this.setText} control={<Radio color="primary"/>} label={<p style={styles.form}>Other</p>}/>
                                    </RadioGroup>
                                </FormControl>
                                    <br/>
                                <div style={{ display: `${this.state.textShow}`}}>
                                <TextField
                                    label="  (%) Enter Percentage"
                                    className='other'
                                    onChange={handleChange('netProfit')}
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
                                >   continue
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
            <br/>
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

  const styles= {
    form: {
        fontSize: '2vh'
    }
}

