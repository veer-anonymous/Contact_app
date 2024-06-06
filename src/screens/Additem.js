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
import {Formik} from 'formik';
import * as Yup from 'yup';

const Additem = () => {
  const navigation = useNavigation();

  const validationSchemaCheck = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Please enter the name')
      .max(20, 'This is too much characters in')
      .required('Please enter  the Name'),
    mobile: Yup.string()
      .min(10, 'Please enter valide number')
      .max(10, 'Please enter valide number')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, at least one uppercase letter, c',
      )
      .required('Please enter the mobile number'),
    company: Yup.string().required('Please enter the company name'),
    location: Yup.string().required('Please enter the laction '),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        mobile: ' ',
        company: '',
        location: '',
      }}
      validationSchema={validationSchemaCheck}>
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => {
        <View style={{flex: 1}}>
          <TouchableOpacity style={style.profile_pic}></TouchableOpacity>

          <View style={style.input_name}>
            <Text style={style.text}>Name : </Text>

            <TextInput
              placeholder="Enter Name"
              style={style.text}
              placeholderTextColor={'lightgrey'}
              value={values.name}
              onChangeText={handleChange}
            />
          </View>

          <View style={style.input_name}>
            <Text style={style.text}>Mobile Number :</Text>
            <TextInput
              placeholder="Enter Name"
              style={style.text}
              placeholderTextColor={'lightgrey'}
            />
          </View>

          <View style={style.input_name}>
            <Text style={style.text}>Company Name : </Text>
            <TextInput
              placeholder="Enter Name"
              style={style.text}
              placeholderTextColor={'lightgrey'}
            />
          </View>

          <View style={style.input_name}>
            <Text style={style.text}>Location : </Text>
            <TextInput
              placeholder="Enter Name"
              style={style.text}
              placeholderTextColor={'lightgrey'}
            />
          </View>

          <View style={style.btn_container}>
            <TouchableOpacity style={style.btn_save}>
              <Text style={style.text_save}>Save Data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.btn_save}>
              <Text style={style.text_cancel}>Cancel Data</Text>
            </TouchableOpacity>
          </View>
        </View>;
      }}
    </Formik>
  );
};

export default Additem;

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
