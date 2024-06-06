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
import {useNavigation, useRoute} from '@react-navigation/native';

const ViewCompnt = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //console.log(route.params.data);
  return (
    <View>
      <TouchableOpacity style={style.profile_pic}></TouchableOpacity>

      <View style={style.input_name}>
        <Text style={style.text}>Name : </Text>
        <Text style={style.text}>{route.params.data.name}</Text>
      </View>

      <View style={style.input_name}>
        <Text style={style.text}>Mobile Number :</Text>
        <Text style={style.text}>{route.params.data.mobile}</Text>
      </View>

      <View style={style.input_name}>
        <Text style={style.text}>Company Name : </Text>
        <Text style={style.text}>{route.params.data.city}</Text>
      </View>

      <View style={style.input_name}>
        <Text style={style.text}>Location : </Text>
        <Text style={style.text}>{route.params.data.city}</Text>
      </View>
      {/* 
      <View style={style.btn_container}>
        <TouchableOpacity style={style.btn_save}>
          <Text style={style.text_save}>Save Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn_save}>
          <Text style={style.text_cancel}>Cancel Data</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default ViewCompnt;
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
    borderRadius: 70,
    backgroundColor: 'lightblue',
    alignSelf: 'center',
    marginVertical: 30,
  },
  input_name: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    //justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  btn_container: {
    width: '100%',
    // backgroundColor: 'pink',
    marginTop: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn_save: {
    width: '30%',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text_save: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  text_cancel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
});
