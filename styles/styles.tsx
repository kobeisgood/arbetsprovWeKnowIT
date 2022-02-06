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
    topContainer: {
        marginTop: 60,
        alignSelf: 'stretch',
        flexDirection: 'row',

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
    populationContainer: {
        height: 100,
        alignSelf: 'stretch', 
        borderColor: 'black', 
        borderWidth: 1, 
        alignItems: 'center',
        justifyContent:"space-evenly"
    },
    resultText: {
        fontSize: 24
    }
   

}) 