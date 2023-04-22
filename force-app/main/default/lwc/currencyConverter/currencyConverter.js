// Importing necessary modules and files
import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets'
export default class CurrencyConverterApp extends LightningElement {

  // Defining variables and assigning initial values
  currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg'

  countryList = countryCodeList // Here the country code is assigned

  countryFrom = "USD" //  Setting the initial value of the 'countryFrom' variable to 'USD'
  countryTo = "AUD"   //  Setting the initial value of the 'countryTo' variable to 'AUD'

  amount ='' // Intially the  amount field field is empty

  result
  error 

  // Function to handle changes in input fields
  handleChange(event){
    const {name, value} = event.target
    // console.log("name", name)
    // console.log("value", value)
    this[name] = value
    this.result=''
    this.error =''
  }

  // Function to handle form submission
  submitHandler(event){
    event.preventDefault()
    this.convert()
  }

  // Function to call the currency conversion API and update result or error variable
  async convert(){

    // This is the api URL
    const API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`


    try{

      // Fetch exchange rate data from the API
      const data = await fetch(API_URL)

      // Parse the response data into JSON format
      const jsonData = await data.json()

      // Calculate the converted currency amount based on user input and API response
      this.result = (Number(this.amount) * jsonData.result).toFixed(2)
      //console.log(this.result)
    }
    
    catch(error){

      // Log any errors to the console for debugging purposes
      console.log(error)

      // Set an error message to display to the user
      this.error="An error occurred. Please try again..."
    }
  }
}