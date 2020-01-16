import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, AppBar, Button, FormControlLabel, Radio, 
        FormControl, TextField, Typography, Card, CardContent } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import EntireLogo from '../images/EntireLogo.png'



export class LoseInternet extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
        this.props.setResult()
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    getStep = (x) => {
        const returnedStep = x -1
        return returnedStep
    }

    setResult = e => {
        e.preventDefault()
        this.props.setResult()
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
            // decimalSeparator
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
                <AppBar position='static' style={{backgroundColor: '#151856' }}>
                        <Typography variant="h4" style={{paddingTop: '2%', paddingBottom: '2%', padding: "2%"}}>
                        What percent of your sales are lost to the internet? (Estimate)
                        </Typography>
                    </AppBar>     
                    <br></br>
                    <br></br>
                    <Card className="card">
                    <CardContent>       
                    <h4>Step {this.getStep(values.step)} of 5</h4>     
                    <br/>      
                    <FormControl component="fieldset" >
                    <RadioGroup onChange={handleChange('loseInternet')} defaultValue={values.loseInternet}>
                        <FormControlLabel value="5%" control={<Radio color="primary"/>} label="0% - 10%" />
                        <FormControlLabel value="15.5%" control={<Radio color="primary"/>} label="11% - 20%%" />
                        <FormControlLabel value="25.5%" control={<Radio color="primary"/>} label="21% - 30% (Industry Average)" />
                        <FormControlLabel value="35.5%" control={<Radio color="primary"/>} label="31% - 40%" />
                        <FormControlLabel value="45.5%" control={<Radio color="primary"/>} label="41% - 50%" />
                        <TextField
                            label="Other Amount"
                            onChange={handleChange('loseInternet')}
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: this.NumberFormatCustom1,
                            }}
                        />
                    </RadioGroup>
                    </FormControl>
                    <br/>
                    <Button 
                        style={styles.button2}
                        onClick={this.back}
                    >
                        previous
                    </Button>

                    <Button 
                        style={styles.button}
                        onClick={this.continue}
                    >
                        continue
                    </Button>
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

export default LoseInternet
