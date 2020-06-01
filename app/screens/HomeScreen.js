import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default function HomeScreen({ navigation }) {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go.. details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
