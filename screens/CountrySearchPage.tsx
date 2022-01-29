/**  
Screen where users can input a name of a country and are 
returned the top 3 most populated cities in that country

Users can also press the cities to get navigated to a corresponding city search to get their population
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigatorParamsList } from '../types'

import { PageText } from '../components/PageText'
import { NavigationButton } from '../components/NavigationButton' // will be used later after search
import { BackButton } from '../components/BackButton'
import { SearchButton } from '../components/SearchButton'

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CountrySearch'>
}

// TODO: add functionality 
export const CountrySearchPage = ( props:Props ) => {
    return (
        <View style={{marginTop:200}}> 
            <BackButton navigation={props.navigation}/>
            <PageText text="SEARCH BY COUNTRY"></PageText>
            <SearchButton onPress={() => null}/> 
        </View>
    )
}