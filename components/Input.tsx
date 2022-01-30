/**
 * Custom component for the text input
 *  
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

 import { StyleSheet, View, TouchableOpacity, Text, TextInput} from 'react-native';

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
                style={{padding:8, borderWidth:1, borderColor:'#777'}}
            />
        </View>
    )
}