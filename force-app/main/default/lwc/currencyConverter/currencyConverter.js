import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverter extends LightningElement {
    currencyImage=currencyConverterAssets+'/currencyConverterAssets/currency.svg'
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