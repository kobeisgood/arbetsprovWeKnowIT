/**  
Screen where users can input a name of a country and are 
returned the top 3 most populated cities in that country

Users can also press the cities to get navigated to a corresponding city search to get a population
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import React, { useState } from 'react';

import { fetchThreeMostPopulatedCities } from '../api/Countries';

import { PageText } from '../components/PageText'
import { NavigationButton } from '../components/NavigationButton' // will be used later after search
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

// TODO: add functionality 
export const CountrySearchPage = ( props:Props ) => {

    const [countryInput, setCountryInput] = useState('')
    const [succesfulSearch, setSuccesfulSearch] = useState(false)
    const [result, setResult] : [string[], Function]  = useState([])
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)



    return (
        <View style={{marginTop:200}}> 
            <BackButton navigation={props.navigation}/>
            <PageText text="SEARCH BY COUNTRY"></PageText>
            <SearchButton onPress={fetchThreeMostPopulatedCities}/> 
        </View>
    )
}