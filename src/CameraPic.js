import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import Colors from './Colors';
import { RFValue } from 'react-native-responsive-fontsize';
const CameraPic = ({navigation}) => {
  const [isPermitted, setIsPermitted] = useState(false);
  const [captureImages, setCaptureImages] = useState([]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestExternalWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  };

  const requestExternalReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Read Storage Permission',
          message: 'App needs Read Storage Permission',
        },
      );
      // If READ_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Read permission err', err);
    }
    return false;
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        if (await requestExternalWritePermission()) {
          if (await requestExternalReadPermission()) {
            setIsPermitted(true);
          } else alert('READ_EXTERNAL_STORAGE permission denied');
        } else alert('WRITE_EXTERNAL_STORAGE permission denied');
      } else alert('CAMERA permission denied');
    } else {
      setIsPermitted(true);
    }
  };

  const onBottomButtonPressed = event => {
    const images = JSON.stringify(event.captureImages);
    if (event.type === 'left') {
      setIsPermitted(false);
    } else if (event.type === 'right') {
      setIsPermitted(false);
      setCaptureImages(images);
      console.log(images);
    } else {
      Alert.alert(
        event.type,
        images,
        [{text: 'OK', onPress: () => console.log('OK Pressed', images)}],
        {cancelable: false},
      );
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      {isPermitted ? (
        <View style={{flex: 1}}>
          <CameraScreen
            actions={{
              rightButtonText: 'Done',
              leftButtonText: 'Cancel',
            }}
            onBottomButtonPressed={event => onBottomButtonPressed(event)}
            flashImages={{
              on: require('./Assets/Images/flashon.png'),
              off: require('./Assets/Images/flashoff.png'),
              auto: require('./Assets/Images/flashauto.png'),
            }}
            cameraFlipImage={require('./Assets/Images/flip.png')}
            captureButtonImage={require('./Assets/Images/capture.png')}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>React Native Camera</Text>
          <TouchableHighlight style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle} onPress={openCamera}>
              Open Camera
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle} onPress={() => navigation.navigate('VideoPlay')}>
            Go to Video 
            </Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CameraPic;

const styles = StyleSheet.create({
  main:{
    flex:1,
    
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: RFValue(10),
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:Colors.YANKEES_BLUE
  },
  titleText: {
    fontSize: RFValue(22),
    textAlign: 'center',
    fontWeight: 'bold',
    color:Colors.White
  },

  buttonStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(5),
    backgroundColor: Colors.White,
    marginTop: RFValue(20),
  },
  buttonTextStyle: {
    padding: RFValue(2),
    color:Colors.YANKEES_BLUE,
    textAlign: 'center',
    fontSize:RFValue(18)
  },
});
