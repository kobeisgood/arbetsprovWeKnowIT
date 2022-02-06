/**
 * Global styles for the app 
 */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white' ,  
        alignItems: 'center',
        justifyContent: 'center'       
    }, 
    contentContainer: {
        alignItems: 'center', 
        alignSelf: 'stretch',
        height: 300,
        marginBottom: 150,
        justifyContent:"center",
        // temporary stuff
        backgroundColor: "#eaeaea"
    },
    topContainer: {
        marginTop: 60,
        alignSelf: 'stretch',
        flexDirection: 'row',

    }, 
    resultText: {
        textTransform: 'uppercase'
    }
    // add text styling 
}) 