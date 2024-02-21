import React, {useState} from "react";
import { Image, SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/Signup";
import Home from "./src/screens/app/Home";
import Favourites from "./src/screens/app/Favourites";
import Profile from "./src/screens/app/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => {
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let icon;
        if (route.name === 'Home'){
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home_active.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/tabs/profile.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favourites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/book_mark.png');
        }

        return <Image/>
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: '#DADADA'},
    })}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Favourites" component={Favourites}/>
      <Tab.Screen name="Profile" component={Profile}/>
  </Tab.Navigator>
}
const App = () => {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        {isSignedIn ? (
          <>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
          </>
        ) : (
          <>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 