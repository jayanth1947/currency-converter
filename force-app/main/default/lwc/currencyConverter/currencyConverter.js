import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
export default class CurrencyConverter extends LightningElement {
    countryList=countryCodeList

    countryFrom="USD"
    countryTo="AUD"

    
    handleChange(event){
        const {name,value}=event.target
        console.log("Name",name);
        console.log("Value",value);
        this[name]=value
    }
}