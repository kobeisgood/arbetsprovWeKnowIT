/**  
Screen where users can input a name of a country and are 
returned the top 3 most populated cities in that country

Users can also press the cities to get navigated to a corresponding city search to get a population
*/

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import React, { useState } from 'react';

import { fetchThreeMostPopulatedCities } from '../api/Countries';

import { PageText } from '../components/PageText'
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'
import { Input } from '../components/Input';

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

// TODO: add functionality so pressing a city from the list shows its population 
export const CountrySearchPage = ( props:Props ) => {

    const [countryInput, setCountryInput] = useState('')
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    /**
     * Handles functionality when a user searches for a country 
     * 
     * @param country The country that was inputted 
     */
    const handleSearch = (country:string) => {

        fetchThreeMostPopulatedCities(country).then(
            (response) => {
                // if the response isn't an array, display error message 
                if (Array.isArray(response)) {
                    props.navigation.navigate('Result', {
                        input:country,
                        result:response
                    })
                } else {
                    setDisplayErrorMessage(true)
                }
            })
        setDisplayErrorMessage(false)
    }
    
  

    // TODO: add loading after a user searches for a country 
    return (
        <View style={{marginTop:200}}> 
            <View>
                <BackButton navigation={props.navigation}/>
                <PageText text="SEARCH BY COUNTRY"></PageText>
                {displayErrorMessage && <Text> The country you have searched for does not exist, try again! </Text>}
                <Input placeholder='Enter a country' onChangeText={(val:any) => setCountryInput(val)}/>
                <SearchButton onPress={() => handleSearch(countryInput)}/> 
            </View>
        </View>

    )
}