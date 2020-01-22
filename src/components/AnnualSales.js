import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, CardContent, Card, AppBar, Button, 
        FormControlLabel, FormControl, Radio, TextField } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import EntireLogo from '../images/EntireLogo.png'
import '../LandingPage.css'
import { Spring } from 'react-spring/renderprops'

export class AnnualSales extends Component {
    state = {
        isDisabled: false
    }
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

     NumberFormatCustom1(props) {
        const { inputRef, onChange, ...other } = props;
        // const {isDiabled} = this.state
        return (
          <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
              onChange({
                target: {
                  value: values.value,
                },
              });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
          />
        );
    }

    handleChar = () =>{
        const {handleChange} = this.props
        if(handleChange('annualSales').length > 0){
            this.setState({
                isDisabled: true
            })
        }
    }
    
    render() {
        const { values, handleChange } = this.props 
        const {isDisabled} = this.state
        
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
                                    <h3 style={{ color: 'white', padding: '4px'}}>Select Range for store's annual sales</h3>
                                </div>
                                <br/>
                                <FormControl >
                                    <RadioGroup onChange={handleChange('annualSales')} defaultValue={values.annualSales}>
                                        <FormControlLabel value="625000" disabled={isDisabled} control={<Radio color="primary"/>} label="$500K - $750K" />
                                        <FormControlLabel value="875000" disabled={isDisabled} control={<Radio color="primary"/>} label="$750K - $1M" />
                                        <FormControlLabel value="1250000" disabled={isDisabled} control={<Radio color="primary"/>} label="$1M - $1.5M" />
                                        <FormControlLabel value="1750000" disabled={isDisabled} control={<Radio color="primary"/>} label="$1.5M - $2M" />
                                        <FormControlLabel value="2500000" disabled={isDisabled} control={<Radio color="primary"/>} label="$2M - $3M" />
                                        <FormControlLabel value="4000000" disabled={isDisabled} control={<Radio color="primary"/>} label="$3M - $5M" />
                                        <FormControlLabel value="7500000" disabled={isDisabled} control={<Radio color="primary"/>} label="$5M - $10M" />
                                    </RadioGroup>
                                </FormControl>
                                <br/>
                                <TextField
                                    label="Other (Numbers Only)"
                                    className='other'
                                    onChange={handleChange('annualSales')}
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: this.NumberFormatCustom1
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

export default AnnualSales
