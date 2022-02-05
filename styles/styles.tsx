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
        height: 300,
        marginTop: 20,
        // temporary stuff
        backgroundColor: "#eaeaea",
        justifyContent:"center"
    },
    topContainer: {
        marginTop: 50,
        // temporary stuff
        backgroundColor: 'purple'

    }
    // add text styling 
}) 