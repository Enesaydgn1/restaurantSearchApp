import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function Searchbar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgorundStyle}>
      <EvilIcons
        style={styles.iconStyle}
        name="search"
        size={24}
        color="white"
      />
      <TextInput
        placeholder="Ara..."
        placeholderTextColor="white"
        style={styles.InputStyle}
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgorundStyle: {
    backgroundColor: "#EA004B",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    margin: 10,
    borderRadius: 30,
  },
  iconStyle: {
    margin: 10,
  },
  InputStyle: {
    flex: 1,
    color: "white",
  },
});
