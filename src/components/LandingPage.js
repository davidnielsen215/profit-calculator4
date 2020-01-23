import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import '../LandingPage.css'
import Logo from '../images/Logo.png' 
import EntireLogo from '../images/EntireLogo.png'
import { Spring } from 'react-spring/renderprops'

export default class LandingPage extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        
        return (
            
            <Spring 
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{ duration: 1000}}
            >
            { props => (
                <div style={props}>

                    <div className='maincont'>
                        <div className='container1'>
                            <img className='logo' src={Logo} alt=""/>
                            <img className='entirelogo' src={EntireLogo} alt=""/>
                        </div>
                        <div className="container">
                            <h1 className='title'>PROFIT CALCULATOR</h1>
                            <h1 className='question'><b>What's your number?</b></h1>
                            <h3 className='statement'><i>Find out how much extra profit you'll make with us</i></h3>
                            <h1 className='statement2'>Double Your Profit!</h1>
                            <Button onClick={this.continue}
                            style={styles.button}>Begin</Button>
                        </div>
                    </div>
                </div>
                    )}
            </Spring>
            
        )
    }
}
const styles = {
    button: {
        color: 'white',
        minWidth: '50%',
        margin: 25,
        backgroundColor: '#6f1502', 
        fontFamily: 'Roboto',
        fontSize: '20px'
    },
    
}

