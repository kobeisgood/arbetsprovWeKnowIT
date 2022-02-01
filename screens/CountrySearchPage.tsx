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
import { NavigationButton } from '../components/NavigationButton'
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'
import { Input } from '../components/Input';
import { CityResultPage } from '../components/CityResultPage';
import { fetchCityPopulation } from '../api/Cities';

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

// TODO: add functionality so pressing a city from the list shows its population 
export const CountrySearchPage = ( props:Props ) => {

    const [countryInput, setCountryInput] = useState('')
    const [successfulSearch, setSuccesfulSearch] = useState(false)
    const [result, setResult] : [string[], Function]  = useState([])
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)

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
                    setResult(response)
                } else {
                    setDisplayErrorMessage(true)
                    setSuccesfulSearch(false)
                }
            })
        
        setDisplayErrorMessage(false)
        setSuccesfulSearch(true)
    }
    
    /**
     * Navigates the user to the city results page with correct parameters
     * 
     * @param city The city that was inputted 
     *  
     * */
    const handleCityPress = (city:string) => {
        fetchCityPopulation(city).then(
            (response) => {
                props.navigation.navigate('CityResult', {
                    city:city, 
                    result:response, 
                })
            })
    }

    return (
        <View style={{marginTop:200}}> 
            {successfulSearch ? 
            <View> 
                <BackButton navigation={props.navigation}/>
                {result.map((city:string, index:number) => {
                    return (
                        <NavigationButton 
                            text={city} 
                            onPress={() => handleCityPress(city)} 
                            key={index}
                        />
                    )
                })}
            </View>
            :
            <View>
                <BackButton navigation={props.navigation}/>
                <PageText text="SEARCH BY COUNTRY"></PageText>
                {displayErrorMessage && <Text> The country you have searched for does not exist, try again! </Text>}
                <Input placeholder='Enter a country' onChangeText={(val:any) => setCountryInput(val)}/>
                <SearchButton onPress={() => handleSearch(countryInput)}/> 
            </View>
            }
        </View>

    )
}