import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, AppBar, Button, FormControlLabel, 
    Radio, FormControl, TextField, Card, CardContent } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import EntireLogo from '../images/EntireLogo.png'
import { Spring } from 'react-spring/renderprops'

export default class NetProfit extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    getStep = (x) => {
        const returnedStep = x -1
        return returnedStep
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
                        <Card className='card'>
                            <CardContent>
                                <h4>Step {this.getStep(values.step)} of 4</h4>
                                <br/>
                                
                                <div style={{background: 'linear-gradient(90deg, rgba(0,73,176,1) 0%, rgba(0,19,119,1) 100%)', borderRadius: '5px', height: '4vh'}}>
                                    <h3 style={{ color: 'white', padding: '4px'}}>What was your net profit (%) from previous year?</h3>
                                </div>
                                <br/>
                                <FormControl component="fieldset" >
                                    <RadioGroup onChange={handleChange('netProfit')} defaultValue={values.netProfit}>
                                        <FormControlLabel value="1.95%" control={<Radio color="primary"/>} label="0.0% - 3.9%" />
                                        <FormControlLabel value="5.45%" control={<Radio color="primary"/>} label="4.0% - 6.9%" />
                                        <FormControlLabel value="8.45%" control={<Radio color="primary"/>} label="7.0% - 9.9%" />
                                        <FormControlLabel value="11.45%" control={<Radio color="primary"/>} label="10.0% - 12.9%" />
                                        <FormControlLabel value="14.45%" control={<Radio color="primary"/>} label="13.0% - 15.9%" />    
                                    </RadioGroup>
                                </FormControl>
                                <br/>
                                <TextField
                                    label="Other (Numbers Only)"
                                    className='other'
                                    onChange={handleChange('netProfit')}
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: this.NumberFormatCustom1,
                                    }}
                                />
                                <br/>
                                <Button 
                                    style={styles.button2}
                                    onClick={this.back}
                                >   previous
                                </Button>
                                <Button 
                                    style={styles.button}
                                    onClick={this.continue}
                                >   continue
                                </Button>
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

const styles = {
    button: {
        color: 'white',
        minWidth: '30%',
        margin: 25,
        backgroundColor: '#151856'
    },
    button2: {
        color: 'white',
        minWidth: '30%',
        margin: 25,
        backgroundColor: '#6f1502'
    },
    card: {
        minWidth: '45%', 
        display: 'inline-block', 
        boxShadow: '6px 6px'
    }
    
}

