import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabsScreen from "./app/navigations/MainTabsScreen";
import { DrawerContent } from "./app/navigations/DrawerContent";

import BookmarkScreen from "./app/screens/BookmarkScreen";
import SettingScreen from "./app/screens/SettingScreen";
import SupportScreen from "./app/screens/SupportScreen";
import RootStackScreen from "./app/navigations/RootStackScreen";
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/*<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabsScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
  </Drawer.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
