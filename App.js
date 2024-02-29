import React, {useState} from "react";
import { Image, SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/Signup";
import Crud from "./src/screens/app/CRUD";
import ListUser from "./src/screens/app/listUser";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="ListUser" component={ListUser} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 