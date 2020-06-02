import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Click Here" onPress={() => alert("click")} />
    </View>
  );
};
export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
