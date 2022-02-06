/**
 * Component for the big text used on the top of every page 
 * 
 */

import { StyleSheet, Text, View } from 'react-native';

interface Props {
    text: string,
    style?: any
}

export const PageText = ( props:Props ) => {
    return(
        <View> 
            <Text style={styles.text}> {props.text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24, 
        marginTop:120,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})