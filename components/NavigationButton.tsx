/**
 * Component for a larger button that can navigate to different screens
 *
 */

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface Props {
  text: string;
  onPress: Function;
  // below are optional props used for the citys fetched from country search
  key?: number;
}

export const NavigationButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 350,
    height: 50,
    margin: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
});
