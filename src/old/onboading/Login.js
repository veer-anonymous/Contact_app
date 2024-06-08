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

// create a component
const Login = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Too Short !')
      .max(50, 'Too Long')
      .required('Please enter your full name'),
    password: Yup.string()
      .min(8)
      .max(20)
      .required('Please enter the password the ')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, at least one uppercase letter, c',
      ),
  });
  const navigation = useNavigation();
  // "email": "virendramajhi03@.com",
  // "password": "Hello123@",
  const apiCall = async values => {
    console.log('hi this is an erroro of this of ');
    const user = {email: 'virendramajhi03@.com', password: 'Hello123@'};
    const response = await axios.post(
      'https://smsapi.sdcodefusion.com/api/users/login',
      user,
    );
    console.log('this is a response', JSON.stringify(response));

    // const call = await authService.loginUser(user);

    // console.log('this is apicall funcitons', call);
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
                  placeholder="Full Name"
                  value={values.name}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </View>

              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Full Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={() => {
                  if (handleSubmit) {
                    apiCall(values);
                    // navigation.navigate('dashboard');
                    //
                    // fetch('https://api.example.com/data')
                    //   .then(response => {
                    //     if (!response.ok) {
                    //       throw new Error('Network response was not ok');
                    //     }
                    //     return response.json();
                    //   })
                    //   .then(data => {
                    //     console.log('Data received:', data);
                    //   })
                    //   .catch(error => {
                    //     console.error(
                    //       'There was a problem with the fetch operation:',
                    //       error,
                    //     );
                    //   });

                    // "email": "ankitsharma03.com",
                    // "password": "Hello123@",
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
