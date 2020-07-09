import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go.. details screen... again"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="Go.. Home navigation"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go.. Back navigation"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go.. to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
