/**
 * Component for a larger button that can navigate to different screens
 * 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

 interface Props {
     text: string,
     onPress: Function
  }

export const NavigationButton = ( props:Props ) => {
    return (
        <View> 
            <TouchableOpacity style={{backgroundColor:"orange", height:50, margin:8, borderWidth:1, borderColor:'black'}} onPress={() => props.onPress()}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
