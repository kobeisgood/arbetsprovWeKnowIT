/**
 * Component for the big text used on the top of every page 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

import { StyleSheet, Text, View, Button } from 'react-native';

interface Props {
    text: string
}


export const PageText = ( props:Props ) => {
    return(
        <View> 
            <Text style={{ fontSize: 24, marginTop:50 }}> {props.text} </Text>
        </View>
    )
}