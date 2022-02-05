/**
 * Home screen of app
 */

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigatorParamsList } from '../types'
import { styles } from '../styles/styles';
import { PageText } from '../components/PageText'
import { NavigationButton } from '../components/NavigationButton'



interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'Home'>
}

export const HomePage = ( props:Props ) => {
    return (
        <View style={styles.appContainer}> 
                        <PageText text="CityPop"></PageText>

            <View style={styles.contentContainer}>
                <NavigationButton text="SEARCH BY CITY" onPress={() => props.navigation.navigate('CitySearch')} />
                <NavigationButton text="SEARCH BY COUNTRY" onPress={() => props.navigation.navigate('CountrySearch')} />
            </View>
        </View>        
    )
}
