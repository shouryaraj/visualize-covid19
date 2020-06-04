
import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
// CountryPicker Functions and passing the method as a parameter
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([])
    // Hooks in react
    useEffect(()=> {

        const fetchAPI = async () => {
            setFetchCountries( await fetchCountries())

        }
        fetchAPI();
        // only changes when setFetchCountries going to change
    }, [setFetchCountries])
    console.log(fetchedCountries)

    return(
        <FormControl className = {styles.formControl}>
              <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value ="global">Global</option>
                {/* Looping through each country in the html and making a option tag for each of it. */}
                {fetchedCountries.map((country, i) => <option  key={i} value ={country}> {country} </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker