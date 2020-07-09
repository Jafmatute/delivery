import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { AuthContext  } from "../components/Context";

export function DrawerContent(props) {
  //console.log("drawer conten", props);
  const [darkTheme, setDarkTheme] = useState(false);

  const { signOut } = useContext(AuthContext);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://api.adorable.io/avatars/263/abott@adorable.pngCopy to Clipb",
                }}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                }}
              >
                <Title style={styles.title}>Josue A. Flores </Title>
                <Caption style={styles.caption}>jafmatute@gmail.com</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  10
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>

              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({ color, size }) => (
                <Icon
                  type="material-community"
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("Home")}
            />
            <DrawerItem
              label="Profile"
              icon={({ color, size }) => (
                <Icon
                  type="material-community"
                  name="account-edit"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("Profile")}
            />

            <DrawerItem
              label="Bookmars"
              icon={({ color, size }) => (
                <Icon
                  type="material-community"
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("Bookmark")}
            />
            <DrawerItem
              label="Settings"
              icon={({ color, size }) => (
                <Icon
                  type="material-community"
                  name="cogs"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("Setting")}
            />
            <DrawerItem
              label="Support"
              icon={({ color, size }) => (
                <Icon
                  type="material-community"
                  name="face-agent"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("Support")}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={darkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sing Up"
          onPress={()=> signOut()}
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="location-exit"
              color={color}
              size={size}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
