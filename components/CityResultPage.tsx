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
    navigation: StackNavigationProp<NavigatorParamsList, 'CitySearch'>,
    city: string,
    result: number
}

export const CityResultPage = (props:Props) => {
    return (
        <View>
            <BackButton navigation={props.navigation}/>
            <Text> pop of {props.city}: {props.result}</Text>
        </View>)
}