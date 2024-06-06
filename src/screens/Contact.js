import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomTab from '../component/BottomTab';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const data = {
    name: 'Virendra Majhi',
    mobile: '8989999988',
    city: 'Nagpur',
    Work: 'XYz',
  };
  const navigation = useNavigation();
  return (
    <View>
      <View style={style.search}>
        <TextInput placeholder="Search Here...." />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 70,
          backgroundColor: 'pink',
          marginVertical: 10,
        }}>
        <TouchableOpacity>
          <Text>Virendra Majhi</Text>
          <Text>8989889898</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('viewcompnt', {data: data});
          }}>
          <Text>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('additem');
          }}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 70,
          backgroundColor: 'pink',
          marginVertical: 10,
        }}>
        <TouchableOpacity>
          <Text>Ankit Warma</Text>
          <Text>899999998</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>View</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;

const style = StyleSheet.create({
  search: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    paddingLeft: 100,
  },
});
