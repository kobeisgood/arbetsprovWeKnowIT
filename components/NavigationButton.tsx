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
     onPress: Function,
     // below are optional props used for the citys fetched from country search
     key?: number,
  }

export const NavigationButton = ( props:Props ) => {
    return (
            <TouchableOpacity 
            style={{backgroundColor:"orange", height:50, margin:8, borderWidth:1, borderColor:'black'}} 
            onPress={() => props.onPress()}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
    )
}
