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

const Dashboard = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#A5C9CA'}}>
      <Text style={{alignSelf: 'center', marginTop: 100}}>
        This is a Dashborad
      </Text>
      <TouchableOpacity style={style.profile_pic}></TouchableOpacity>
      <View style={style.form_name}>
        <Text>Name :- Virendra Majhi</Text>
        <Text>Mobile :- 89898989</Text>
        <Text> City: - Nagpur</Text>
      </View>
      <BottomTab />
    </View>
  );
};

export default Dashboard;

const style = StyleSheet.create({
  search: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    paddingLeft: 100,
  },

  profile_pic: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 100,
  },
  form_name: {
    alignSelf: 'center',
    marginVertical: 50,
  },
});
