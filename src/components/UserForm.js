import React, { Component } from 'react'
import StoreType from './StoreType'
import AnnualSales from './AnnualSales'
import NetProfit from './NetProfit'
import LastYear from './LastYear'
// import LoseInternet from './LoseInternet'
import LandingPage from './LandingPage'
import Calculation from './Calculation'

export class UserForm extends Component {
    state = {
        step: 1,
        storeType: '',
        annualSales: '',
        netProfit: '',
        lastYear: '',
        loseInternet: '',
        result: '',
        result2: '',
        email: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
          step: step + 1
        })
    }

    internetLoss = () => {
        const { storeType} = this.state
        if (storeType === "Snowboard Shop"){
            this.setState({
                loseInternet: "35%"
            })
        } if  (storeType === "Ski Shop"){
            this.setState({
                loseInternet: "15%"
            })
        } if  (storeType === "Ski + Snowboard Shop"){
            this.setState({
                loseInternet: "25%"
            })
        } if  (storeType === "Outdoor Gear + Wear"){
            this.setState({
                loseInternet: "15%"
            })
        }
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    restart = () => {
        this.setState({
            step: 1,
            storeType: '',
            annualSales: '',
            netProfit: '',
            lastYear: '',
            loseInternet: '',
            result: '',
            result2: '',
            result3: '',
            email: ''
        })
    }

    //Handle field change

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    setResult = () =>{
        const { result, result2, loseInternet, annualSales } = this.state
        // const var1 = parseFloat(lastYear)
        // const var2 = parseFloat(netProfit)
        const var3 = (parseFloat(loseInternet) / 100)
        const var4 = (parseFloat(loseInternet) / 100) + 1

        const equate = annualSales * var3
        const equate2 = annualSales * var4
        const equate3 = annualSales * (.05)

        this.setState({
            result: result + (equate).toFixed() ,
            result2: result2 + (equate2).toFixed(),
            result3: result + (equate3).toFixed()
        })
    }

    


    render() {
        const { step } = this.state
        const { storeType, annualSales, netProfit, lastYear, loseInternet, result, result2,result3, email } = this.state
        const values = {step, storeType, annualSales, netProfit, lastYear, loseInternet, result, result2, result3, email}
        // const result = parseInt(lastYear) + parseInt(netProfit)
        
        switch (step) {
            default:
                case 1: 
                return(
                    <LandingPage
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 2: 
                return(
                    <StoreType
                    nextStep={this.nextStep}
                    internetLoss={this.internetLoss}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 3:
                return(
                    <AnnualSales 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 4:
                return (
                    <NetProfit 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                )
            case 5:
                return (
                    <LastYear 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    setResult={this.setResult}/>
                )
            // case 6:
            //     return (
            //         <LoseInternet 
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChange={this.handleChange}
            //         values={values}
            //         setResult={this.setResult}
            //         />
            //     )
            case 6:
                return (
                    <Calculation
                    restart={this.restart}
                    values={values}
                    handleChange={this.handleChange}
                    />
                )
            }
    }
}

export default UserForm
