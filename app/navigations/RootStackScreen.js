import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/account/SignInScreen";
import SignUpScreen from "../screens/account/SignUpScreen";
import SplashScreen from "../screens/account/SplashScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="SignIn" component={SignInScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
