import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from './Colors';

const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  });
};

const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};
const isValidUser = value => {
  const regx = /^[A-Za-z]+$/;
  return regx.test(value);
};
const isValidPhone = value => {
  const regx = /^[0-9]{10}$/;
  return regx.test(value)
}
const isValidPassword = value => {
  const regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  return regx.test(value)
}
const RegisterPage = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    uname: '',
    phoneNum: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [error, setError] = useState('');
  const {uname, phoneNum, email, password, cpassword} = userInfo;

  const handleOnchangeText = (value, filedName) => {
    setUserInfo({...userInfo, [filedName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo)) {
      return updateError('Required all fields!', setError);
    }
    if (!isValidUser(uname)) {
      return updateError('Enter Valid User Name', setError);
    }

    if (!isValidPhone(phoneNum)) {
      return updateError('Please Enter Valid Number', setError);
    }
    
    if (!isValidEmail(email)) {
      return updateError('Invalid Email', setError);
    }
    if (!isValidPassword(password)) {
      return updateError('Please Enter Valid Password', setError);
    }
    if (cpassword != password) {
      return updateError('Please Enter Same Password', setError);
    }

    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      Alert.alert('Sucessfully Register');
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register Page</Text>
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('./Assets/Images/logo.jpg')}
          />
        </View>
        {error ? alert(error) : null}
        <View>
          <Text style={styles.userText}>User Name</Text>
          <TextInput
            value={uname}
            onChangeText={value => handleOnchangeText(value, 'uname')}
            style={styles.input}
            placeholder="Enter Your Name"
            placeholderTextColor={Colors.White}
          />
        </View>
        <View>
          <Text style={styles.userText}>Phone Number</Text>
          <TextInput
            value={phoneNum}
            onChangeText={value => handleOnchangeText(value, 'phoneNum')}
            style={styles.input}
            placeholder="Enter Your Phone Number"
            placeholderTextColor={Colors.White}
          />
        </View>
        <View>
          <Text style={styles.emailText}>Email Id</Text>
          <TextInput
            value={email}
            onChangeText={value => handleOnchangeText(value, 'email')}
            style={styles.input}
            placeholder="Enter Your Email ID"
            placeholderTextColor={Colors.White}
          />
        </View>
        <View>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            value={password}
            onChangeText={value => handleOnchangeText(value, 'password')}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={Colors.White}
          />
        </View>
        <View>
          <Text style={styles.ConfirmText}> Confirm Password</Text>
          <TextInput
            value={cpassword}
            onChangeText={value => handleOnchangeText(value, 'cpassword')}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor={Colors.White}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.YANKEES_BLUE,
  },
  header: {
    margin: RFValue(20),
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
  passwordText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(15),
    color: Colors.White,
  },
  ConfirmText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(13),
    color: Colors.White,
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
    fontSize: RFValue(18),
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
