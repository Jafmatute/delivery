import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  const theme = useTheme();
  //console.log(navigation);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={{ color: colors.text }}>Home Screen</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
