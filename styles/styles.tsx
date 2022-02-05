/**
 * Global styles for the app 
 */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white' , // maybe change to white 
        alignItems: 'center'       
    }, 
    contentContainer: {
        alignItems: 'center', 
        alignSelf: 'stretch',
        height: 300,
        marginTop: 20,
        justifyContent:"center",
        // temporary stuff
        backgroundColor: "#eaeaea"
    },
    topContainer: {
        marginTop: 60,
        alignSelf: 'stretch',
        flexDirection: 'row',

    }
    // add text styling 
}) 