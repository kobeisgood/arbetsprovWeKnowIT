/**
Screen where users can input a name of a city and are 
returned the population of that city
*/

import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import React, { useState } from 'react';

import { fetchCityPopulation } from '../api/Cities';

import { PageText } from '../components/PageText'
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'
import { Input }  from '../components/Input'
import { CityResultPage } from '../components/CityResultPage';

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>
}

export const CitySearchPage = ( props:Props ) => {

    const [cityInput, setCityInput] = useState('')
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)

    /**
     * Navigates the user to the city results page with correct parameters
     * 
     * @param city The city that was inputted
     */
    const handleSearch = (city:string) => {

         fetchCityPopulation(city).then(
             (response) => {
                 // if the response isn't a number: display error message
                 if (!isNaN(response)) {
                     props.navigation.navigate('CityResult', {
                        city:city, 
                        result:response, 
                    })
                 } else {
                     setDisplayErrorMessage(true)
                 }      
             })

         setDisplayErrorMessage(false)
    }

    return (
        <View style={{marginTop:200}} >
            <View>
                <BackButton navigation={props.navigation}/>
                <PageText text="SEARCH BY CITY"/>
                {displayErrorMessage && <Text> The city you have searched for does not exist, try again! </Text>}
                <Input placeholder='Enter a city' onChangeText={(val:any) => setCityInput(val)}/>
                <SearchButton onPress={() => handleSearch(cityInput)}/>
            </View>
        </View>
    )
}