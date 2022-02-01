/**
 * Screen that shows the result from a succesful city search
 */


 import { StyleSheet, Text, View } from 'react-native';
 import { StackNavigationProp } from '@react-navigation/stack'
 import { NavigatorParamsList } from '../types'
 
 import React, { useState } from 'react';
 
 import { fetchCityPopulation } from '../api/Cities';
 
 import { PageText } from './PageText'
 import { BackButton } from './BackButton'
 import { SearchButton } from './SearchButton'
 import { Input }  from './Input'

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