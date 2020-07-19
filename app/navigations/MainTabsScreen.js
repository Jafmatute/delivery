import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Button } from "react-native-elements";
import { useTheme } from "react-native-paper";

import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";

const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => (
  <Tab.Navigator
    initialRouteName="Profile"
    activeColor="#e91e63"
    //style={{ backgroundColor: "white", color: "#fff" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#08d4c4",
        tabBarIcon: ({ color }) => (
          <Icon name="home" type="material-community" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsStackScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarColor: "#08d4c4",
        tabBarIcon: ({ color }) => (
          <Icon name="bell" type="material-community" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#08d4c4",
        tabBarIcon: ({ color }) => (
          <Icon
            name="account"
            type="material-community"
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Search",
        tabBarColor: "#08d4c4",
        tabBarIcon: ({ color }) => (
          <Icon
            name="magnify"
            type="material-community"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabsScreen;
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#08d4c4",
      },
      headerTintColor: "#ffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Button
            buttonStyle={{ backgroundColor: "#08d4c4" }}
            icon={{
              name: "menu",
              type: "material-community",
              backgroundColor: "#08d4c4",
            }}
            size={35}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const NotificationsStackScreen = ({ navigation }) => (
  <NotificationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#08d4c4",
      },
      headerTintColor: "#ffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationsStack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        headerLeft: () => (
          <Button
            buttonStyle={{ backgroundColor: "#08d4c4" }}
            icon={{
              name: "menu",
              type: "material-community",
              backgroundColor: "#08d4c4",
            }}
            size={35}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </NotificationsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //IOS
          elevation: 0, //Android
        },
        headerTintColor: colors.text,
        /*headerTitleStyle: {
        fontWeight: "bold",
      },*/
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          //title: "",
          headerLeft: () => (
            <Button
              buttonStyle={{ backgroundColor: colors.background }}
              icon={{
                name: "menu",
                type: "material-community",
                //backgroundColor: "#08d4c4",
                color: colors.text,
              }}
              size={35}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Button
              buttonStyle={{ backgroundColor: colors.background }}
              icon={{
                name: "account-edit",
                type: "material-community",
                //backgroundColor: "#08d4c4",
                color: colors.text,
              }}
              size={25}
              onPress={() => navigation.navigate("EditProfile")}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: "Edit Profile",
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
