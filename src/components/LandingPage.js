import React, { Component } from 'react'
// import { Button } from '@material-ui/core'
import '../LandingPage.css'
import Logo from '../industry_gears/colorful.png' 
import EntireLogo from '../industry_gears/VLORM_logo2.png'
import { Spring } from 'react-spring/renderprops'

export default class LandingPage extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        
        return (
                    <div className='maincont'>
                        <div className='container1'>
                        <Spring 
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ duration: 1500}}
                        >
                        { props => (
                        <div style={props}>
                            <img className='logo' src={Logo} alt=""/>
                            <img className='landinglogo' src={EntireLogo} alt=""/>
                            </div>
                            )}
                        </Spring>
                        </div>
                        <div className="container">

                        <Spring 
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ duration: 1700}}
                        >
                        { props => (
                        <div style={props}>
                            <h1 className='title'>PROFIT CALCULATOR</h1>
                            <h1 className='question'><b>What's your number?</b></h1>
                            <h3 className='statement'><i>Find out how much extra profit you'll make with us</i></h3>
                            <h1 className='statement2'>Double Your Profit!</h1>
                            <button onClick={this.continue}
                            className='button'>B E G I N</button>

                            </div>
                            )}
                        </Spring>
                        </div>
                    </div>
                
            
        )
    }
}


