/**
Screen where users can input a name of a city and are 
returned the population of that city
*/

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import React, { useState } from 'react';

import { fetchCityPopulation } from '../api/Cities';

import { PageText } from '../components/PageText'
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'
import { Input }  from '../components/Input'

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>
}

export const CitySearchPage = ( props:Props ) => {

    const [cityInput, setCityInput] = useState('')
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    /**
     * Method that resets the states of the page to their initial values 
     */
     const resetStates = () => {
        setCityInput('')
        setDisplayErrorMessage(false)
        setIsLoading(false)
    }

    /**
     * Navigates the user to the city results page with correct parameters
     * or displays an error message if a faulty city is searched
     * 
     * @param city The city that was inputted
     */
    const handleSearch = (city:string) => {
        setIsLoading(true)

        fetchCityPopulation(city).then(
            (response) => {
                // if the response isn't a number: display error message
                if (!isNaN(response)) {
                    resetStates()    
                    props.navigation.navigate('Result', {
                            input:city, 
                            result:response, 
                        })
                } else {
                    setIsLoading(false)
                    setDisplayErrorMessage(true)
                }      
        })
    }

    return (
        <View style={{marginTop:200}} >
            {isLoading ? <ActivityIndicator size='large' color='0000ff'/> :
            <View>
                <BackButton navigation={props.navigation}/>
                <PageText text="SEARCH BY CITY"/>
                {displayErrorMessage && !isLoading && 
                <Text> The city you have searched for does not exist, try again! </Text>
                }
                <Input placeholder='Enter a city' onChangeText={(val:any) => setCityInput(val)}/>
                <SearchButton onPress={() => handleSearch(cityInput)}/>
            </View>
            }
        </View>
    )
}