//import liraries
import axios from 'axios';
import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {color} from '../utils/Colors';
import authService from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Login = () => {
  // Navigation for Navigate one place to another place
  const navigation = useNavigation();

  // Yup used For make Schema and Validation
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required('Please enter email'),
    password: Yup.string()
      .min(8)
      .max(20)
      .required('Please enter the password the ')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, at least one uppercase letter, c',
      ),
  });

  //Create a function  send data to server
  const apiCall = async values => {
    console.log('Form Values==>', values);
    try {
      // Data send to Sever through API
      const response = await authService.loginUser(values);
      console.log('zzzzzz', JSON.stringify(response));
      // Data convert string to ojbect
      const data = JSON.stringify(response.data);
      // Create a AsyncStorage for save Data of user
      const User_token = await AsyncStorage.setItem(
        'token',
        JSON.stringify(response.data.token),
      );
      navigation.navigate('dashboard');
      // const getDatafrom = await AsyncStorage.getItem('User_data');
      // console.log('Token data ', getDatafrom);

      // if (response && response.data) {
      //   // Handle successful response
      //   const User_token = await AsyncStorage.setItem(
      //     'User_token',
      //     response.data.JSON(),
      //   );
      //   const User_data = await AsyncStorage.setItem(
      //     'User_data',
      //     response.data,
      //   );
      //   navigation.navigate('dashboard');
      //   console.log(
      //     'Login Successful',
      //     'You have logged in successfully!',
      //     // response.data.token,
      //     User_data.data,
      //     'as dfsdfasdfsdf sfd token and ',
      //     // User_token,
      //   );
      //   // You can also navigate to another screen or perform other actions here
      // } else {
      //   // Handle unsuccessful response\
      //   Alert.alert('Sorry User Invalid Plz Check it');
      //   console.log(
      //     'Login failed. Please check your credentials.',
      //     response.message,
      //   );
      // }
    } catch (error) {
      // Handle Error
      Alert.alert('User Invalide plz check it');
      console.log('error.', error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          Alert.alert(JSON.stringify(values));
        }}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
          isValid,
        }) => (
          <View style={styles.container}>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={color.theme_color_dark}
            />
            <View style={styles.formcontainer}>
              <Text style={styles.title}>Login</Text>
              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  autoCapitalize="none"
                />
              </View>

              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Full Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  autoCapitalize="none"
                />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={() => {
                  if (handleSubmit) {
                    apiCall(values);
                  }
                }}
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: isValid
                      ? color.theme_color_dark_light2
                      : color.theme_color_dark_light3,
                  },
                ]}
                disabled={!isValid}>
                <Text style={styles.submitBtnText}>Submit Button</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ihave_acount}
                onPress={() => {
                  navigation.navigate('signup');
                }}>
                <Text style={styles.ihave_acount_text}>
                  I don't have acount {'  '}?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.theme_color_dark,
    paddingHorizontal: 20,
  },
  formcontainer: {
    backgroundColor: color.theme_color_light,
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: color.theme_color_dark_light1,
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 15,
  },
  inputWraper: {
    marginBottom: 1,
    marginTop: 15,
  },
  inputStyle: {
    borderColor: color.theme_color_dark,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
  },
  errorText: {
    fontSize: 12,
    color: color.text_warning_color,
  },
  submitBtn: {
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 10,
  },
  submitBtnText: {
    color: color.text_white_color,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  ihave_acount: {
    width: '100%',
    // backgroundColor: 'pink',
    marginVertical: 20,
  },
  ihave_acount_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: color.text_warning_color,
  },
});

//make this component available to the app
export default Login;
