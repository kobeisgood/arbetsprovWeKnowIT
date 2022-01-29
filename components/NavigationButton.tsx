/**
 * Component for a larger button that can navigate to different screens
 * 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

 import { StyleSheet, View, Button, NativeTouchEvent, NativeSyntheticEvent } from 'react-native';

 interface Props {
     title: string, 
     onPress: Function
  }

export const NavigationButton = ( props:Props ) => {
    return (
        <View> 
            <Button title={props.title} onPress={() => props.onPress()} />
        </View>
    )
}
