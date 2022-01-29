/**
Screen where users can input a name of a city and are 
returned the population of that city
*/


import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import { PageText } from '../components/PageText'
import { BackButton } from '../components/BackButton'


interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>
}

export const CitySearchPage = ( props:Props ) => {
    return (
        <View style={{marginTop:200}}>
            <BackButton navigation={props.navigation}></BackButton>
            <PageText text="SEARCH BY CITY"></PageText>
            <Button title="ADD-SEARCH-ICON-HERE" onPress={() => props.navigation.navigate('Home')} />
        </View>
    )
}