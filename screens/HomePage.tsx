/**
 * Home screen of app
 */

import {Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigatorParamsList } from '../types'
import { styles } from '../styles/styles';
import { NavigationButton } from '../components/NavigationButton'

interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'Home'>
}

export const HomePage = ( props:Props ) => {
    return (
        <View style={styles.appContainer}> 
            <Text style={{fontSize: 24, marginTop:120, fontWeight: 'bold'}}> CityPop </Text>

            <View style={styles.contentContainer}>
                <NavigationButton text="SEARCH BY CITY" onPress={() => props.navigation.navigate('CitySearch')} />
                <NavigationButton text="SEARCH BY COUNTRY" onPress={() => props.navigation.navigate('CountrySearch')} />
            </View>
        </View>        
    )
}
