import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../utils/Colors';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signup');
      //navigation.navigate('login');'dashboard'
    }, 3000);
  }, []);
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
