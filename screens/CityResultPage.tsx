/**
 * Screen that shows the result from a succesful city search
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

 import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
 import { StackNavigationProp } from '@react-navigation/stack'
 import { NavigatorParamsList } from '../types'
  
 import { BackButton } from '../components/BackButton'
import { PageText } from '../components/PageText';
import { useEffect, useState } from 'react';

 interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'CityResult'>,
    route: any,
}

export const CityResultPage = (props:Props) => {

    // parameters that are sent to the page
    const {city, result} = props.route.params 

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [result])

    return (
        <View>
            {isLoading ? <ActivityIndicator size="large"/>
            :
            <View> 
                <BackButton navigation={props.navigation}/>
                <PageText text={city}/>
                <Text> pop: {result}</Text> 
            </View>
            }
        </View>)
}