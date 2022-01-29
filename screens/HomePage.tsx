/**
 * Home screen of app
 */
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigatorParamsList } from '../types'
import { PageText } from '../components/PageText'

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'Home'>
}

export const HomePage = ( props:Props ) => {
    return (
        <View> 
            <PageText text="CityPop"></PageText>
            <Button title="SEARCH BY CITY" onPress={() => props.navigation.navigate('CitySearch')} />
            <Button title="SEARCH BY COUNTRY" onPress={() => props.navigation.navigate('CountrySearch')} />
        </View>        
    )
}
