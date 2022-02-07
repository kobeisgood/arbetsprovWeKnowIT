/**
 * Screen that shows the result from a succesful search
 */

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorParamsList } from "../types";

import { BackButton } from "../components/BackButton";
import { PageText } from "../components/PageText";
import { useEffect, useState } from "react";
import { NavigationButton } from "../components/NavigationButton";
import { fetchCityPopulation } from "../api/Cities";
import { styles } from "../styles/styles";

interface Props {
  navigation: StackNavigationProp<NavigatorParamsList, "Result">;
  route: any;
}

export const ResultPage = (props: Props) => {
  // Parameters that are sent to the page
  const { input, result } = props.route.params;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [result]);

  /**
   * Re-renders the results page when a user presses a city from
   * the list after having searched a country
   *
   * @param city The city that was pressed
   *
   * */
  const handleCityPress = (city: string) => {
    fetchCityPopulation(city).then((response) => {
      props.navigation.navigate("Result", {
        input: city,
        result: response,
      });
    });
  };

  /**
   *
   * @param number The number to be formatted
   * @returns A string that has been formatted to divide a number by hundreds
   */
  const formatNumber = (number: number) => {
    let formattedNumber = number
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    return formattedNumber;
  };

  return (
    <View style={styles.appContainer}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="0000ff"
          style={{ marginTop: 300 }}
        />
      ) : (
        <>
          <View style={styles.topContainer}>
            <BackButton navigation={props.navigation} />
          </View>

          <View>
            <PageText text={input} />
          </View>

          {Array.isArray(result) ? (
            <View style={styles.contentContainer}>
              {result.map((city: string, index: number) => {
                return (
                  <NavigationButton
                    text={city}
                    onPress={() => handleCityPress(city)}
                    key={index}
                  />
                );
              })}
            </View>
          ) : (
            <View style={styles.contentContainer}>
              <View style={styles.populationContainer}>
                <Text> POPULATION</Text>
                <Text style={styles.resultText}>{formatNumber(result)}</Text>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};
