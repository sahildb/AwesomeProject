import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from './Colors';

const TabADetailsScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submitForm = () => {
    var emailValid = false;
    if (email == 0) {
      setEmailError('Please Enter Email ');
    } else if (
      !email.match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      )
    ) {
      setEmailError('Please Enter Valid Email ');
    } else {
      setEmailError('');
      emailValid = true;
    }

    var passwordValid = false;
    if (password == 0) {
      setPasswordError('Please Enter Password');
    } else if (
      !password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      )
    ) {
      setPasswordError('Please Enter Valid Password');
    } else {
      setPasswordError('');
      passwordValid = true;
    }
    if (emailValid === true && passwordValid === true) {
      navigation.navigate('Home Page');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          {/* <Text style={styles.headerText}>Login Page</Text> */}
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('./Assets/Images/logo.jpg')}
          />
        </View>

        <View>
          <Text style={styles.emailText}>Email Id</Text>
          <TextInput
            value={email}
            onChangeText={text => {setEmail(text)
            setEmailError("")
            }}
            style={styles.input}
            placeholder="Enter Your Email ID"
            placeholderTextColor={Colors.White}
            autoCapitalize={false}
           
          />
          <Text style={styles.emailError}>{emailError}</Text>
        </View>
        <View>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            value={password}
            onChangeText={text => {setPassword(text)
            setPasswordError("")}}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={Colors.White}
            autoCapitalize={false}
          />
          <Text style={styles.passwordError}>{passwordError}</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singupText}>
          <Text style={styles.regText}> Don't have account?</Text>
          <Text
            style={styles.regText2}
            onPress={() => navigation.navigate('RegisterPage')}>
            Click here to signup
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default TabADetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.YANKEES_BLUE,
  },
  header: {
    marginVertical: RFValue(30),
  },
  headerText: {
    fontSize: RFValue(24),
    alignSelf: 'center',
    color: Colors.White,
  },
  input: {
    margin: RFValue(14),
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.White,
    color: Colors.White,
  },
  emailText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(15),
    color: Colors.White,
  },
  emailError: {
    color: Colors.RED,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: RFValue(20),
  },
  passwordText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(15),
    color: Colors.White,
  },
  passwordError: {
    color: Colors.RED,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: RFValue(20),
  },
  userText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(16),
    color: Colors.White,
  },
  btnText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: Colors.YANKEES_BLUE,
  },
  regText: {
    color: Colors.White,
    fontSize: RFValue(14),
  },
  regText2: {
    color: Colors.White,
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginLeft: RFValue(2),
    textDecorationLine: 'underline',
  },
  singupText: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn: {
    margin: RFValue(30),
  },
  button: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.White,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button2: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    marginTop: RFValue(5),
    backgroundColor: Colors.White,
  },
  imgView: {
    alignItems: 'center',
    marginBottom: RFValue(20),
  },
  img: {
    width: RFValue(80),
    height: RFValue(80),
  },
});
