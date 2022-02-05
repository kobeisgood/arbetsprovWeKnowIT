/**
 * Screen that shows the result from a succesful search 
 * 
 * (WORK IN PROGRESS)
 * (WILL FINISH STYLING LATER)
 */

 import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
 import { StackNavigationProp } from '@react-navigation/stack'
 import { NavigatorParamsList } from '../types'
  
import { BackButton } from '../components/BackButton'
import { PageText } from '../components/PageText';
import { useEffect, useState } from 'react';
import { NavigationButton } from '../components/NavigationButton';
import { fetchCityPopulation } from '../api/Cities';
import { styles } from '../styles/styles';

 interface Props{
    navigation: StackNavigationProp<NavigatorParamsList, 'Result'>,
    route: any,
}

export const ResultPage = (props:Props) => {

    // parameters that are sent to the page
    const {input, result} = props.route.params 

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [result])

    /**
     * Re-renders the results page when a user presses a city from 
     * the list after having searched a country
     * 
     * @param city The city that was pressed
     *  
     * */
       const handleCityPress = (city:string) => {
        fetchCityPopulation(city).then(
            (response) => {
                props.navigation.navigate('Result', {
                    input:city, 
                    result:response, 
                })
            })
    }

    // todo fix bug where the results are *in* the topcontainer
    return (
        <View style={styles.appContainer}>
            {isLoading ? <ActivityIndicator size="large" color='0000ff'/> :
            <>

            <View style={styles.topContainer}> 
                <BackButton navigation={props.navigation}/>
            </View>

            <View>             
                <PageText text={input}/> 
            </View>

                {Array.isArray(result) ? 
                <View style={styles.contentContainer}> 
                        {result.map((city:string, index:number) => {
                            return (
                                <NavigationButton 
                                    text={city} 
                                    onPress={() => handleCityPress(city)} 
                                    key={index}
                                />
                            )
                        })}
                </View>
                    : 
                <View style={styles.contentContainer}> 
                    <Text>{result}</Text> 
                </View>
                }
            </>
            }
        </View>
    )
}