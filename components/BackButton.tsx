/** 
 * Simple button to go back to home page 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER eg icon)
 */

 import { StackNavigationProp } from '@react-navigation/stack'
 import { NavigatorParamsList } from '../types'
 import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

 interface Props{
    navigation: StackNavigationProp<NavigatorParamsList>
}

export const BackButton = ( props:Props ) => {
    return (
        <View> 
            <TouchableOpacity style={{backgroundColor:"blue", height:50}} onPress={() => props.navigation.navigate('Home')}>
                <Text>CityPop</Text>
            </TouchableOpacity>
        </View>
    )
}
