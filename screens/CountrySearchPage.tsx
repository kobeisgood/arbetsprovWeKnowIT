/**  
Screen where users can input a name of a country and are 
returned the top 3 most populated cities in that country

Users can also press the cities to get their population
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import { PageText } from '../components/PageText'
import { NavigationButton } from '../components/NavigationButton' // will be used later after search
import { BackButton } from '../components/BackButton'


interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

export const CountrySearchPage = ( props:Props ) => {
    return (
        <View style={{marginTop:200}}> 
            <BackButton navigation={props.navigation}></BackButton>
            <Button title="CityPop" onPress={() => props.navigation.goBack()} />
            <PageText text="SEARCH BY COUNTRY"></PageText>
            <Button title="ADD-SEARCH-ICON-HERE" onPress={() => props.navigation.navigate('Home')} />
        </View>
    )
}