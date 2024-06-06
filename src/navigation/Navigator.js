import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../onboading/Splash';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import Contact from '../screens/Contact';
import Additem from '../screens/Additem';
import AddCompnt from '../component/AddCompnt';
import EditCompnt from '../component/EditCompnt';
import ViewCompnt from '../component/ViewCompnt';
import Login from '../onboading/Login';
import SingUp from '../onboading/SignUp';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="contact"
          component={Contact}
          //  options={{headerShown: false}}
        />

        <Stack.Screen
          name="additem"
          component={Additem}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="addcompnt" component={AddCompnt} />
        <Stack.Screen name="editcompnt" component={EditCompnt} />
        <Stack.Screen name="viewcompnt" component={ViewCompnt} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={SingUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
