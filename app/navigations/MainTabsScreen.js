import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Button } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
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
      name="Details"
      component={DetailsStackScreen}
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
      component={ProfileScreen}
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

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
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
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
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
  </DetailsStack.Navigator>
);
