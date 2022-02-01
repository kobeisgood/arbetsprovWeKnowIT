/**
 * Screen that shows the result from a succesful city search
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

 import { StyleSheet, Text, View } from 'react-native';
 import { StackNavigationProp } from '@react-navigation/stack'
 import { NavigatorParamsList } from '../types'
  
 import { BackButton } from './BackButton'

 interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CityResult'>,
    route: any,
}

export const CityResultPage = (props:Props) => {

    const {city, result} = props.route.params 

    return (
        <View>
            <BackButton navigation={props.navigation}/>
            <Text> pop of {city}: {result}</Text>
        </View>)
}