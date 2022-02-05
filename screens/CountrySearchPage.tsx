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
import { styles } from '../styles/styles';

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

export const CountrySearchPage = ( props:Props ) => {

    const [countryInput, setCountryInput] = useState('')
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    /**
     * Method that resets the states of the page to their initial values 
     */
    const resetStates = () => {
        setCountryInput('')
        setDisplayErrorMessage(false)
        setIsLoading(false)
    }

    /**
     * Navigates the user to the results page or 
     * displays error message if faulty country is searched
     * 
     * @param country The country that was inputted 
     */
    const handleSearch = (country:string) => {
        setIsLoading(true)

        fetchThreeMostPopulatedCities(country).then(
            (response) => {
                // if the response isn't an array, display error message 
                if (Array.isArray(response)) {
                    resetStates()
                    props.navigation.navigate('Result', {
                        input:country,
                        result:response
                    })
                } else {
                    setIsLoading(false)
                    setDisplayErrorMessage(true)    
                }
        })
    }

    return (
        <View style={styles.appContainer}>
            {isLoading ? <ActivityIndicator size='large' color='0000ff'/> :
            <>
            <View style={styles.topContainer}> 
                <BackButton navigation={props.navigation}/>
            </View>
            <View>
                <PageText text="SEARCH BY COUNTRY"></PageText>
            </View>
            <View style={styles.contentContainer}>
                {displayErrorMessage && !isLoading && 
                <Text> The country you have searched for does not exist, try again! </Text>
                }
                <Input placeholder='Enter a country' onChangeText={(val:any) => setCountryInput(val)}/>
                <SearchButton onPress={() => handleSearch(countryInput)}/> 
            </View>
            </>
            }
        </View>

    )
}