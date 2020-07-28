import React from "react";
import {
  StyleSheet,
  Safaç,
  View,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { Icon } from "react-native-elements";
import { useTheme } from "react-native-paper";
import Share from "react-native-share";

import files from "../../../assets/filesBase64";
const ProfileScreen = () => {
  const { colors } = useTheme();

  const myCustomShare = async () => {
    const shareOptions = {
      message: "Order your next meal from Findit App.  ",
      //url:files.image2
      //url:files.samplePdf
      //urls: [files.image1,files.image2]
      url: files.appLogo,
    };

    try {
      const shareResponse = await Share.open(shareOptions);
      console.log("RESPONSE SHARE", JSON.stringify(shareResponse));
    } catch (error) {
      console.log("Error =>>", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/*Informaciòn de inicio de sesiòn*/}
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri:
                "https://api.adorable.io/avatars/263/abott@adorable.pngCopy to Clipb",
            }}
            size={80}
          />

          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              Josue Ariel
            </Title>
            <Caption style={[styles.caption, { color: colors.text }]}>
              josueari20@gmail.com
            </Caption>
          </View>
        </View>
      </View>
      {/*Informaciòn usuario*/}
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon
            type="material-community"
            color="#777777"
            name="map-marker-radius"
            size={20}
          />
          <Text style={{ color: colors.text, marginLeft: 20 }}>
            Teguciglpa, Honduras
          </Text>
        </View>
        <View style={styles.row}>
          <Icon
            type="material-community"
            color="#777777"
            name="phone"
            size={20}
          />
          <Text style={{ color: colors.text, marginLeft: 20 }}>
            504+8784-3866
          </Text>
        </View>
        <View style={styles.row}>
          <Icon
            type="material-community"
            color="#777777"
            name="email"
            size={20}
          />
          <Text style={{ color: colors.text, marginLeft: 20 }}>
            josueari20@hotmail.com
          </Text>
        </View>
      </View>
      {/*Información usuario de compras y pedidos*/}
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            { borderTopColor: "#dddddd", borderRightWidth: 1 },
          ]}
        >
          <Title>$140</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      {/* Información usuario y servicios de la app */}
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              type="material-community"
              color="#ff6347"
              name="heart-outline"
              size={20}
            />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              type="material-community"
              color="#ff6347"
              name="credit-card-outline"
              size={20}
            />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon
              type="material-community"
              color="#ff6347"
              name="share-outline"
              size={20}
            />
            <Text style={styles.menuItemText}>Tell Ypur Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              type="material-community"
              color="#ff6347"
              name="settings-outline"
              size={20}
            />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
