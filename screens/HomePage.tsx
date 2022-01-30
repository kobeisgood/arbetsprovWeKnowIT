/**
 * Home screen of app
 */

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigatorParamsList } from '../types'
import { PageText } from '../components/PageText'
import { NavigationButton } from '../components/NavigationButton'


interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'Home'>
}

export const HomePage = ( props:Props ) => {
    return (
        <View style={{marginTop:200}}> 
            <PageText text="CityPop"></PageText>
            <NavigationButton text="SEARCH BY CITY" onPress={() => props.navigation.navigate('CitySearch')} />
            <NavigationButton text="SEARCH BY COUNTRY" onPress={() => props.navigation.navigate('CountrySearch')} />
        </View>        
    )
}
