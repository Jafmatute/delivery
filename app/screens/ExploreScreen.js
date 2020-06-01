import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
      <Button title="Click Here" onPress={() => alert("click")} />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
