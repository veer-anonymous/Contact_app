import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  // Navigation used
  const navigation = useNavigation();

  // UseEffect used for timer and call data from  AsyncStorage on time only
  useEffect(() => {
    try {
      setTimeout(() => {
        getData();
      }, 3000);
    } catch (error) {
      console.log('Splash cath error is here', error);
    }
  }, []);

  // Create a function for call data from AsyncStorage
  const getData = async () => {
    const User_token = await AsyncStorage.getItem('User_data');
    const convet = JSON.parse(User_token);
    // console.log('data see here', convet.token);
    navigation.navigate('login');
    // if (User_token != null) {
    //   navigation.navigate('dashboard');
    // } else {
    //   navigation.navigate('login');
    // }
  };

  return (
    <View style={style.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.theme_color_dark}
      />
      <Text style={style.text}>Splash Screen</Text>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.theme_color_dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: color.theme_color_light,
  },
});
