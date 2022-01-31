/**
Screen where users can input a name of a city and are 
returned the population of that city
*/


import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
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

// TODO: fix bug where initial state of hasSearched forces a re-render and messes up the fetch
export const CitySearchPage = ( props:Props ) => {

    const [cityInput, setCityInput] = useState('')
    const [hasSearchedState, setHasSearchedState] = useState(false)
    const [population, setPopulation] = useState(0)

    const handleSearch = (city:string) => {
        
        setHasSearchedState(true)
        fetchCityPopulation(city).then(
            (response) => {
                setPopulation(response)
            })
    }

    return (
        <View style={{marginTop:200}} >
            {hasSearchedState ? <View>
                <Text> pop: {population}</Text>
            </View> : 
            <View><BackButton navigation={props.navigation}/>
                <PageText text="SEARCH BY CITY"/>
                <Input placeholder='Enter a city' onChangeText={(val:any) => setCityInput(val)}/>
                <SearchButton onPress={() => handleSearch(cityInput)}/>
            </View>
            }
        </View>
    )
}