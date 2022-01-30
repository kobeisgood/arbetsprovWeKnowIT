/**
Screen where users can input a name of a city and are 
returned the population of that city
*/


import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import React, { useEffect, useState } from 'react';

import { fetchCityPopulation } from '../api/Cities';

import { PageText } from '../components/PageText'
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'
import { Input }  from '../components/Input'


interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>
}

// TODO: fix bug where initial state of hasSearched forces a re-render and messes up the fetch
export const CitySearchPage = ( props:Props ) => {

    const [cityInput, setCityInput] = useState('')
    const [hasSearchedState, setHasSearchedState] = useState(false)
    const [population, setPopulation] = useState(0)

    // re-render page when search button is clicked
    useEffect(() => {
        console.log(cityInput)

        fetchCityPopulation(cityInput).then(
            (response) => {
                setPopulation(response)
            })
            console.log(hasSearchedState)
            console.log('we got this pop by pressing the button: ' + population)
    }, [hasSearchedState])

    return (
        <View style={{marginTop:200}}>
            <BackButton navigation={props.navigation}/>
            <PageText text="SEARCH BY CITY"/>
            <Input placeholder='Enter a city' onChangeText={(val:any) => setCityInput(val)}/>
            <Text> city: {cityInput} </Text>
            <SearchButton onPress={() => setHasSearchedState(true)}/>
        </View>
    )
}