import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomTab from '../component/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../services/authService';

const Dashboard = () => {
  // Create a variable for a convert string data to object
  const [count, setCount] = useState(0);
  const [datas, setDatas] = useState([]);

  // UseEffect used for call data from AsyncStorage for one time
  useEffect(() => {
    try {
      user_data();
    } catch (error) {
      console.log('this is a error from Dashboard.js line 23', error);
    }
  }, []);

  //Create a function for get data from AsyncStorage and convert
  console.log('hillllo');
  const user_data = async () => {
    try {
      // const data = await AsyncStorage.getItem('User_data');
      // const convetdata = JSON.parse(data);
      // setDatas(data);
      // // setDatas = convet;
      // console.log('this is a user data', convetdata.firstname);

      const data = await authService.getUser();
      console.log('data print from 40 line no ', data);
    } catch (error) {
      console.log('cath error from Dashboard.js line 34 ', error);
    }
  };
  console.log('this is a user data', typeof datas);
  return (
    <View style={{flex: 1, backgroundColor: '#A5C9CA'}}>
      <Text style={{alignSelf: 'center', marginTop: 100}}>
        This is a Dashborad
      </Text>
      <TouchableOpacity style={style.profile_pic}>
        <Image source={require('../utils/imgs/two.jpg')} style={style.img} />
      </TouchableOpacity>
      <View style={style.form_name}>
        <Text style={style.text_name}>Name :-{datas._id}</Text>
        <Text>Mobile :- 89898989</Text>
        <Text> City: - Nagpur</Text>
        {/* <TouchableOpacity
          onPress={() => {
            setCount();
          }}
          style={{
            width: 50,
            height: 20,
            backgroundColor: 'pink',
          }}></TouchableOpacity>
        <Text>{datas}</Text> */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_name: {
    alignSelf: 'center',
    marginVertical: 50,
  },
  text_name: {
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
