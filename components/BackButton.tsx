/**
 * Simple button to go back to home page
 *
 */

import { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorParamsList } from "../types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface Props {
  navigation: StackNavigationProp<NavigatorParamsList>;
}

export const BackButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate("Home")}
    >
      {backIcon}
      <Text style={styles.text}>CityPop</Text>
    </TouchableOpacity>
  );
};

const backIcon = <FontAwesome5 name={"long-arrow-alt-left"} solid size={40} />;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    height: 50,
    width: 120,
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 5,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
    marginLeft: 10,
  },
});
