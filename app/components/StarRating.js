import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default function StarRating(props) {
  let star = [];
  for (var i = 1; i <= 5; i++) {
    let name = "star-face";
    if (i > props.ratings) {
      name = "star-off";
    }
    star.push(
      <Icon
        type="material-community"
        name={name}
        size={20}
        iconStyle={styles.star}
        key={i}
      />
    );
  }
  return (
    <View style={styles.container}>
      {star}
      <Text style={styles.text}> ({props.reviews}) </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "#FF8C00",
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: "#444",
  },
});
