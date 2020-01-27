import React, { Component } from 'react'
import { MuiThemeProvider, 
        TextField, Card, CardContent, Paper } from '@material-ui/core'
import EntireLogo from '../images/EntireLogo.png'
import {Spring} from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'

class Calculation extends Component {
    state = {
        errorMsg : 'none',
        successMsg : 'none'
    }

    withCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    restart = (e) =>{
        e.preventDefault()
        this.props.restart()
    }

    enter = () => {
        const {values} = this.props
        if(values.email !== ''){
            this.props.hubSpot()
            this.setState({
                errorMsg: 'none',
                successMsg: '',
        })
        }else {
            this.setState({
                errorMsg: ''
            })
        }

    }

    render() {
        const { values, handleChange } = this.props
        return (
            <div className="lastbackground">
                <MuiThemeProvider>
                <React.Fragment>
                    <br/>
                    <br/>
                <Spring 
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{duration: 1500}}
                >
                { props => (
                <div style={props}>

                    <Card className='card'>
                        <CardContent>
                            <img className='lastlogo' src={EntireLogo} alt=""/>
                            <br/>
                            <br/>
                            <br/>

                        <Spring 
                        from={{ number: 0}}
                        to={{ number: `${values.annualSales}`}}
                        config={{ duration: 2000}}
                        >
                        { props => (
                        <div style={props}> 
                            <Paper elevation={3}>
                                <br/>
                                <h3>Current Annual Sales</h3>
                                <h2 style={{color: 'green'}}>${this.withCommas(props.number.toFixed())}</h2>
                                <br/>
                            </Paper>
                        </div> )} 
                        </Spring>

                        <br/>

                        <Spring 
                        from={{ number: 0}}
                        to={{ number: `${values.result3}`}}
                        config={{ duration: 2000}}
                        >
                        { props => (
                        <div style={props}>
                            <Paper elevation={3} >
                                <br/>
                                <h3>Additional BDR Profit</h3>
                                <h1 className="additionalProfit">${this.withCommas(props.number.toFixed())}</h1>    
                                <br/>                         
                            </Paper>
                        </div>
                        )}
                        </Spring>

                        <br/>

                        <Spring 
                        from={{ number: 0}}
                        to={{ number: `${values.result}`}}
                        config={{ duration: 2000}}
                        >
                        { props => (
                        <div style={props}>
                            <Paper elevation={3} >
                            <br/>
                                <h3>Current Amount Lost to Internet</h3>
                                <p>PND {values.loseInternet} based on industry average</p>
                                <h2 style={{color: 'red'}}>$-{this.withCommas(props.number.toFixed())}</h2>
                                <br/>
                            </Paper>
                        </div>
                        )}
                        </Spring>

                        <br/>

                        <Spring 
                        from={{  number: 0}}
                        to={{  number: `${values.result2}`}}
                        config={{ duration: 2000}}
                        >
                        { props => (
                        <div style={props}>
                            <Paper elevation={3}>
                            <br/>
                                <h3>Potential Market Share Maximum</h3>
                                <h2 style={{color: 'blue'}}>${this.withCommas(props.number.toFixed())}</h2>
                                <br/>
                            </Paper>
                        </div>
                        )}
                        </Spring>
                        <br/>
                        <div style={{background: 'linear-gradient(90deg, rgba(0,73,176,1) 0%, rgba(0,19,119,1) 100%)', borderRadius: '5px', height: '10%'}}>
                            <h3 style={{ color: 'white', padding: '4px'}}>Enter email to be sent results</h3>
                        </div>
                        <br/>
                        <div style={{display: `${this.state.errorMsg}`}}>
                            <Alert severity='error'><AlertTitle><p className='alert'>Please enter email address</p></AlertTitle></Alert>
                        </div>
                        <div style={{display: `${this.state.successMsg}`}}>
                            <Alert severity='success'><AlertTitle><p className='alert'>Information Submitted</p></AlertTitle></Alert>
                        </div>
                        <br/>
                        <TextField
                        label="Email"
                        onChange={handleChange('email')}
                        variant="outlined"
                        className="email"
                        />
                        <TextField
                        label="Name"
                        onChange={handleChange('firstName')}
                        variant="outlined"
                        className="email"
                        />
                        <br/>
                        <TextField
                        label="Company Name"
                        onChange={handleChange('company')}
                        variant="outlined"
                        className="email"
                        />

                        <TextField
                        label="Phone Number"
                        onChange={handleChange('phone')}
                        variant="outlined"
                        className="email"
                        />

                        
                        
                        <br/>
                        <button onClick={this.enter} className='continueButton'>Submit</button>
                        <br/>
                        <button onClick={this.restart} className='previousButton'>Restart</button>
                        <br/>
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

export default Calculation
