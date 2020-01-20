import React, { Component } from 'react'
import StoreType from './StoreType'
import AnnualSales from './AnnualSales'
import NetProfit from './NetProfit'
import LastYear from './LastYear'
// import LoseInternet from './LoseInternet'
import LandingPage from './LandingPage'
import Calculation from './Calculation'
import Axios from 'axios'


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
        email: '',
        firstName: '',
        company: '',
        phone: ''
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
        email: '',
        firstName: '',
        company: '',
        phone: ''
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

    hubSpot = () => {
 
         const key = '4d2b081d-ba0b-4671-9284-177c7f957f21'
         const baseUrl = `https://cors-anywhere.herokuapp.com/https://api.hubapi.com/contacts/v1/contact/?hapikey=${key}`
         
         Axios({
             method: 'post',
             url: baseUrl,
             headers: 
                 { 'Content-Type': 'application/json; charset=utf-8',},
             data: {
                 "properties": [
                     {
                       "property": "email",
                       "value": `${this.state.email}`
                     },
                     {
                         "property": "firstname",
                         "value": `${this.state.firstName}`
                       },
                       {
                         "property": "company",
                         "value": `${this.state.company}`
                       },
                       {
                         "property": "phone",
                         "value": `${this.state.phone}`
                       },
                     {
                       "property": "annualrevenue",
                       "value": `${this.state.annualSales}`
                     },
                     {
                         "property": "additionalprofit",
                         "value": `${this.state.result3}`
                       },
                     {
                       "property": "market_share_increase",
                       "value": `${this.state.result2}`
                     },
                     {
                       "property": "lost_to_internet",
                       "value": `${this.state.result}`
                     },
                     {
                        "property": "industry",
                        "value": `${this.state.storeType}`
                      },
                 ]   
             }
         }).then(res => {
             console.log(res.data)
             console.log('success')
         }).catch(err => {
             console.log('Failed to post contact')
             console.log(err)
             // console.log(values)
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
            case 6:
                return (
                    <Calculation
                    restart={this.restart}
                    values={values}
                    handleChange={this.handleChange}
                    hubSpot={this.hubSpot}
                    />
                )
            }
    }
}

export default UserForm
