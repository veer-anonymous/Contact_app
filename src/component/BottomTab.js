import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('contact');
        }}>
        <Text>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('additem');
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
const style = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: 100,
    backgroundColor: '#395B64',
    position: 'absolute',
    top: 750,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
