import React, {useState} from "react";
import { Image, SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/splash";
import Home from "./src/screens/app/Home";
import Notification from "./src/screens/app/Notification";
import Profile from "./src/screens/app/Profile";
import Search from "./src/screens/app/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/Signup";

const HomeIcon = require('./src/assets/image/home.png');
const NotificationIcon = require('./src/assets/image/bell.png');
const SearchIcon = require('./src/assets/image/search.png');
const ProfileIcon = require('./src/assets/image/user.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return(
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconSource;

      if (route.name === 'Home') {
        iconSource = HomeIcon;
      } else if (route.name === 'Notification') {
        iconSource = NotificationIcon;
      } else if (route.name === 'Search') {
        iconSource = SearchIcon;
      } else if (route.name === 'Profile') {
        iconSource = ProfileIcon;
      }

      // Trả về component Image cho tabBarIcon
      return <Image source={iconSource} style={{ width: 20, height: 20 }} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  }}>
    <Tab.Screen name ='Home' component={Home} options={{headerShown: false}}/>
    <Tab.Screen name ='Notification' component={Notification} options={{headerShown: false}}/>
    <Tab.Screen name ='Search' component={Search} options={{headerShown: false}}/>
    <Tab.Screen name ='Profile' component={Profile} options={{headerShown: false}}/>
    
  </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 