// import {View, Text, StyleSheet, StatusBar} from 'react-native';
// import React, {useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {color} from '../utils/Colors';

// const Splash = () => {
//   const navigation = useNavigation();
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('signup');
//       //navigation.navigate('login');'dashboard'
//     }, 3000);
//   }, []);
//   return (
//     <View style={style.container}>
//       <StatusBar
//         barStyle={'light-content'}
//         backgroundColor={color.theme_color_dark}
//       />
//       <Text style={style.text}>Splash Screen</Text>
//     </View>
//   );
// };

// export default Splash;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: color.theme_color_dark,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: color.theme_color_light,
//   },
// });
//import liraries
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
import axios from 'axios';

// create a component
const SignUp = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Too Short !')
      .max(50, 'Too Long')
      .required('Please enter your full name'),
    lastname: Yup.string()
      .min(2, 'Too Short !')
      .max(50, 'Too Long')
      .required('Please enter your full name'),
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter your full Email'),
    mobile: Yup.string()
      .max(10, 'Please enter the mobile number')
      .min(10, 'Please enter the mobile number')
      .matches(/^[0-9]+$/, 'Must Be olly digits')
      .required('Please enter your mobile number'),
    password: Yup.string()
      .min(8)
      .max(20)
      .required('Please enter the password the ')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, at least one uppercase letter, c',
      ),
    confirmPassword: Yup.string()
      .min(8, 'Pease Enter the correct passowrd')
      .oneOf([Yup.ref('password')], 'not matching  password ')
      .required('please enter paserod '),
  });
  const navigation = useNavigation();
  const callapi = async values => {
    // first time call here
    console.log('First Time Call', values);
    try {
      const response = await axios.post(authService.registerUser(values));
      console.log('call after axios', response);
      if (response && response.data) {
        //Handle this is a print
        console.log('Sinup is Successful', response.data);
      } else {
        console.log('Sinup is not successful', response.message);
      }
    } catch (error) {
      console.log('Error showing in the from', error);
    }
    // const apiCall = async values => {
    //   console.log('Form Values==>', values);
    //   try {
    //     const response = await authService.loginUser(values);
    //     console.log('fist print the output dadta ', response);
    //     if (response && response.data) {
    //       // Handle successful response
    //       console.log(
    //         'Login Successful',
    //         'You have logged in successfully!',
    //         response.data.token,
    //       );
    //       // You can also navigate to another screen or perform other actions here
    //     } else {
    //       // Handle unsuccessful response
    //       Alert.alert('Not valide user Plz check it');
    //       console.log(
    //         'Login failed. Please check your credentials.',
    //         response.message,
    //         // Alert.alert(response.message),
    //       );
    //     }
    //   } catch (error) {
    //     // Handle Error
    //     console.log('An error occurred. Please try again later.', error);
    //   }
    // };
  };
  return (
    <>
      {/* <View style={{backgroundColor: color.theme_color_dark}}>
       
      </View> */}

      {/* {
    "firstname": "VirendraMajhi",
    "lastname": "Majhi",
    "email": "virendramajhi03@gmail.com",
    "password": "Hello123@",
    "isActive": true
} */}
      <Formik
        initialValues={{
          firstname: ' ',
          lastname: '',
          email: ' ',
          // mobile: ' ',
          password: ' ',
          // confirmPassword: ' ',
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
              <Text style={styles.title}>SignUp</Text>
              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Full Name"
                  placeholderTextColor={'black'}
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={() => setFieldTouched('firstname')}
                />

                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.firstname}</Text>
                )}
              </View>
              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="LastName"
                  placeholderTextColor={'black'}
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={() => setFieldTouched('lastname')}
                />

                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.lastname}</Text>
                )}
              </View>
              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder=" Email"
                  placeholderTextColor={'black'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Full Mobile"
                  keyboardType="number-pad"
                  value={values.mobile}
                  onChangeText={handleChange('mobile')}
                  onBlur={() => setFieldTouched('mobile')}
                  maxLength={10}
                />
              </View>
              {touched.mobile && errors.mobile && (
                <Text style={styles.errorText}>{errors.mobile}</Text>
              )} */}
              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  placeholderTextColor={'black'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <View style={styles.inputWraper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="ConfirmPassword"
                  placeholderTextColor={'black'}
                  // value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                />
              </View>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
              <TouchableOpacity
                onPress={() => {
                  if (handleSubmit) {
                    callapi(values);
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
                  navigation.navigate('login');
                }}>
                <Text style={styles.ihave_acount_text}>
                  I have allready acount {'  '}?
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
    color: color.theme_color_dark,
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
export default SignUp;
