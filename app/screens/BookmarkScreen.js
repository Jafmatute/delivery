import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert("click")} />
    </View>
  );
};
export default BookmarkScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
