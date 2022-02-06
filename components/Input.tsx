/**
 * Custom component for the text input
 *  
 */

 import { StyleSheet, View, TextInput} from 'react-native';

 interface Props {
     onChangeText:any,
     placeholder:string,
     value?:string
 }

export const Input = (props:Props) => {
    return(
        <View>
            <TextInput 
                placeholder={props.placeholder} 
                onChangeText={props.onChangeText} 
                autoCapitalize='words' 
                value={props.value} 
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding:8,
        borderWidth:1, 
        borderColor:'#777', 
        margin:10,
        width: 250

    }
})