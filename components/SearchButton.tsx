/**
 * Component for search button in city and country search
 *
 */

import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface Props {
  onPress: Function;
}

export const SearchButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
      {searchIcon}
    </TouchableOpacity>
  );
};

const searchIcon = <FontAwesome5 name={"search"} solid size={30} />;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
