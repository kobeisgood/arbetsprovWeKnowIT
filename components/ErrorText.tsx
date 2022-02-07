/**
 * Component for the error text that shows on faulty search
 * 
 */

 import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

 interface Props {
     text: string
  }

export const ErrorText = ( props:Props ) => {
    return (
        <View style={styles.errorContainer} >
            <Text style={styles.errorText}>{props.text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    errorContainer: {
        width: 350,
        margin: 5, 
        alignItems: 'center',
        justifyContent:"center"      
    }, 
    errorText: {
        fontWeight: 'bold',
        color: 'red'
    }
})