/**  
Screen where users can input a name of a country and are 
returned the top 3 most populated cities in that country

Users can also press the cities to get their population
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'


interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

export const CountrySearchPage = ( props:Props ) => {
    return (
        <View> 
            <Button title="CityPop" onPress={() => props.navigation.goBack()} />
            <Text>SEARCH BY COUNTRY</Text> 
            <Button title="ADD-SEARCH-ICON-HERE" onPress={() => props.navigation.navigate('Home')} />
        </View>
    )
}