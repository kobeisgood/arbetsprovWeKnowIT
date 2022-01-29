/** 
 * Component for search button in city and country search 
 * 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER eg icon)
 */
 import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';


 interface Props{
    onPress:Function
}

export const SearchButton = ( props:Props ) => {
    return (
        <View> 
            <TouchableOpacity style={{backgroundColor:"red", height:50}} onPress={() => props.onPress()}>
                <Text>Search-Icon-Placeholder</Text>
            </TouchableOpacity>
        </View>
    )
}