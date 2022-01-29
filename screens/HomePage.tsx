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
        <View> 
            <PageText text="CityPop"></PageText>
            <NavigationButton title="SEARCH BY CITY" onPress={() => props.navigation.navigate('CitySearch')} />
            <NavigationButton title="SEARCH BY COUNTRY" onPress={() => props.navigation.navigate('CountrySearch')} />
        </View>        
    )
}
