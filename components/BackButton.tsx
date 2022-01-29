/** 
 * Simple button to go back to home page 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

 import { StackNavigationProp } from '@react-navigation/stack'
 import { NavigatorParamsList } from '../types'


 interface Props{
    navigation: StackNavigationProp<NavigatorParamsList>
}

 import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';


export const BackButton = ( props:Props ) => {
    return (
        <View> 
            <TouchableOpacity style={{backgroundColor:"blue", height:50}} onPress={() => props.navigation.navigate('Home')}>

                {/*  // TODO change icon to an arrow*/} 
                <Image source={require('C:/WorkTests/WeKnowIT/arbetsprovWeKnowIT/assets/favicon.png')}></Image> 
                <Text> CityPop </Text>

            </TouchableOpacity>
        </View>
    )
}
