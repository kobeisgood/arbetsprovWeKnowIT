/**
Screen where users can input a name of a city and are 
returned the population of that city
*/


import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import { fetchCityPopulation } from '../api/Cities';

import { PageText } from '../components/PageText'
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>
}

// TODO: add functionality to handle a search 
export const CitySearchPage = ( props:Props ) => {
    return (
        <View style={{marginTop:200}}>
            <BackButton navigation={props.navigation}/>
            <PageText text="SEARCH BY CITY"></PageText>
            <SearchButton onPress={fetchCityPopulation}/>
        </View>
    )
}