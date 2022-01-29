/**
Screen where users can input a name of a city and are 
returned the population of that city
*/


import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'


interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>
}

export const CitySearchPage = ( props:Props ) => {
    return (
        <View>
            <Button title="CityPop" onPress={() => props.navigation.goBack()} />
             <Text>SEARCH BY CITY</Text> 
            <Button title="ADD-SEARCH-ICON-HERE" onPress={() => props.navigation.navigate('Home')} />
        </View>
    )
}